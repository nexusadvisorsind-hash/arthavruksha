import type { Metadata } from "next";

export const SITE_URL = "https://arthavriksha.in";
const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "Artha Vriksha Services" };

/** Keeps description under Google's visible length without cutting mid-word. */
export function clamp(text: string, max = 155) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
}

/** One place to build title, description, canonical, Open Graph and Twitter tags so every page agrees. */
export function pageMeta(opts: { title: string; description: string; path: string; type?: "website" | "article" }): Metadata {
  const description = clamp(opts.description);
  return {
    title: { absolute: opts.title },
    description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: opts.type ?? "website",
      locale: "en_IN",
      siteName: "Artha Vriksha Services",
      url: opts.path,
      title: opts.title,
      description,
      images: [OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title: opts.title, description, images: [OG_IMAGE.url] },
  };
}

/** "September 2026" -> "2026-09-01" so Article schema carries a valid ISO date. */
export function isoDate(label: string) {
  const d = new Date(`${label} 1 UTC`);
  return isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

/** "2026-10-26": the date the page content last changed. Feeds sitemap lastmod and "Last updated" bylines. */
export const PAGE_DATES: Record<string, string> = {
  "/": "2026-10-26",
  "/mutual-funds": "2026-10-26",
  "/real-estate": "2026-10-26",
  "/insurance": "2026-10-26",
  "/loans": "2026-10-26",
  "/pune": "2026-10-26",
  "/ahmedabad": "2026-10-26",
  "/calculators": "2026-10-26",
  "/about-us": "2026-10-26",
  "/contact": "2026-10-16",
  "/blog": "2026-10-26",
  "/privacy-policy": "2026-10-26",
  "/terms-of-use": "2026-10-16",
};

export function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${SITE_URL}${t.path === "/" ? "" : t.path}`,
    })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

/** WebPage node that ties a page to the site, its date and the one-line answer AI tools can quote. */
export function webPageLd(opts: { path: string; name: string; description: string; about?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${opts.path}#webpage`,
    url: `${SITE_URL}${opts.path}`,
    name: opts.name,
    description: opts.description,
    inLanguage: "en-IN",
    dateModified: PAGE_DATES[opts.path],
    isPartOf: { "@type": "WebSite", name: "Artha Vriksha Services", url: SITE_URL },
    ...(opts.about ? { about: opts.about } : {}),
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["[data-short-answer]"] },
  };
}
