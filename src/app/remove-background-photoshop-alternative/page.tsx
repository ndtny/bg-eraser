import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Free Photoshop Background Remover Alternative | AI BG Eraser",
  description: "Remove backgrounds like Photoshop — without Photoshop. Free AI alternative that works in your browser. No skills needed.",
  keywords: ["photoshop background remover alternative","free photoshop alternative","remove background without photoshop","ai background removal vs photoshop"],
  alternates: { canonical: "/remove-background-photoshop-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Free Photoshop Background Remover Alternative"
      subtitle="Remove backgrounds like Photoshop — without Photoshop. Free AI alternative that works in your browser. No skills needed."
      description="Adobe Photoshop costs $22.99/mo and requires design skills to remove backgrounds properly. AI BG Eraser does it automatically with AI — one click, perfect edges, transparent background. No learning curve, no subscription."
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
                "q": "Is AI as good as manual Photoshop editing?",
                "a": "For most images, yes. AI handles hair, fur, and complex edges automatically — tasks that take even skilled Photoshop users minutes to perfect."
        },
        {
                "q": "Can I use this for professional work?",
                "a": "Absolutely. The output quality is production-ready for e-commerce, social media, and marketing materials."
        }
]}
    />
  );
}
