import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "remove.bg Alternative — Free AI Background Remover | AI BG Eraser",
  description: "Best remove.bg alternative 2026. 3 free uses/day vs 1/month. Same quality, lower price ($9.90 vs $29/month). Try now.",
  alternates: { canonical: "/remove-background-remove-bg-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Best remove.bg Alternative"
      subtitle="Like remove.bg, But Free & More Affordable"
      description="Looking for a remove.bg alternative? AI BG Eraser offers 3 free uses daily (vs 1/month), same AI quality, and Pro at $9.90/mo (vs $29/mo)."
      features={[
        {
                "title": "3x More Free Uses",
                "desc": "3 free uses per day vs remove.bg's 1 free preview per month."
        },
        {
                "title": "67% Cheaper Pro",
                "desc": "Our Pro plan is $9.90/month vs remove.bg's $29/month — same AI quality."
        },
        {
                "title": "No Signup for Free",
                "desc": "Use our free tier without creating an account. remove.bg requires signup."
        },
        {
                "title": "No Watermark",
                "desc": "Full quality downloads for free. No watermarks, no low-resolution previews."
        }
]}
      faqs={[
        {
                "q": "How does this compare to remove.bg?",
                "a": "We offer 3 free uses/day (vs 1/month), no signup required (vs required), and Pro at $9.90/month (vs $29/month). AI quality is comparable."
        },
        {
                "q": "Is the quality as good as remove.bg?",
                "a": "Yes! We use RMBG-2.0, a top-tier AI model. Results are comparable to remove.bg for the vast majority of images."
        },
        {
                "q": "Why should I switch from remove.bg?",
                "a": "More free uses, lower Pro price, no signup required, and no watermarks on free downloads. Same quality, better value."
        }
]}
    />
  );
}
