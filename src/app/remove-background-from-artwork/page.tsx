import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Artwork & Illustration Free | AI BG Eraser",
  description: "Remove background from artwork and illustrations free. Clean up scanned art, create transparent versions. AI-powered tool.",
  alternates: { canonical: "/remove-background-from-artwork" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Artwork"
      subtitle="Clean Up Artwork & Illustrations with AI"
      description="Remove backgrounds from scanned artwork, illustrations, paintings, and drawings. Create transparent versions for digital use."
      features={[
        {
                "title": "Scanned Art",
                "desc": "Remove paper backgrounds from scanned paintings, drawings, and sketches."
        },
        {
                "title": "Digital Art",
                "desc": "Clean up digital illustrations by removing unwanted backgrounds."
        },
        {
                "title": "Print-Ready",
                "desc": "Create transparent artwork files for printing on merchandise and products."
        },
        {
                "title": "Portfolio Use",
                "desc": "Clean artwork images for online portfolios and art websites."
        }
]}
      faqs={[
        {
                "q": "Does it work with watercolor paintings?",
                "a": "Yes, but results vary with very light or semi-transparent watercolor edges. Bold, well-defined artwork produces the best results."
        },
        {
                "q": "Can I remove the paper background from a pencil drawing?",
                "a": "Yes! Our AI can separate pencil drawings from white paper backgrounds, creating a transparent version."
        },
        {
                "q": "Will it preserve the art's colors?",
                "a": "Absolutely. All colors, textures, and details in your artwork are preserved during background removal."
        }
]}
    />
  );
}
