import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Logo Free — Make Logo Transparent | AI BG Eraser",
  description: "Make logo transparent free online. Remove white or colored backgrounds from logos. Download transparent PNG. AI-powered tool.",
  alternates: { canonical: "/remove-background-from-logo-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Make Logo Transparent"
      subtitle="Convert Logo to Transparent PNG for Free"
      description="Remove white or colored backgrounds from logos. Get a transparent PNG logo file for use on websites, business cards, and merchandise."
      features={[
        {
                "title": "Any Logo Format",
                "desc": "Upload JPG, PNG, or WebP logos and get a clean transparent PNG output."
        },
        {
                "title": "White BG Removal",
                "desc": "The most common task — removing white backgrounds from logos. Done in seconds."
        },
        {
                "title": "Multi-Use Output",
                "desc": "Transparent logos work on any background — websites, print, merchandise, presentations."
        },
        {
                "title": "Sharp Edges",
                "desc": "AI preserves crisp text and sharp logo edges for professional results."
        }
]}
      faqs={[
        {
                "q": "Can I remove a white background from my logo?",
                "a": "Yes! This is our most common use case. Upload your logo on white and download it with a transparent background."
        },
        {
                "q": "Will small text in my logo be preserved?",
                "a": "Yes, our AI preserves all details including small text, thin lines, and intricate logo elements."
        },
        {
                "q": "Can I use this for a logo on dark backgrounds?",
                "a": "Yes! Download the transparent PNG and it will work perfectly on dark, light, or any colored backgrounds."
        }
]}
    />
  );
}
