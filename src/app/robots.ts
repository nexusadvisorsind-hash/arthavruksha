import type { MetadataRoute } from "next";

// Same note as layout.tsx/sitemap.ts: switch to "https://arthavriksha.in"
// once the custom domain is registered and connected in Vercel.
const siteUrl = "https://arthavruksha.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
