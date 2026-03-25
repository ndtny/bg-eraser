import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from PNG Image Free | AI BG Eraser",
  description: "Remove background from PNG images free online. Preserve transparency, clean edges. AI-powered instant removal. No signup needed.",
  alternates: { canonical: "/remove-background-from-png" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from PNG"
      subtitle="Clean Up PNG Images with AI Background Removal"
      description="Remove backgrounds from PNG images while preserving transparency. Perfect for cleaning up logos, graphics, and design assets."
      features={[
        {
                "title": "PNG-Optimized",
                "desc": "Handles PNG files with existing transparency, alpha channels, and complex layering."
        },
        {
                "title": "Preserve Transparency",
                "desc": "Existing transparent areas in your PNG are respected and maintained."
        },
        {
                "title": "Design Asset Ready",
                "desc": "Clean up PNG assets for use in web design, app interfaces, and marketing materials."
        },
        {
                "title": "Lossless Output",
                "desc": "Output PNG maintains full quality with no compression artifacts."
        }
]}
      faqs={[
        {
                "q": "My PNG already has some transparency. Will that be preserved?",
                "a": "Yes! Our AI intelligently handles existing transparency while removing the unwanted background areas."
        },
        {
                "q": "Can I remove a colored background from a PNG logo?",
                "a": "Absolutely. Upload your PNG logo with any colored background and our AI will make it transparent."
        },
        {
                "q": "What's the maximum PNG file size?",
                "a": "You can upload PNG files up to 20MB in size."
        }
]}
    />
  );
}
