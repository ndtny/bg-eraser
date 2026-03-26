import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Website Images | AI BG Eraser",
  description: "Remove backgrounds from images for your website. Get transparent PNGs that look professional on any page design.",
  keywords: ["remove background for website","website image background remover","transparent image for web","clean product images website"],
  alternates: { canonical: "/remove-background-for-website" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Website Images"
      subtitle="Remove backgrounds from images for your website. Get transparent PNGs that look professional on any page design."
      description="Professional websites need clean product images, team photos, and graphics on transparent backgrounds. AI BG Eraser helps you prepare all your website images — remove cluttered backgrounds and get clean, professional transparent PNGs that blend seamlessly with any page design."
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
                "q": "What format works best for websites?",
                "a": "PNG with transparent background. AI BG Eraser outputs this format by default."
        },
        {
                "q": "Will the images slow down my website?",
                "a": "The output PNGs are optimized. For further optimization, use tools like TinyPNG before uploading to your site."
        }
]}
    />
  );
}
