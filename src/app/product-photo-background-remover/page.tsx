import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Product Photo Background Remover | Free E-Commerce Tool",
  description:
    "Remove backgrounds from product photos for e-commerce. Get clean, white, or transparent backgrounds for Amazon, Shopify, Etsy, and more. Free AI tool.",
  alternates: { canonical: "/product-photo-background-remover" },
};

export default function ProductPhotoBackgroundRemover() {
  return (
    <LandingPage
      title="Product Photo Background Remover"
      subtitle="Clean Product Photos for E-Commerce"
      description="Make your product photos stand out with clean, professional backgrounds. Remove messy backgrounds and replace them with white or transparent backgrounds — perfect for Amazon, Shopify, Etsy, and eBay listings."
      features={[
        {
          title: "E-Commerce Ready",
          desc: "Get product photos that meet marketplace requirements for Amazon, Shopify, Etsy, eBay, and WooCommerce.",
        },
        {
          title: "Clean White Backgrounds",
          desc: "Remove cluttered backgrounds and get clean product shots on transparent backgrounds — add white in any editor.",
        },
        {
          title: "Boost Sales",
          desc: "Professional product photos increase conversion rates by up to 30%. Clean backgrounds let your product shine.",
        },
        {
          title: "Save Time & Money",
          desc: "Skip expensive photo studios and manual editing. Process product images in seconds, not hours.",
        },
      ]}
      faqs={[
        {
          q: "Does it work for all types of products?",
          a: "Yes! Our AI works great with clothing, electronics, jewelry, food items, furniture, and virtually any product type. It handles reflections, shadows, and complex shapes.",
        },
        {
          q: "Is the quality good enough for Amazon listings?",
          a: "Absolutely. Amazon requires a clean white background for main product images. Our tool removes the background cleanly, and you can add a white background in any image editor.",
        },
        {
          q: "Can I process multiple product photos?",
          a: "Currently you can process one image at a time. Upload, download, and repeat. Batch processing for bulk product catalogs is coming soon.",
        },
        {
          q: "Do I need to photograph products on a specific background?",
          a: "No! Our AI can remove any background — plain white, colored, textured, or even cluttered environments. However, good lighting and contrast will give the best results.",
        },
      ]}
    />
  );
}
