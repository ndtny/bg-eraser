import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background Free — No Watermark | AI BG Eraser",
  description: "Remove image backgrounds for free with no watermark on output. Full quality PNG download, no hidden catches.",
  keywords: ["remove background free no watermark","background remover no watermark","free bg remover without watermark","transparent background no watermark"],
  alternates: { canonical: "/remove-background-from-image-for-free-no-watermark" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background Free — No Watermark"
      subtitle="Remove image backgrounds for free with no watermark on output. Full quality PNG download, no hidden catches."
      description="Many free background removers add watermarks to your images, forcing you to pay for clean output. AI BG Eraser never adds watermarks — your 3 free daily removals produce full-quality, clean PNG files ready for immediate use."
      features={[
        {
                "title": "AI-Powered",
                "desc": "Uses BRIA RMBG-2.0 AI model for precise background detection and removal."
        },
        {
                "title": "Instant Results",
                "desc": "Get your transparent PNG in seconds, not minutes."
        },
        {
                "title": "Free to Use",
                "desc": "3 free removals per day. No signup required."
        },
        {
                "title": "High Quality",
                "desc": "Clean edges, no artifacts. Production-ready output."
        }
]}
      faqs={[
        {
                "q": "Will there be a watermark on my image?",
                "a": "Never. AI BG Eraser does not add watermarks to any output, free or Pro."
        },
        {
                "q": "Is the free version lower quality?",
                "a": "No. Free and Pro users get the exact same image quality. Pro just removes the daily limit."
        }
]}
    />
  );
}
