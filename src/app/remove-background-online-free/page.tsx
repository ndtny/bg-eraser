import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background Online Free — No Download Needed | AI BG Eraser",
  description: "Remove background online free. No software download needed, works in browser. Free AI background removal tool. Try instantly.",
  alternates: { canonical: "/remove-background-online-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background Online Free"
      subtitle="Free Online Background Removal — No Software Required"
      description="Remove backgrounds online for free. No software download, no installation. Everything happens in your browser."
      features={[
        {
                "title": "Browser-Based",
                "desc": "No downloads, no installations. Works in Chrome, Safari, Firefox, Edge, and any modern browser."
        },
        {
                "title": "Cross-Platform",
                "desc": "Use on Windows, Mac, Linux, Chromebook, or any device with a web browser."
        },
        {
                "title": "Always Up to Date",
                "desc": "No software updates needed. We continuously improve the AI on our end."
        },
        {
                "title": "Fast & Lightweight",
                "desc": "Our web app loads quickly and doesn't slow down your device."
        }
]}
      faqs={[
        {
                "q": "Do I need to install anything?",
                "a": "No. Just visit aibgeraser.com in any web browser and start removing backgrounds immediately."
        },
        {
                "q": "Does it work offline?",
                "a": "No, an internet connection is required since the AI processing happens on our servers."
        },
        {
                "q": "Is my browser supported?",
                "a": "We support all modern browsers: Chrome, Firefox, Safari, Edge, Opera, and their mobile versions."
        }
]}
    />
  );
}
