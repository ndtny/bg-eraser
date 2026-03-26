import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Pet Photos — Dogs, Cats & More | AI BG Eraser",
  description: "Remove backgrounds from pet photos with AI. Handles fur edges perfectly. Great for pet portraits, pet products, and social media.",
  keywords: ["remove background pet photo","dog photo background remover","cat photo transparent background","pet portrait background removal"],
  alternates: { canonical: "/remove-background-from-pet-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Pet Photos"
      subtitle="Remove backgrounds from pet photos with AI. Handles fur edges perfectly. Great for pet portraits, pet products, and social media."
      description="Pet photos have the most challenging edges — fur, whiskers, fluffy tails. AI BG Eraser's AI model handles these complex edges beautifully, preserving every strand of fur while cleanly removing the background. Perfect for pet portraits, product listings, and social media posts."
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
                "q": "Can it handle fluffy fur?",
                "a": "Yes! The BRIA RMBG-2.0 AI model excels at complex edges like fur, hair, and feathers."
        },
        {
                "q": "Does it work with multiple pets in one photo?",
                "a": "Yes. The AI detects all foreground subjects and removes only the background."
        }
]}
    />
  );
}
