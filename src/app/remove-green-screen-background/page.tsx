import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Green Screen Background from Image Free | AI BG Eraser",
  description: "Remove green screen background from image free. AI chroma key background removal. Clean results, instant processing.",
  alternates: { canonical: "/remove-green-screen-background" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Green Screen Background"
      subtitle="Green Screen Photo Background Removal"
      description="Remove green screen backgrounds from photos instantly. Our AI handles green screen images with precision for clean chroma key results."
      features={[
        {
                "title": "Chroma Key",
                "desc": "Process green screen photos with AI for clean, professional chroma key results."
        },
        {
                "title": "Uneven Lighting",
                "desc": "Handles green screens with uneven lighting, shadows, and wrinkles."
        },
        {
                "title": "Spill Removal",
                "desc": "AI reduces green color spill on subjects for more natural-looking results."
        },
        {
                "title": "Any Green Shade",
                "desc": "Works with all shades of green screen, from lime to dark green."
        }
]}
      faqs={[
        {
                "q": "Does it work with blue screens too?",
                "a": "Yes! Our AI removes any background regardless of color — green screens, blue screens, or any other color."
        },
        {
                "q": "What about green screen with shadows?",
                "a": "Our AI handles imperfect green screens with wrinkles, shadows, and uneven lighting."
        },
        {
                "q": "Is this better than Photoshop's chroma key?",
                "a": "For most green screen photos, our AI produces results comparable to Photoshop's tools in a fraction of the time."
        }
]}
    />
  );
}
