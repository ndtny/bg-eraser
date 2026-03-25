import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Baby Photo Free | AI BG Eraser",
  description: "Remove background from baby photos free. Create adorable cutouts for announcements and cards. AI-powered, gentle precision.",
  alternates: { canonical: "/remove-background-from-baby-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Baby Photo"
      subtitle="Adorable Baby Photo Cutouts with AI"
      description="Remove backgrounds from baby photos for announcements, milestone cards, and keepsakes. AI handles soft edges gently."
      features={[
        {
                "title": "Soft Edge Detection",
                "desc": "AI gently handles soft baby features, wispy hair, and delicate details."
        },
        {
                "title": "Birth Announcements",
                "desc": "Create beautiful baby cutouts for digital and printed birth announcements."
        },
        {
                "title": "Milestone Cards",
                "desc": "Monthly milestone photos with clean backgrounds for social sharing."
        },
        {
                "title": "Keepsake Quality",
                "desc": "High-quality cutouts suitable for printed keepsakes and photo books."
        }
]}
      faqs={[
        {
                "q": "Does it work with newborn photos?",
                "a": "Yes! Our AI gently handles the soft features of newborns, including fine hair and delicate skin tones."
        },
        {
                "q": "Can I create monthly milestone photos?",
                "a": "Absolutely! Remove backgrounds from each monthly photo for a consistent milestone series."
        },
        {
                "q": "Is it safe to upload baby photos?",
                "a": "Yes, we never store your images. Photos are processed in real-time and immediately discarded."
        }
]}
    />
  );
}
