import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Canva Background Remover Alternative — Free | AI BG Eraser",
  description: "Free Canva background remover alternative. No Canva Pro needed. Better AI quality, 3 free uses daily. Try now.",
  alternates: { canonical: "/remove-background-canva-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Free Canva Background Remover Alternative"
      subtitle="Skip Canva Pro — Remove Backgrounds for Free"
      description="Canva charges for background removal in their Pro plan. We offer the same feature for free, with better AI quality."
      features={[
        {
                "title": "No Canva Pro Needed",
                "desc": "Canva locks background removal behind their $12.99/month Pro plan. We offer it for free."
        },
        {
                "title": "Better AI",
                "desc": "Our dedicated RMBG-2.0 model often produces cleaner results than Canva's built-in tool."
        },
        {
                "title": "Use in Canva",
                "desc": "Download transparent PNGs and import them into free Canva for your designs."
        },
        {
                "title": "3 Free Daily",
                "desc": "3 background removals per day, no Canva subscription required."
        }
]}
      faqs={[
        {
                "q": "Is this better than Canva's background remover?",
                "a": "For background removal quality, yes. Our dedicated AI model produces cleaner edges, especially with hair and fur. Use our tool for removal, then Canva for design."
        },
        {
                "q": "Can I still use Canva for design?",
                "a": "Absolutely! Remove backgrounds here for free, download the PNG, then upload to free Canva for your design work."
        },
        {
                "q": "How much does Canva Pro cost?",
                "a": "Canva Pro is $12.99/month. With our free tool, you can skip that cost if you mainly need background removal."
        }
]}
    />
  );
}
