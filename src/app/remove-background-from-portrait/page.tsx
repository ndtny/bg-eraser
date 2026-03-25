import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Portrait Photo Free | AI BG Eraser",
  description: "Remove background from portrait photos instantly with AI. Perfect hair detection, clean edges. Free online tool, no signup required.",
  alternates: { canonical: "/remove-background-from-portrait" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Portrait"
      subtitle="Perfect AI Portrait Cutouts in Seconds"
      description="Get clean, professional portrait cutouts with transparent backgrounds. Our AI handles hair, fur, and complex edges with precision."
      features={[
        {
                "title": "Hair-Perfect Detection",
                "desc": "Our AI model excels at detecting fine hair strands, curly hair, and flyaways for natural-looking cutouts."
        },
        {
                "title": "Professional Headshots",
                "desc": "Create professional headshot photos with clean backgrounds for LinkedIn, resumes, and business cards."
        },
        {
                "title": "Any Skin Tone",
                "desc": "Works flawlessly with all skin tones and complexions, from light to dark."
        },
        {
                "title": "Passport & ID Photos",
                "desc": "Create passport-ready photos with white backgrounds that meet official requirements."
        }
]}
      faqs={[
        {
                "q": "Can AI detect fine hair details?",
                "a": "Yes! Our RMBG-2.0 model is specifically trained to handle fine hair strands, curly hair, and flyaways. The results are clean and natural-looking."
        },
        {
                "q": "Is this good enough for LinkedIn photos?",
                "a": "Absolutely. Many professionals use our tool to create clean headshots with transparent or solid-color backgrounds for their LinkedIn profiles."
        },
        {
                "q": "Does it work with group portraits?",
                "a": "Yes, our AI can detect multiple people in a photo and remove the background behind all subjects simultaneously."
        }
]}
    />
  );
}
