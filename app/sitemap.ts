import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages = [
    {
      url: base,
      changeFrequency: "monthly" as const,
      priority: 1.0,
      lastModified: new Date("2026-06-24"),
    },
    {
      url: `${base}/blog`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      lastModified: new Date("2026-06-24"),
    },
    {
      url: `${base}/privacidade`,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      lastModified: new Date("2026-06-01"),
    },
  ];

  // Parse blog post dates — blog-data stores dates as "DD mmm YYYY" (e.g. "05 mar 2025")
  const parseBlogDate = (dateStr: string): Date => {
    const months: Record<string, number> = {
      jan: 0, fev: 1, mar: 2, abr: 3, mai: 4, jun: 5,
      jul: 6, ago: 7, set: 8, out: 9, nov: 10, dez: 11,
    };
    const parts = dateStr.split(" ");
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = months[parts[1].toLowerCase()] ?? 0;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    }
    return new Date();
  };

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: parseBlogDate(post.date),
  }));

  return [...staticPages, ...blogPages];
}
