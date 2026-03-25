import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Logo Free Online | AI BG Eraser",
  description: "Remove background from logo images online free. Convert logos to transparent PNG files instantly. AI-powered, no signup needed.",
  alternates: { canonical: "/remove-background-from-logo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Logo"
      subtitle="Get Transparent Logo Files in Seconds"
      description="Convert your logo to a transparent PNG. Remove white, colored, or complex backgrounds from logos instantly with AI."
      features={[
        {
                "title": "White Background Removal",
                "desc": "Instantly remove white backgrounds from logos and convert to transparent PNG files."
        },
        {
                "title": "Any Logo Style",
                "desc": "Works with text logos, icon logos, combination marks, emblems, and complex designs."
        },
        {
                "title": "Crisp Edges",
                "desc": "Maintain sharp, clean edges on your logo even with complex shapes and gradients."
        },
        {
                "title": "Print & Web Ready",
                "desc": "Download high-quality transparent PNG files ready for websites, business cards, merchandise, and more."
        }
]}
      faqs={[
        {
                "q": "Will my logo quality be preserved?",
                "a": "Yes. We maintain the original resolution and quality of your logo. Upload the highest quality version for best results."
        },
        {
                "q": "Can I remove colored backgrounds from logos?",
                "a": "Absolutely. Our AI removes any background color — white, black, blue, gradient, or even complex patterns."
        },
        {
                "q": "What format should I upload my logo in?",
                "a": "We accept JPG, PNG, and WebP. For best results, upload the highest resolution version available."
        }
]}
    />
  );
}
