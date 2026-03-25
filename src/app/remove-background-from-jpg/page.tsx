import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from JPG Image Free Online | AI BG Eraser",
  description: "Remove background from JPG images online free. Convert JPG to transparent PNG instantly with AI. No signup, no watermark.",
  alternates: { canonical: "/remove-background-from-jpg" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from JPG"
      subtitle="Convert JPG to Transparent PNG in Seconds"
      description="Upload a JPG image and remove its background instantly. Our AI converts your JPG to a transparent PNG with clean edges."
      features={[
        {
                "title": "JPG to Transparent PNG",
                "desc": "Upload any JPG file and get a transparent PNG with the background removed automatically."
        },
        {
                "title": "Preserves Quality",
                "desc": "Your image quality is maintained during the conversion from JPG to transparent PNG."
        },
        {
                "title": "Any JPG Size",
                "desc": "Handle JPG files up to 20MB. Works with photos from any camera or device."
        },
        {
                "title": "Instant Conversion",
                "desc": "The entire process — upload, remove background, download PNG — takes under 10 seconds."
        }
]}
      faqs={[
        {
                "q": "Can I convert JPG to transparent PNG?",
                "a": "Yes! Upload your JPG, our AI removes the background, and you download the result as a transparent PNG file."
        },
        {
                "q": "Why can't JPG have transparent backgrounds?",
                "a": "JPG format doesn't support transparency. That's why we convert your result to PNG, which supports full alpha transparency."
        },
        {
                "q": "Will the image quality decrease?",
                "a": "No. The subject of your image maintains its original quality. Only the background is removed."
        }
]}
    />
  );
}
