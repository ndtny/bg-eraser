import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Photo Background Online — AI Powered | AI BG Eraser",
  description: "Remove photo background online instantly with AI. Works with all photo types. Free, fast, no signup needed. Download transparent PNG.",
  alternates: { canonical: "/remove-photo-background" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Photo Background"
      subtitle="Instant Photo Background Removal with AI"
      description="Upload any photo and remove its background in seconds. Works with portraits, products, pets, food, and more."
      features={[
        {
                "title": "All Photo Types",
                "desc": "Works with portraits, products, pets, food, landscapes with subjects, and more."
        },
        {
                "title": "Color-Blind AI",
                "desc": "Removes backgrounds regardless of color similarity between subject and background."
        },
        {
                "title": "Preserve Details",
                "desc": "Keeps fine details, textures, and edges intact while removing the background."
        },
        {
                "title": "Any Background",
                "desc": "Handles plain, complex, busy, or gradient backgrounds with equal precision."
        }
]}
      faqs={[
        {
                "q": "What photo types work best?",
                "a": "Photos with a clear main subject work best — people, products, animals, food items. The AI handles most scenarios well."
        },
        {
                "q": "Can I remove a background that's similar to the subject?",
                "a": "Yes, our AI uses advanced segmentation that goes beyond simple color detection. It understands the shape and context of objects."
        },
        {
                "q": "Does it work with photos taken on my phone?",
                "a": "Absolutely. Our tool handles photos from any camera — smartphones, DSLRs, webcams, and screenshots."
        }
]}
    />
  );
}
