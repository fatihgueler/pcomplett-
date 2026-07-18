import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { servicesDetail } from "@/lib/pages";
import { blogPosts } from "@/lib/blog";

const lastModified = new Date("2026-07-18");

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/leistungen`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/ki-in-der-praxis`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/ueber-uns`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/referenzen`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/kontakt`, lastModified, changeFrequency: "yearly", priority: 0.8 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesDetail.map((s) => ({
    url: `${siteConfig.url}/leistungen/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const legal: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/impressum`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/datenschutz`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/agb`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...main, ...serviceRoutes, ...blogRoutes, ...legal];
}
