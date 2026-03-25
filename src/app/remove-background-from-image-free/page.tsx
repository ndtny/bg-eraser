import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image Free — No Signup | AI BG Eraser",
  description: "Remove background from image completely free online. No signup, no watermark, no limits. AI-powered instant background removal tool.",
  alternates: { canonical: "/remove-background-from-image-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Image Free"
      subtitle="100% Free AI Background Removal — No Account Needed"
      description="Remove backgrounds from images completely free. No signup, no email, no credit card. Just upload and download. 3 free uses every day."
      features={[
        {
                "title": "Truly Free",
                "desc": "3 free background removals every day. No hidden fees, no signup, no credit card required."
        },
        {
                "title": "No Watermark",
                "desc": "Unlike other tools, your downloaded image has zero watermarks. Full quality, completely free."
        },
        {
                "title": "No Account Required",
                "desc": "Just upload your image and download the result. No email, no password, no account needed."
        },
        {
                "title": "Resets Daily",
                "desc": "Your 3 free uses reset every day at midnight UTC. Come back tomorrow for more free removals."
        }
]}
      faqs={[
        {
                "q": "Is it really 100% free?",
                "a": "Yes! You get 3 free background removals every day with no strings attached. No signup, no watermark, no credit card."
        },
        {
                "q": "Why is it free?",
                "a": "We offer a generous free tier to let everyone try our AI. For unlimited use, we have an affordable Pro plan at $9.90/month."
        },
        {
                "q": "Are there any limitations on the free plan?",
                "a": "The only limitation is 3 uses per day. You get the same AI quality, same resolution, same features as Pro users."
        }
]}
    />
  );
}
