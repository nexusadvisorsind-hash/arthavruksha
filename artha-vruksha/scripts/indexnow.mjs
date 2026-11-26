// Tells Bing, Yandex and other IndexNow engines which URLs exist, right after a production deploy.
// Never fails the build: if the ping is refused, the sitemap still does the job more slowly.
const HOST = "assetzpro.com";
const KEY = "aa8860b30a777bbab281c64ef68a348b";

if (process.env.VERCEL_ENV !== "production" && !process.env.INDEXNOW_FORCE) {
  console.log("IndexNow: skipped (runs on Vercel production builds only; set INDEXNOW_FORCE=1 to run by hand)");
  process.exit(0);
}

try {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) throw new Error("no URLs found in the live sitemap");
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
  });
  console.log(`IndexNow: ${urlList.length} URLs sent, status ${res.status}`);
} catch (err) {
  console.log("IndexNow: not sent (" + err.message + ")");
}
