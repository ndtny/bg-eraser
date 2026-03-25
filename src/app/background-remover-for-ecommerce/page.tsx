import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Background Remover for E-Commerce Product Photos | AI BG Eraser",
  description: "Remove backgrounds from product photos for e-commerce. Clean white background images for Amazon, Shopify, Etsy. Free AI tool.",
  alternates: { canonical: "/background-remover-for-ecommerce" },
};

export default function Page() {
  return (
    <LandingPage
      title="Background Remover for E-Commerce"
      subtitle="Professional Product Photos for Your Online Store"
      description="Create clean, professional product photos with white or transparent backgrounds. Perfect for Amazon, Shopify, Etsy, eBay, and more."
      features={[
        {
                "title": "Amazon-Ready Photos",
                "desc": "Create product images that meet Amazon's pure white background requirement (RGB 255,255,255)."
        },
        {
                "title": "Shopify & Etsy Compatible",
                "desc": "Professional product photos that look great on any e-commerce platform."
        },
        {
                "title": "Consistent Look",
                "desc": "Give all your product photos a uniform, professional appearance that builds customer trust."
        },
        {
                "title": "Increase Conversions",
                "desc": "Clean product photos on white backgrounds are proven to increase click-through rates and conversions."
        }
]}
      faqs={[
        {
                "q": "Does this meet Amazon's image requirements?",
                "a": "Yes. Our tool creates images with clean, transparent backgrounds that you can place on pure white (#FFFFFF) backgrounds, meeting Amazon's main image requirements."
        },
        {
                "q": "Can I batch process product photos?",
                "a": "Currently we process one image at a time. Upload, download, repeat. Batch processing is coming soon with our Pro plan."
        },
        {
                "q": "What about product shadows?",
                "a": "Our AI removes the background while preserving the product. You can add professional shadows later using any photo editor if needed."
        }
]}
    />
  );
}
