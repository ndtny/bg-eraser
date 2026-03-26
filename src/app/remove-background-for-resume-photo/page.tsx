import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Resume Photo — Professional | AI BG Eraser",
  description: "Remove background from your resume or CV photo. Get a clean, professional headshot with white or transparent background.",
  keywords: ["remove background resume photo","cv photo background remover","professional headshot background","resume photo transparent"],
  alternates: { canonical: "/remove-background-for-resume-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Resume Photo"
      subtitle="Remove background from your resume or CV photo. Get a clean, professional headshot with white or transparent background."
      description="A professional resume photo needs a clean, uncluttered background. Upload your photo to AI BG Eraser and instantly remove the background. Then place it on a white or light gray background for a polished, professional look that makes a great first impression."
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
                "q": "What background color should I use for my resume?",
                "a": "White or light gray works best. Remove the background with our tool, then add a solid color in any image editor."
        },
        {
                "q": "Can I use this for LinkedIn photos too?",
                "a": "Absolutely. The same clean background removal works great for LinkedIn profile photos."
        }
]}
    />
  );
}
