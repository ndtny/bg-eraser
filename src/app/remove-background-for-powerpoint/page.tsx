import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for PowerPoint Slides Free | AI BG Eraser",
  description: "Remove background for PowerPoint slides free. Create professional presentation images with AI. Transparent PNG for any slide.",
  alternates: { canonical: "/remove-background-for-powerpoint" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for PowerPoint"
      subtitle="Professional Presentation Images with AI"
      description="Remove image backgrounds for PowerPoint presentations. Create professional slides with clean, transparent images."
      features={[
        {
                "title": "Slide-Ready",
                "desc": "Transparent PNGs integrate perfectly into PowerPoint, Keynote, and Google Slides."
        },
        {
                "title": "Professional Slides",
                "desc": "Elevate your presentations with clean, professional images instead of stock photos."
        },
        {
                "title": "Any Slide Theme",
                "desc": "Transparent images work on any slide background — dark, light, or colored."
        },
        {
                "title": "Quick Workflow",
                "desc": "Process images for your entire presentation in minutes, not hours."
        }
]}
      faqs={[
        {
                "q": "Do transparent PNGs work in PowerPoint?",
                "a": "Yes! PowerPoint fully supports transparent PNG images. Simply insert the image and it will blend with your slide background."
        },
        {
                "q": "Does it work with Google Slides too?",
                "a": "Absolutely. Transparent PNGs work in PowerPoint, Google Slides, Keynote, and any presentation software."
        },
        {
                "q": "Can I remove backgrounds from charts and diagrams?",
                "a": "Our tool works best with photos and graphics. For charts, PowerPoint's built-in tools may be more appropriate."
        }
]}
    />
  );
}
