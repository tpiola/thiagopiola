import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
  ];
}
