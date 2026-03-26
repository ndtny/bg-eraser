import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image Online Free — AI BG Eraser",
  description: "Remove background from any image online for free. No download needed. AI-powered instant background removal in your browser.",
  keywords: ["remove background from image online","online background remover","remove bg online free","browser background remover"],
  alternates: { canonical: "/remove-background-from-image-online" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Image Online"
      subtitle="Remove background from any image online for free. No download needed. AI-powered instant background removal in your browser."
      description="Remove backgrounds from images directly in your browser — no software downloads, no plugins, no hassle. AI BG Eraser uses advanced AI to detect subjects and remove backgrounds in seconds. Works on any device with a web browser."
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
                "q": "Do I need to download any software?",
                "a": "No. AI BG Eraser works entirely in your browser. Just upload an image and get results instantly."
        },
        {
                "q": "Does it work on mobile phones?",
                "a": "Yes! AI BG Eraser is fully responsive and works on iPhone, Android, iPad, and any device with a browser."
        },
        {
                "q": "What image formats are supported?",
                "a": "JPG, PNG, and WebP. Output is always high-quality PNG with transparent background."
        }
]}
    />
  );
}
