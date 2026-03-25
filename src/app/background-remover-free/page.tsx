import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Background Remover Free — No Signup, No Watermark | AI BG Eraser",
  description: "Best free background remover online 2026. No signup, no watermark, no hidden fees. Remove backgrounds from images instantly with AI.",
  alternates: { canonical: "/background-remover-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Background Remover Free"
      subtitle="100% Free Background Removal — No Catch"
      description="The best free background remover online. No signup, no watermark, no hidden fees. Just upload your image and get a transparent background."
      features={[
        {
                "title": "Zero Cost",
                "desc": "3 free removals per day. No credit card, no trial period, no surprise charges."
        },
        {
                "title": "Zero Watermarks",
                "desc": "Unlike competitors, we never add watermarks to your images. Full quality, always."
        },
        {
                "title": "Zero Signup",
                "desc": "No account needed. No email required. Just upload and download."
        },
        {
                "title": "Zero Compromise",
                "desc": "Same AI quality as paid tools. We don't reduce quality for free users."
        }
]}
      faqs={[
        {
                "q": "How is this free?",
                "a": "We offer a free tier with 3 daily uses to let everyone experience our AI. We sustain the service through our optional Pro plan."
        },
        {
                "q": "Is there a watermark on free images?",
                "a": "No. We never add watermarks to any images, free or paid. You get the full quality result every time."
        },
        {
                "q": "What's the catch?",
                "a": "There is no catch. You get 3 free background removals per day. The only limitation is the daily count, which resets at midnight UTC."
        }
]}
    />
  );
}
