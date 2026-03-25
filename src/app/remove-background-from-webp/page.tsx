import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from WebP Image Free | AI BG Eraser",
  description: "Remove background from WebP images online free. AI-powered instant background removal. Upload WebP, download transparent PNG.",
  alternates: { canonical: "/remove-background-from-webp" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from WebP"
      subtitle="Process WebP Images with AI Background Removal"
      description="Remove backgrounds from WebP images instantly. Upload WebP, download transparent PNG. Fast, free, and AI-powered."
      features={[
        {
                "title": "WebP Support",
                "desc": "Full support for WebP images, including those from Chrome screenshots and modern web downloads."
        },
        {
                "title": "WebP to PNG",
                "desc": "Convert WebP images to transparent PNGs with the background cleanly removed."
        },
        {
                "title": "Modern Format",
                "desc": "WebP is becoming the standard web format. We fully support it alongside JPG and PNG."
        },
        {
                "title": "No Conversion Needed",
                "desc": "Upload WebP directly — no need to convert to JPG or PNG first."
        }
]}
      faqs={[
        {
                "q": "What is WebP format?",
                "a": "WebP is a modern image format developed by Google. It offers better compression than JPG and PNG while maintaining quality."
        },
        {
                "q": "Can I upload WebP and get PNG output?",
                "a": "Yes! Upload your WebP image and download the result as a transparent PNG file."
        },
        {
                "q": "Where do WebP images come from?",
                "a": "Many websites serve images in WebP format. Screenshots from Chrome and downloads from modern websites are often in WebP."
        }
]}
    />
  );
}
