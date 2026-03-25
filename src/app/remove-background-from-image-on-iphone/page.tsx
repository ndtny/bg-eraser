import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image on iPhone Free | AI BG Eraser",
  description: "Remove background from image on iPhone free. No app needed, works in Safari. Upload photo, download transparent PNG instantly.",
  alternates: { canonical: "/remove-background-from-image-on-iphone" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background on iPhone"
      subtitle="Background Removal on iPhone — No App Needed"
      description="Remove image backgrounds directly on your iPhone. No app download needed — works in Safari. Upload from camera roll and download."
      features={[
        {
                "title": "Works in Safari",
                "desc": "No app store download needed. Just open our website in Safari on your iPhone."
        },
        {
                "title": "Camera Roll Access",
                "desc": "Upload photos directly from your iPhone camera roll or take a new photo."
        },
        {
                "title": "Save to Photos",
                "desc": "Download the transparent PNG and save it directly to your camera roll."
        },
        {
                "title": "iOS Optimized",
                "desc": "Our website is fully optimized for iPhone and iPad with touch-friendly controls."
        }
]}
      faqs={[
        {
                "q": "Do I need to download an app?",
                "a": "No! Just open aibgeraser.com in Safari on your iPhone. No app needed."
        },
        {
                "q": "Can I take a photo and remove the background immediately?",
                "a": "Yes! Tap the upload button, choose 'Take Photo', snap a picture, and our AI will remove the background."
        },
        {
                "q": "Does iOS have built-in background removal?",
                "a": "iOS 16+ has a basic 'lift subject' feature. Our AI handles complex edges (hair, fur) much better and gives you a downloadable PNG."
        }
]}
    />
  );
}
