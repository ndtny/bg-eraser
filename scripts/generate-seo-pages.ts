/**
 * Generate SEO landing pages from seo-pages.ts data
 * Run: npx tsx scripts/generate-seo-pages.ts
 */
import { seoPages } from "../src/data/seo-pages";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const APP_DIR = join(__dirname, "..", "src", "app");

for (const page of seoPages) {
  const dir = join(APP_DIR, page.slug);
  mkdirSync(dir, { recursive: true });

  const content = `import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: ${JSON.stringify(page.title + " | AI BG Eraser")},
  description: ${JSON.stringify(page.metaDescription)},
  alternates: { canonical: ${JSON.stringify("/" + page.slug)} },
};

export default function Page() {
  return (
    <LandingPage
      title=${JSON.stringify(page.h1)}
      subtitle=${JSON.stringify(page.subtitle)}
      description=${JSON.stringify(page.description)}
      features={${JSON.stringify(page.features, null, 8)}}
      faqs={${JSON.stringify(page.faqs, null, 8)}}
    />
  );
}
`;

  writeFileSync(join(dir, "page.tsx"), content, "utf-8");
  console.log(`✅ ${page.slug}`);
}

console.log(`\nGenerated ${seoPages.length} SEO pages`);
