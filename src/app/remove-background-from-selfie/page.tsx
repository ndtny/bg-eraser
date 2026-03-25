import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Selfie Free Online | AI BG Eraser",
  description: "Remove background from selfie photos online free. Clean up selfie backgrounds instantly with AI. Perfect for social media profiles.",
  alternates: { canonical: "/remove-background-from-selfie" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Selfie"
      subtitle="Clean Up Your Selfies with AI"
      description="Remove messy backgrounds from selfies instantly. Create professional-looking selfies with transparent or custom backgrounds."
      features={[
        {
                "title": "Selfie-Optimized",
                "desc": "Works perfectly with front-facing camera photos, including close-ups and wide-angle selfies."
        },
        {
                "title": "Hair Detection",
                "desc": "Advanced AI handles all hair types — straight, curly, braids, and complex hairstyles."
        },
        {
                "title": "Social Media Ready",
                "desc": "Create perfect profile pictures for Instagram, TikTok, WhatsApp, and more."
        },
        {
                "title": "Quick & Easy",
                "desc": "Take a selfie, upload it, and download with a clean background in under 10 seconds."
        }
]}
      faqs={[
        {
                "q": "Does it work with front camera photos?",
                "a": "Yes! Our AI works great with selfies taken from front-facing cameras, including those with portrait mode or beauty filters applied."
        },
        {
                "q": "Can I add a new background after removal?",
                "a": "Yes, download the transparent PNG and add any background you want using photo editors like Canva, PicsArt, or Photoshop."
        },
        {
                "q": "Will it remove other people in the background?",
                "a": "Our AI removes the entire background. If there are other people behind you, they will be removed along with the background."
        }
]}
    />
  );
}
