import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Picture — Free AI Tool | AI BG Eraser",
  description: "Remove background from picture online free. AI-powered background removal for any picture. No signup, instant results.",
  alternates: { canonical: "/remove-background-from-picture" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Picture"
      subtitle="Clean Up Any Picture with AI Background Removal"
      description="Remove the background from any picture online. Upload your picture, our AI removes the background, and you download the result."
      features={[
        {
                "title": "Any Picture Type",
                "desc": "Works with digital photos, scanned images, screenshots, illustrations, and more."
        },
        {
                "title": "High Fidelity",
                "desc": "Maintains the quality and details of your original picture."
        },
        {
                "title": "Drag & Drop",
                "desc": "Simply drag your picture into the upload area. No complicated steps."
        },
        {
                "title": "Instant Results",
                "desc": "Get your background-free picture in seconds, not minutes."
        }
]}
      faqs={[
        {
                "q": "Is 'picture' different from 'image' or 'photo'?",
                "a": "No! Whether you call it a picture, image, photo, or graphic — our tool works with all of them."
        },
        {
                "q": "Can I remove backgrounds from scanned documents?",
                "a": "Yes, but results depend on the scan quality. Clear scans with distinct subjects work best."
        },
        {
                "q": "What resolution output do I get?",
                "a": "You get the same resolution as your input. We don't downscale or reduce quality."
        }
]}
    />
  );
}
