import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Cut Out Image — Extract Subject from Background | AI BG Eraser",
  description: "Cut out image online free. Extract subjects from backgrounds with AI. Clean cutouts with transparent backgrounds. No Photoshop needed.",
  alternates: { canonical: "/cut-out-image" },
};

export default function Page() {
  return (
    <LandingPage
      title="Cut Out Image"
      subtitle="Extract Any Subject from Its Background"
      description="Cut out people, products, or objects from any image. Get clean cutouts with transparent backgrounds for your projects."
      features={[
        {
                "title": "Precision Cutouts",
                "desc": "AI creates pixel-perfect cutouts around your subject, even with complex edges."
        },
        {
                "title": "Multiple Subjects",
                "desc": "Cut out all subjects in an image simultaneously — people, products, or objects."
        },
        {
                "title": "Layer-Ready",
                "desc": "Download cutouts as transparent PNGs ready to place on new backgrounds in any design tool."
        },
        {
                "title": "No Manual Tracing",
                "desc": "Forget the pen tool and lasso. Our AI traces around subjects automatically."
        }
]}
      faqs={[
        {
                "q": "Can I cut out specific objects from a photo?",
                "a": "Our AI automatically detects and cuts out all main subjects. For specific object selection, we recommend uploading cropped images."
        },
        {
                "q": "How precise are the cutouts?",
                "a": "Our AI produces very precise cutouts that rival manual selections in Photoshop. It handles hair, fur, and complex edges exceptionally well."
        },
        {
                "q": "Can I use cutouts in Canva or Figma?",
                "a": "Yes! Download the transparent PNG and import it directly into Canva, Figma, Photoshop, or any design tool."
        }
]}
    />
  );
}
