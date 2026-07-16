import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const lastModified = new Date("2026-07-16");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/agb`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
