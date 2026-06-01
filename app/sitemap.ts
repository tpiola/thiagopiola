import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  // Section anchors on the single-page site
  const sections = [
    "autoridade",
    "competencias",
    "projetos",
    "tecnologia",
    "trajetoria",
    "contato",
  ];

  for (const section of sections) {
    entries.push({
      url: `${site.url}/#${section}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
