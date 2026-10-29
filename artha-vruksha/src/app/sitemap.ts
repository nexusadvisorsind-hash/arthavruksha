import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { PAGE_DATES, SITE_URL, isoDate } from "@/lib/seo";

type Entry = { path: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number };

const staticPages: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/mutual-funds", changeFrequency: "monthly", priority: 0.9 },
  { path: "/real-estate", changeFrequency: "monthly", priority: 0.9 },
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
