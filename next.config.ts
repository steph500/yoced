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
      // Two fields were renamed after launch: Agriculture & Food Systems became
      // Agriculture & Food Security, and Youth & Creative Rights was widened
      // into Creatives. Both had live, shareable URLs — so both keep working.
      {
        source: "/programs/agriculture-food-systems",
        destination: "/programs/agriculture-food-security",
        permanent: true,
      },
      {
        source: "/programs/youth-creative-rights",
        destination: "/programs/creatives",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
