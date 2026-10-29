import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The old domain forwards every address to the same page on the new one, so existing links and
  // Search Console history carry over. Attach both domains to the same Vercel project.
  // Switched on only after assetzpro.com is attached to the Vercel project: set REDIRECT_OLD_DOMAIN=1 there.
  async redirects() {
    if (process.env.REDIRECT_OLD_DOMAIN !== "1") return [];
    return ["arthavriksha.in", "www.arthavriksha.in", "www.assetzpro.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://assetzpro.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
