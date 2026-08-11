import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        // yoced.com is canonical — it is what site.url, every canonical tag and
        // the sitemap point at. Without this, www serves a full duplicate of the
        // site on a second hostname.
        //
        // Kept here rather than in Vercel's dashboard so the rule is versioned,
        // reviewable, and survives the project being re-created.
        source: "/:path*",
        has: [{ type: "host", value: "www.yoced.com" }],
        destination: "https://yoced.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
