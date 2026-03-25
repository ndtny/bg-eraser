import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Bulk Background Remover — Process Multiple Images | AI BG Eraser",
  description: "Bulk background remover for multiple images. Process product photos in batch. Free AI tool for e-commerce and designers.",
  alternates: { canonical: "/bulk-background-remover" },
};

export default function Page() {
  return (
    <LandingPage
      title="Bulk Background Remover"
      subtitle="Remove Backgrounds from Multiple Images"
      description="Process multiple images for background removal. Perfect for e-commerce catalogs, photo studios, and marketing teams."
      features={[
        {
                "title": "Multiple Images",
                "desc": "Process images one after another quickly. Each image takes under 10 seconds."
        },
        {
                "title": "E-Commerce Catalogs",
                "desc": "Ideal for processing entire product catalogs with consistent results."
        },
        {
                "title": "Consistent Quality",
                "desc": "Every image gets the same high-quality AI processing for uniform results."
        },
        {
                "title": "Coming: True Batch",
                "desc": "True batch upload (select multiple files at once) is coming soon with our Pro plan."
        }
]}
      faqs={[
        {
                "q": "Can I upload multiple images at once?",
                "a": "Currently, you process one image at a time. True batch upload is coming soon with our Pro plan. Each image takes under 10 seconds."
        },
        {
                "q": "How many images can I process per day?",
                "a": "Free users get 3 per day. For larger volumes, our Pro plan will offer unlimited processing."
        },
        {
                "q": "Will all images have consistent quality?",
                "a": "Yes! Every image is processed by the same AI model, ensuring consistent quality across your entire catalog."
        }
]}
    />
  );
}
