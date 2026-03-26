import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Logo — Get Transparent PNG | AI BG Eraser",
  description: "Remove background from logos and get transparent PNG. Perfect for placing logos on any background color or design.",
  keywords: ["remove background from logo","logo transparent background","logo png transparent","remove white background from logo"],
  alternates: { canonical: "/remove-background-from-logo-png" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Logo — Transparent PNG"
      subtitle="Remove background from logos and get transparent PNG. Perfect for placing logos on any background color or design."
      description="Need your logo on a transparent background? Upload your logo to AI BG Eraser and instantly get a clean PNG with transparent background. Works with text logos, icon logos, and complex designs. Perfect for overlaying on websites, presentations, and marketing materials."
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
                "q": "Can it handle text-based logos?",
                "a": "Yes. The AI accurately detects logo elements including text, icons, and graphics, preserving sharp edges."
        },
        {
                "q": "What if my logo has a white background?",
                "a": "AI BG Eraser removes any background color — white, colored, or complex patterns — leaving only your logo."
        }
]}
    />
  );
}
