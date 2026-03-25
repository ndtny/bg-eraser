import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Black Background from Image Free Online | AI BG Eraser",
  description: "Remove black background from image free online. AI removes dark backgrounds instantly. Download transparent PNG.",
  alternates: { canonical: "/remove-black-background" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Black Background"
      subtitle="Remove Dark & Black Backgrounds from Images"
      description="Remove black or dark backgrounds from images. Perfect for product shots on dark backgrounds, night photos, and dark-themed images."
      features={[
        {
                "title": "Dark Background Removal",
                "desc": "Handles black, dark gray, and any dark-colored backgrounds effectively."
        },
        {
                "title": "Product on Black",
                "desc": "Remove black backgrounds from product photography and studio shots."
        },
        {
                "title": "Night Photos",
                "desc": "Extract subjects from photos taken at night or in dark environments."
        },
        {
                "title": "Design Assets",
                "desc": "Convert dark-background graphics into transparent PNGs for any use."
        }
]}
      faqs={[
        {
                "q": "Can AI distinguish a dark subject from a dark background?",
                "a": "Yes! Our AI uses advanced segmentation that understands object shapes, not just colors. It can separate dark subjects from dark backgrounds."
        },
        {
                "q": "Will it work with very dark photos?",
                "a": "Our AI handles most dark photos well, but extremely underexposed images may produce less precise results."
        },
        {
                "q": "What about photos with black clothing?",
                "a": "Our AI distinguishes between black clothing (part of the subject) and black backgrounds. The clothing will be preserved."
        }
]}
    />
  );
}
