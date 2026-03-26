import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Canva Background Remover Alternative — Free | AI BG Eraser",
  description: "Free alternative to Canva's background remover. Remove backgrounds without a Canva Pro subscription. AI-powered, instant results.",
  keywords: ["canva background remover alternative","free canva alternative","remove background without canva pro","canva bg remover free"],
  alternates: { canonical: "/remove-background-from-image-canva-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Free Canva Background Remover Alternative"
      subtitle="Free alternative to Canva's background remover. Remove backgrounds without a Canva Pro subscription. AI-powered, instant results."
      description="Canva's background remover requires a Pro subscription ($12.99/mo). AI BG Eraser gives you the same AI-powered background removal for free — 3 times per day, no subscription needed. Same quality, zero cost."
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
                "q": "How does this compare to Canva's background remover?",
                "a": "Both use AI for background removal. The key difference: Canva requires a $12.99/mo Pro plan, while AI BG Eraser gives you 3 free uses daily."
        },
        {
                "q": "Is the quality as good as Canva?",
                "a": "Yes. AI BG Eraser uses BRIA RMBG-2.0, a state-of-the-art AI model that produces professional results comparable to any paid tool."
        }
]}
    />
  );
}
