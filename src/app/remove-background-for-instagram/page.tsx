import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Instagram Posts Free | AI BG Eraser",
  description: "Remove background for Instagram posts and stories free. Create engaging content with AI. Perfect cutouts for social media.",
  alternates: { canonical: "/remove-background-for-instagram" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Instagram"
      subtitle="Create Stunning Instagram Content with AI"
      description="Remove backgrounds from photos for Instagram posts, stories, and reels. Create eye-catching content that gets more engagement."
      features={[
        {
                "title": "Feed-Worthy",
                "desc": "Create scroll-stopping posts with subjects on custom backgrounds that match your aesthetic."
        },
        {
                "title": "Stories & Reels",
                "desc": "Use transparent cutouts as stickers and overlays in your Instagram Stories and Reels."
        },
        {
                "title": "Brand Aesthetic",
                "desc": "Maintain a consistent feed aesthetic by placing subjects on your brand colors."
        },
        {
                "title": "Engagement Boost",
                "desc": "Posts with clean, professional images get more likes, comments, and shares."
        }
]}
      faqs={[
        {
                "q": "Can I use removed backgrounds for Instagram Stories?",
                "a": "Yes! Download the transparent PNG and use it as a sticker or overlay in Instagram Stories."
        },
        {
                "q": "What size should images be for Instagram?",
                "a": "Instagram feed posts are best at 1080x1080px (square) or 1080x1350px (portrait). Our tool maintains your original resolution."
        },
        {
                "q": "Will this help get more engagement?",
                "a": "Clean, professional images typically get 30-50% more engagement than cluttered photos on Instagram."
        }
]}
    />
  );
}
