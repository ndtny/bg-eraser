import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Best Free Background Remover 2026 — Top AI Tool | AI BG Eraser",
  description: "Best free background remover 2026. 3 free uses daily, no signup, no watermark. AI-powered professional quality. Compare and try now.",
  alternates: { canonical: "/best-free-background-remover" },
};

export default function Page() {
  return (
    <LandingPage
      title="Best Free Background Remover"
      subtitle="The #1 Free Background Removal Tool in 2026"
      description="Looking for the best free background remover? AI BG Eraser offers 3 free uses daily with no signup, no watermark, and professional AI quality."
      features={[
        {
                "title": "Truly Free",
                "desc": "3 daily uses with zero strings attached. No signup, no watermark, no credit card."
        },
        {
                "title": "Top AI Quality",
                "desc": "Powered by RMBG-2.0, matching or exceeding the quality of paid alternatives."
        },
        {
                "title": "No Signup Required",
                "desc": "Unlike remove.bg, Canva, or Photoroom — we don't require any account creation."
        },
        {
                "title": "Affordable Pro",
                "desc": "Need more? Our Pro plan at $9.90/month is the most affordable option available."
        }
]}
      faqs={[
        {
                "q": "What makes this the best free background remover?",
                "a": "We offer 3 free uses daily (most competitors offer 1 or none), no signup required, no watermarks, and the same AI quality as our paid plan."
        },
        {
                "q": "How does it compare to remove.bg?",
                "a": "remove.bg offers 1 free preview per month and charges $29/month for Pro. We offer 3 free full-quality uses per day and Pro at $9.90/month."
        },
        {
                "q": "Is the free version lower quality?",
                "a": "No! Free and Pro users get identical AI processing quality. The only difference is the daily usage limit."
        }
]}
    />
  );
}
