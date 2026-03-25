import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for YouTube Thumbnails Free | AI BG Eraser",
  description: "Remove background for YouTube thumbnails free. Create click-worthy thumbnails with AI. Boost your CTR instantly.",
  alternates: { canonical: "/remove-background-for-youtube-thumbnail" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for YouTube Thumbnails"
      subtitle="Click-Worthy YouTube Thumbnails with AI"
      description="Create attention-grabbing YouTube thumbnails by removing backgrounds. Place yourself on custom backgrounds that drive clicks."
      features={[
        {
                "title": "Higher CTR",
                "desc": "Thumbnails with clean subject cutouts on bold backgrounds get significantly more clicks."
        },
        {
                "title": "Creator Standard",
                "desc": "Used by top YouTubers to create their signature thumbnail style."
        },
        {
                "title": "Any Background",
                "desc": "Place yourself on any background — gradients, scenes, or solid colors."
        },
        {
                "title": "Fast Workflow",
                "desc": "Process your thumbnail photo in seconds, not minutes."
        }
]}
      faqs={[
        {
                "q": "Do better thumbnails really get more views?",
                "a": "Yes! YouTube data shows that custom thumbnails can increase click-through rates by up to 154% compared to auto-generated ones."
        },
        {
                "q": "What's the best thumbnail size?",
                "a": "YouTube recommends 1280x720px. Upload a high-quality photo and create your thumbnail at this resolution."
        },
        {
                "q": "What background works best for thumbnails?",
                "a": "Bold, contrasting colors work best. Many top creators use bright gradients or dramatic scenes behind their cutout."
        }
]}
    />
  );
}
