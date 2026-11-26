// Run against a running build:  npm run build && PORT=3100 npm start   then   BASE=http://localhost:3100 npm run check:seo
// Fails (exit 1) on any hard error. Keyword placement is reported as a warning list.
import { readFileSync } from "node:fs";

const BASE = (process.env.BASE ?? "http://localhost:3100").replace(/\/$/, "");
const keywords = JSON.parse(readFileSync(new URL("./keywords.json", import.meta.url), "utf8"));
const errors = [];
const warns = [];
const err = (path, msg) => errors.push(`${path}: ${msg}`);
const warn = (path, msg) => warns.push(`${path}: ${msg}`);

const get = async (path) => {
  const r = await fetch(BASE + path, { redirect: "manual" });
  return { status: r.status, body: await r.text() };
};
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;|&rsquo;/g, "'").replace(/\s+/g, " ");

const sitemap = (await get("/sitemap.xml")).body;
const paths = [...sitemap.matchAll(/<loc>https:\/\/assetzpro\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
if (paths.length < 10) err("/sitemap.xml", `only ${paths.length} URLs`);
const known = new Set(paths);
const titles = new Map();
const descs = new Map();
const pages = {};

for (const path of paths) {
  const { status, body: html } = await get(path);
  if (status !== 200) { err(path, `status ${status}`); continue; }
  pages[path] = html;
  const title = ((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "").replace(/&amp;/g, "&");
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "";
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) ?? [])[1] ?? "";
  const h1s = html.match(/<h1[\s>]/g) ?? [];
  if (!title) err(path, "no title"); else if (title.length > 65) warn(path, `title ${title.length} chars`);
  if (titles.has(title)) err(path, `duplicate title with ${titles.get(title)}`); titles.set(title, path);
  if (desc.length < 80 || desc.length > 160) warn(path, `description ${desc.length} chars`);
  if (descs.has(desc)) err(path, `duplicate description with ${descs.get(desc)}`); descs.set(desc, path);
  const want = `https://assetzpro.com${path === "/" ? "" : path}`;
  if (canon.replace(/\/$/, "") !== want.replace(/\/$/, "")) err(path, `canonical is ${canon}, expected ${want}`);
  if (h1s.length !== 1) err(path, `${h1s.length} h1 tags`);

  // JSON-LD must parse, and breadcrumb/webpage must exist on inner pages
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const types = new Set();
  for (const b of blocks) {
    try {
      const j = JSON.parse(b[1]);
      for (const n of [j, ...(j["@graph"] ?? [])]) [n["@type"]].flat().forEach((t) => t && types.add(t));
    } catch { err(path, "invalid JSON-LD"); }
  }
  if (path !== "/" && !types.has("BreadcrumbList")) err(path, "no BreadcrumbList");
  if (path.startsWith("/blog/") && !types.has("Article")) err(path, "no Article schema");
  if (/<summary/.test(html) && !types.has("FAQPage")) warn(path, "visible FAQ without FAQPage schema");
  if (!types.has("FinancialService")) err(path, "organisation schema missing");

  // wording rules from the compliance review
  const text = strip(html);
  const bad = [/\b(we|our|ours|ourselves)\b/i, /\bus\b(?!e)/, /\badvis[eo]r\b/i, /\bIFA\b/, /\bwealth manage/i, /\bguaranteed? returns?\b/i, /\b(best|top)\s+(mutual|sip|fund|insurance|loan|property|real)/i];
  for (const re of bad) {
    const m = text.match(re);
    if (m && !/not a (fee-charging )?(investment )?advis[eo]r/i.test(text.slice(Math.max(0, m.index - 60), m.index + 60)) && !/Fee-Only|fee-based advis/i.test(text.slice(Math.max(0, m.index - 80), m.index + 80))) err(path, `banned wording "${m[0]}" near: ${text.slice(Math.max(0, m.index - 40), m.index + 40)}`);
  }
  if (/mutual fund/i.test(text) && !/subject to market risks/i.test(text)) warn(path, "mentions mutual funds without the market-risk line");

  // internal links must exist
  for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = m[1].replace(/\/$/, "") || "/";
    if (/\.(png|svg|ico|jpg|webp|txt|xml|css|js)$/.test(href) || href.startsWith("/_next") || href === "/admin" || href.startsWith("/api")) continue;
    if (!known.has(href)) err(path, `link to unknown page ${href}`);
  }
}

// keyword placement: title / h1 / heading / body
const rows = [];
for (const [kw, path] of keywords) {
  const html = pages[path];
  if (!html) { err(path, `keyword page missing for "${kw}"`); continue; }
  const lc = (s) => s.toLowerCase();
  const title = (html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "";
  const h1 = strip((html.match(/<h1[\s\S]*?<\/h1>/) ?? [""])[0]);
  const heads = [...html.matchAll(/<h[23][\s\S]*?<\/h[23]>/g)].map((m) => strip(m[0])).join(" | ");
  const body = strip(html);
  const k = lc(kw);
  const where = lc(title).includes(k) ? "title" : lc(h1).includes(k) ? "h1" : lc(heads).includes(k) ? "heading" : lc(body).includes(k) ? "body" : "MISSING";
  rows.push(`${where.padEnd(8)} ${kw}  (${path})`);
  if (where === "MISSING") err(path, `keyword "${kw}" not on page`);
}
console.log(rows.join("\n"));
console.log(`\n${paths.length} pages checked, ${errors.length} errors, ${warns.length} warnings`);
for (const w of warns) console.log("warn  " + w);
for (const e of errors) console.log("ERROR " + e);
process.exit(errors.length ? 1 : 0);
