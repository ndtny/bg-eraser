import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Make Image Transparent — Free Online Tool | AI BG Eraser",
  description: "Make image transparent online free. Remove background to create transparent images. AI-powered, instant results. Download transparent PNG.",
  alternates: { canonical: "/make-image-transparent" },
};

export default function Page() {
  return (
    <LandingPage
      title="Make Image Transparent"
      subtitle="Convert Any Image to Transparent Background"
      description="Make any image transparent by removing its background. Perfect for overlays, logos, watermarks, and design compositions."
      features={[
        {
                "title": "Full Transparency",
                "desc": "Create images with fully transparent backgrounds using alpha channel support."
        },
        {
                "title": "Overlay Ready",
                "desc": "Transparent images are perfect for overlaying on videos, presentations, and other images."
        },
        {
                "title": "Watermark Creation",
                "desc": "Make logos transparent for use as watermarks on your photos and videos."
        },
        {
                "title": "Design Compositions",
                "desc": "Layer transparent images in your designs for professional-looking compositions."
        }
]}
      faqs={[
        {
                "q": "What does 'transparent' mean for an image?",
                "a": "A transparent image has no background. The areas where the background was are see-through, allowing whatever is behind the image to show through."
        },
        {
                "q": "Which file format supports transparency?",
                "a": "PNG is the standard format for transparent images. Our tool always outputs PNG files with full alpha transparency."
        },
        {
                "q": "Can I make only part of an image transparent?",
                "a": "Our AI automatically makes the background transparent while keeping the subject opaque. For partial transparency, use a photo editor after download."
        }
]}
    />
  );
}
