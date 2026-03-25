import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image on Android Free | AI BG Eraser",
  description: "Remove background from image on Android free. No app download needed, works in Chrome. Instant AI background removal.",
  alternates: { canonical: "/remove-background-from-image-on-android" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background on Android"
      subtitle="Background Removal on Android — No App Needed"
      description="Remove image backgrounds on your Android phone. Works in Chrome browser — no app download required."
      features={[
        {
                "title": "Works in Chrome",
                "desc": "Open our website in Chrome on your Android phone. No app installation needed."
        },
        {
                "title": "Gallery Access",
                "desc": "Upload photos from your gallery or take a new photo with your camera."
        },
        {
                "title": "Quick Share",
                "desc": "Download and share the result directly to WhatsApp, Instagram, or any app."
        },
        {
                "title": "All Android Phones",
                "desc": "Works on Samsung, Pixel, OnePlus, Xiaomi, and any Android device."
        }
]}
      faqs={[
        {
                "q": "Which Android browsers are supported?",
                "a": "Chrome, Firefox, Samsung Internet, and any modern Android browser works perfectly."
        },
        {
                "q": "Can I use photos from WhatsApp or social media?",
                "a": "Yes! Save the image to your gallery first, then upload it to our tool."
        },
        {
                "q": "Does it work on older Android phones?",
                "a": "Yes, our tool works on any Android phone with a modern browser, regardless of the phone model or age."
        }
]}
    />
  );
}
