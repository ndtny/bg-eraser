import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Product Photo Free | AI BG Eraser",
  description: "Remove background from product photo free. Professional white backgrounds for e-commerce. AI-powered, no signup, instant results.",
  alternates: { canonical: "/remove-background-from-product-photo-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Product Photo"
      subtitle="Free Product Photo Background Removal"
      description="Create professional product photos with clean backgrounds. Free AI tool for e-commerce sellers, small businesses, and entrepreneurs."
      features={[
        {
                "title": "Small Business Friendly",
                "desc": "Professional product photos without hiring a photographer or paying for editing."
        },
        {
                "title": "Any Product",
                "desc": "Electronics, jewelry, clothing, toys, food, cosmetics — works with any product."
        },
        {
                "title": "White Background",
                "desc": "Get the clean white background look that builds customer trust and increases sales."
        },
        {
                "title": "Save Thousands",
                "desc": "Professional product photography costs $10-50 per image. Our tool is free."
        }
]}
      faqs={[
        {
                "q": "How should I photograph my products?",
                "a": "Use good lighting, a steady surface, and shoot from multiple angles. Our AI handles the background — you focus on the product."
        },
        {
                "q": "Can I use phone photos?",
                "a": "Absolutely. Smartphone photos work great. Just ensure good lighting and focus."
        },
        {
                "q": "Is this professional enough for my online store?",
                "a": "Yes! Many successful e-commerce stores use AI background removal for their product images."
        }
]}
    />
  );
}
