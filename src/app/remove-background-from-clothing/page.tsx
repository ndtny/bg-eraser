import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Clothing Photos Free | AI BG Eraser",
  description: "Remove background from clothing photos free. Perfect white backgrounds for e-commerce fashion. AI-powered, instant results.",
  alternates: { canonical: "/remove-background-from-clothing" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Clothing"
      subtitle="E-Commerce Clothing Photo Background Removal"
      description="Remove backgrounds from clothing and apparel photos for your online store. Clean white backgrounds that boost sales."
      features={[
        {
                "title": "Fashion E-Commerce",
                "desc": "Create clean product photos for fashion stores on Shopify, Amazon, Poshmark, and more."
        },
        {
                "title": "Flat Lay Photos",
                "desc": "Works with flat lay photography, mannequin shots, and model photos."
        },
        {
                "title": "Detail Preservation",
                "desc": "AI preserves fabric textures, patterns, and fine clothing details."
        },
        {
                "title": "Consistent Catalog",
                "desc": "Give your entire clothing catalog a consistent, professional look."
        }
]}
      faqs={[
        {
                "q": "Does it work with clothing on models?",
                "a": "Yes! Our AI removes the background behind models wearing clothing, though the model will remain in the image."
        },
        {
                "q": "Can I remove the background from flat lay photos?",
                "a": "Absolutely. Flat lay clothing photos on any surface work great with our AI."
        },
        {
                "q": "Will it preserve fabric textures?",
                "a": "Yes, our AI preserves all detail in the clothing including patterns, textures, and fine stitching."
        }
]}
    />
  );
}
