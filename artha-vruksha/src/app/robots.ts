import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Search and AI crawlers are welcome on public pages. The admin area and the API stay private.
export default function robots(): MetadataRoute.Robots {
  const privatePaths = ["/admin", "/api"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: privatePaths },
      ...["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot"].map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: privatePaths,
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
