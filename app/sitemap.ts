import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { programs } from "@/lib/programs";
import { ventures } from "@/lib/ventures";
import { audiences } from "@/lib/audiences";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (path: string) => `${site.url}${path}`;

  return [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: url("/programs"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/how-it-works"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/work"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ventures"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/partners"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    ...programs.map((program) => ({
      url: url(`/programs/${program.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...ventures.map((venture) => ({
      url: url(`/ventures/${venture.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...audiences.map((audience) => ({
      url: url(`/for/${audience.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
