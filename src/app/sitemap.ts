import type { MetadataRoute } from "next";
import { seoPages } from "@/data/seo-pages";
import { seoPagesBatch2 } from "@/data/seo-pages-batch2";
import { seoPagesBatch3 } from "@/data/seo-pages-batch3";
import { seoPagesBatch4 } from "@/data/seo-pages-batch4";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.aibgeraser.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Original 5 SEO pages
  const originalSeoSlugs = [
    "remove-background-from-image",
    "remove-background-from-photo",
    "transparent-background-maker",
    "product-photo-background-remover",
    "remove-white-background",
  ];

  const originalSeoPages: MetadataRoute.Sitemap = originalSeoSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // New generated SEO pages
  const allSeoPages = [...seoPages, ...seoPagesBatch2, ...seoPagesBatch3, ...seoPagesBatch4];
  const generatedSeoPages: MetadataRoute.Sitemap = allSeoPages.map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...originalSeoPages, ...generatedSeoPages];
}
