import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for TikTok Free Online | AI BG Eraser",
  description: "Remove background for TikTok videos and thumbnails free. AI-powered cutouts for creative content. No signup needed.",
  alternates: { canonical: "/remove-background-for-tiktok" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for TikTok"
      subtitle="TikTok Content Creation with AI Background Removal"
      description="Create engaging TikTok content with AI background removal. Make transparent cutouts for green screen effects and creative videos."
      features={[
        {
                "title": "Green Screen Effect",
                "desc": "Create cutout images to use with TikTok's green screen effect for creative videos."
        },
        {
                "title": "Thumbnail Magic",
                "desc": "Make eye-catching video thumbnails with clean, isolated subjects."
        },
        {
                "title": "Meme Creation",
                "desc": "Create transparent cutouts for reaction images, memes, and viral content."
        },
        {
                "title": "Profile Photos",
                "desc": "Stand out with a professional profile photo with a clean background."
        }
]}
      faqs={[
        {
                "q": "How do I use this with TikTok?",
                "a": "Remove the background from an image, save it to your camera roll, then use it with TikTok's green screen effect or photo editing features."
        },
        {
                "q": "Can I make stickers for TikTok?",
                "a": "Yes! Create transparent cutouts that work as custom stickers in your TikTok content."
        },
        {
                "q": "Does this work for TikTok Shop products?",
                "a": "Absolutely. Create clean product photos for your TikTok Shop listings."
        }
]}
    />
  );
}
