import type { MetadataRoute } from "next";
import { programs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://yoced.com";
  const staticRoutes = ["", "/programs", "/ventures", "/partners", "/about", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : .8 })),
    ...programs.map((program) => ({ url: `${base}/programs/${program.slug}`, changeFrequency: "monthly" as const, priority: .75 }))
  ];
}
