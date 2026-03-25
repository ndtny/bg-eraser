import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Photo Background Eraser — Free Online AI Tool | AI BG Eraser",
  description: "Photo background eraser online free. Erase backgrounds from photos instantly with AI. No watermark, no signup. Download transparent PNG.",
  alternates: { canonical: "/photo-background-eraser" },
};

export default function Page() {
  return (
    <LandingPage
      title="Photo Background Eraser"
      subtitle="Erase Any Photo Background Instantly"
      description="Erase backgrounds from photos with AI precision. Perfect for social media, e-commerce, design projects, and personal use."
      features={[
        {
                "title": "Photo-Optimized AI",
                "desc": "Our AI is specifically optimized for photographs, delivering the best results for real-world photos."
        },
        {
                "title": "Social Media Ready",
                "desc": "Create profile pictures, story backgrounds, and post images with transparent or custom backgrounds."
        },
        {
                "title": "Batch-Friendly",
                "desc": "Process photos one by one quickly. Each photo takes under 10 seconds."
        },
        {
                "title": "No Quality Loss",
                "desc": "Your photos are processed at their original resolution with no quality degradation."
        }
]}
      faqs={[
        {
                "q": "What's the maximum photo size?",
                "a": "You can upload photos up to 20MB in size. We support JPG, PNG, and WebP formats."
        },
        {
                "q": "Will erasing the background reduce photo quality?",
                "a": "No. The subject of your photo maintains its original quality. Only the background is removed and replaced with transparency."
        },
        {
                "q": "Can I use this for passport photos?",
                "a": "Yes! Remove the background from your portrait photo and place it on a white background to create passport-ready images."
        }
]}
    />
  );
}
