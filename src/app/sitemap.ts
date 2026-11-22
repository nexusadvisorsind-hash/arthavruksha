import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { PAGE_DATES, SITE_URL, isoDate } from "@/lib/seo";

type Entry = { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number };

const staticPages: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mutual-funds", changeFrequency: "monthly", priority: 0.9 },
  { path: "/real-estate", changeFrequency: "monthly", priority: 0.9 },
  { path: "/real-estate/pune", changeFrequency: "monthly", priority: 0.9 },
  { path: "/real-estate/ahmedabad", changeFrequency: "monthly", priority: 0.9 },
  { path: "/real-estate/pune/amanora", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/magarpatta", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/hadapsar", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/kharadi", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/koregaon-park", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/viman-nagar", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/kalyani-nagar", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/mundhwa", changeFrequency: "monthly", priority: 0.7 },
  { path: "/real-estate/pune/amanora/flat-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/amanora/flat-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/amanora/office-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/amanora/office-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/amanora/shop-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/amanora/shop-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/flat-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/flat-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/office-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/office-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/shop-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/magarpatta/shop-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/flat-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/flat-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/office-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/office-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/shop-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/kharadi/shop-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/flat-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/flat-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/office-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/office-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/shop-for-rent", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/pune/hadapsar/shop-for-sale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/gift-city", changeFrequency: "monthly", priority: 0.8 },
  { path: "/real-estate/dholera", changeFrequency: "monthly", priority: 0.8 },
  { path: "/insurance", changeFrequency: "monthly", priority: 0.9 },
  { path: "/loans", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pune", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ahmedabad", changeFrequency: "monthly", priority: 0.8 },
  { path: "/calculators", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.6 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-use", changeFrequency: "yearly", priority: 0.3 },
];

// lastModified comes from PAGE_DATES and each post's own date, so it only moves when a page really changes.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path === "/" ? "/" : p.path}`,
    lastModified: PAGE_DATES[p.path],
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: isoDate(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
