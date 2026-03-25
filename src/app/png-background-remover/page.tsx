import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "PNG Background Remover — Make Transparent PNG Free | AI BG Eraser",
  description: "PNG background remover free online. Create transparent PNG files from any image. Remove background and download transparent PNG instantly.",
  alternates: { canonical: "/png-background-remover" },
};

export default function Page() {
  return (
    <LandingPage
      title="PNG Background Remover"
      subtitle="Create Transparent PNG Files Instantly"
      description="Convert any image to a transparent PNG. Remove backgrounds and download high-quality PNG files with transparent backgrounds."
      features={[
        {
                "title": "Transparent PNG Output",
                "desc": "All processed images are saved as PNG files with full alpha transparency support."
        },
        {
                "title": "High Resolution",
                "desc": "PNG files maintain the original resolution and quality of your uploaded image."
        },
        {
                "title": "Design-Ready",
                "desc": "Transparent PNGs can be layered in Photoshop, Canva, Figma, or any design tool."
        },
        {
                "title": "Web-Optimized",
                "desc": "PNG files are optimized for fast loading on websites while maintaining quality."
        }
]}
      faqs={[
        {
                "q": "Why PNG format?",
                "a": "PNG is the industry standard for images with transparency. Unlike JPG, PNG supports alpha channels for transparent backgrounds."
        },
        {
                "q": "Can I convert JPG to transparent PNG?",
                "a": "Yes! Upload your JPG image, and we'll remove the background and save it as a transparent PNG file."
        },
        {
                "q": "How large are the output PNG files?",
                "a": "File size depends on your original image dimensions. PNGs with transparency are typically larger than JPGs but maintain full quality."
        }
]}
    />
  );
}
