/**
 * Generate SEO pages from batch 4 data
 * Run: npx tsx scripts/generate-seo-batch4.ts
 */
import { seoPagesBatch4 } from "../src/data/seo-pages-batch4";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const APP_DIR = join(__dirname, "..", "src", "app");

for (const page of seoPagesBatch4) {
  const dir = join(APP_DIR, page.slug);
  mkdirSync(dir, { recursive: true });

  // Convert FAQ and content to match LandingPage component props
  const features = [
    { title: "AI-Powered", desc: "Uses BRIA RMBG-2.0 AI model for precise background detection and removal." },
    { title: "Instant Results", desc: "Get your transparent PNG in seconds, not minutes." },
    { title: "Free to Use", desc: "3 free removals per day. No signup required." },
    { title: "High Quality", desc: "Clean edges, no artifacts. Production-ready output." },
  ];

  const content = `import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: ${JSON.stringify(page.title)},
  description: ${JSON.stringify(page.description)},
  keywords: ${JSON.stringify(page.keywords)},
  alternates: { canonical: ${JSON.stringify("/" + page.slug)} },
};

export default function Page() {
  return (
    <LandingPage
      title=${JSON.stringify(page.h1)}
      subtitle=${JSON.stringify(page.description)}
      description=${JSON.stringify(page.content)}
      features={${JSON.stringify(features, null, 8)}}
      faqs={${JSON.stringify(page.faq, null, 8)}}
    />
  );
}
`;

  writeFileSync(join(dir, "page.tsx"), content, "utf-8");
  console.log(`✅ ${page.slug}`);
}

console.log(`\nGenerated ${seoPagesBatch4.length} SEO pages from batch 4`);
