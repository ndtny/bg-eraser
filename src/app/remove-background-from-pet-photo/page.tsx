import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Pet Photo Free Online | AI BG Eraser",
  description: "Remove background from pet photos free. AI handles fur, whiskers, complex edges. Perfect for pet portraits. No signup needed.",
  alternates: { canonical: "/remove-background-from-pet-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Pet Photo"
      subtitle="AI Background Removal for Pet & Animal Photos"
      description="Remove backgrounds from pet photos with AI that handles fur, whiskers, and complex animal features. Perfect for pet portraits and merchandise."
      features={[
        {
                "title": "Fur Detection",
                "desc": "Advanced AI handles fluffy fur, whiskers, and complex animal textures with precision."
        },
        {
                "title": "All Animals",
                "desc": "Works with dogs, cats, birds, rabbits, horses, and virtually any animal."
        },
        {
                "title": "Pet Merchandise",
                "desc": "Create pet portraits for custom mugs, t-shirts, phone cases, and other merchandise."
        },
        {
                "title": "Social Sharing",
                "desc": "Make fun pet photos with transparent backgrounds for stickers and social media."
        }
]}
      faqs={[
        {
                "q": "Can AI handle fluffy fur?",
                "a": "Yes! Our AI is trained on animal images and handles fur, feathers, and whiskers with high accuracy."
        },
        {
                "q": "Does it work with multiple pets in one photo?",
                "a": "Yes, our AI detects all subjects in the image, so multiple pets will be kept while the background is removed."
        },
        {
                "q": "Can I use this for pet merchandise?",
                "a": "Absolutely! Download the transparent PNG and use it for custom merchandise like mugs, t-shirts, and phone cases."
        }
]}
    />
  );
}
