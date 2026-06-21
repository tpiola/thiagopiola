import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { SLUGS } from "@/lib/slugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages = [
    { url: base, changeFrequency: "monthly" as const, priority: 1.0 },
    { url: `${base}/blog`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/privacidade`, changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const blogPages = SLUGS.map((slug) => ({
    url: `${base}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages].map((p) => ({ ...p, lastModified: new Date() }));
}
