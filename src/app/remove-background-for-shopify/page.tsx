import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Shopify Product Photos | AI BG Eraser",
  description: "Remove background for Shopify product photos free. Create professional store images with AI. Boost conversions instantly.",
  alternates: { canonical: "/remove-background-for-shopify" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Shopify"
      subtitle="Shopify-Ready Product Photos with AI"
      description="Create stunning product photos for your Shopify store. Remove backgrounds and give your products a professional, consistent look."
      features={[
        {
                "title": "Shopify Store Ready",
                "desc": "Create consistent, professional product photos that elevate your entire Shopify store."
        },
        {
                "title": "Theme Compatible",
                "desc": "Transparent PNG backgrounds work with any Shopify theme, light or dark."
        },
        {
                "title": "Conversion Boost",
                "desc": "Clean product photos increase add-to-cart rates and reduce bounce rates."
        },
        {
                "title": "Brand Consistency",
                "desc": "Give all your products the same clean, professional look across your store."
        }
]}
      faqs={[
        {
                "q": "What image format works best for Shopify?",
                "a": "Transparent PNG files work great with Shopify. They adapt to any theme background color automatically."
        },
        {
                "q": "Should I use white or transparent backgrounds?",
                "a": "Transparent backgrounds are more versatile — they work on any theme. You can always add white backgrounds later if needed."
        },
        {
                "q": "Can I process all my store products?",
                "a": "Yes! Process them one by one. For large catalogs, our Pro plan offers unlimited processing."
        }
]}
    />
  );
}
