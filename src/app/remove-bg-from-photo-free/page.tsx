import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove BG from Photo Free — AI Background Eraser | AI BG Eraser",
  description: "Remove bg from photo free online. AI background eraser for photos. Professional quality, zero cost. 3 free uses daily.",
  alternates: { canonical: "/remove-bg-from-photo-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove BG from Photo Free"
      subtitle="Free AI-Powered Background Removal for Photos"
      description="Remove bg from any photo for free. Our AI delivers professional quality background removal without the professional price tag."
      features={[
        {
                "title": "Photo-First Design",
                "desc": "Optimized for real photographs with our AI trained on millions of photo samples."
        },
        {
                "title": "Complex Backgrounds",
                "desc": "Handles busy, cluttered, and multi-colored backgrounds with ease."
        },
        {
                "title": "Natural Results",
                "desc": "Produces natural-looking cutouts that blend seamlessly into new backgrounds."
        },
        {
                "title": "Free Daily Uses",
                "desc": "3 completely free uses every day, resetting at midnight UTC."
        }
]}
      faqs={[
        {
                "q": "How many photos can I process for free?",
                "a": "You get 3 free background removals every day. The counter resets at midnight UTC."
        },
        {
                "q": "Is the free version lower quality?",
                "a": "No! Free users get exactly the same AI quality and resolution as Pro users."
        },
        {
                "q": "Can I use this for professional photography?",
                "a": "Absolutely. Many professional photographers use AI background removal for quick edits and client previews."
        }
]}
    />
  );
}
