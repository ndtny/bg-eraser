import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image on Chromebook Free | AI BG Eraser",
  description: "Remove background on Chromebook free. Web-based AI tool, no apps needed. Perfect for ChromeOS. Instant background removal.",
  alternates: { canonical: "/remove-background-from-image-on-chromebook" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background on Chromebook"
      subtitle="Chromebook Background Removal — Browser Only"
      description="Remove backgrounds from images on your Chromebook. Our web-based tool is perfect for ChromeOS — no apps or plugins needed."
      features={[
        {
                "title": "Perfect for ChromeOS",
                "desc": "Our web-based tool runs entirely in Chrome browser — ideal for Chromebooks."
        },
        {
                "title": "No Android App Needed",
                "desc": "Skip the Play Store. Our website works faster than most Android background removal apps."
        },
        {
                "title": "School & Work",
                "desc": "Great for school projects, presentations, and work documents on Chromebooks."
        },
        {
                "title": "Lightweight",
                "desc": "Doesn't strain your Chromebook's resources. Processing happens on our servers."
        }
]}
      faqs={[
        {
                "q": "Will this work on my school Chromebook?",
                "a": "Yes! It's a regular website — no app installation required. If your school blocks it, contact your IT administrator."
        },
        {
                "q": "Is it fast on a Chromebook?",
                "a": "Yes! The heavy processing happens on our servers, so your Chromebook's specs don't matter."
        },
        {
                "q": "Can I save the result to Google Drive?",
                "a": "Download the PNG to your Files app, then upload it to Google Drive from there."
        }
]}
    />
  );
}
