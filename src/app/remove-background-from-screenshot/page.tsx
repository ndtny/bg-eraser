import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Screenshot Free | AI BG Eraser",
  description: "Remove background from screenshot free. Extract UI elements, clean up screen captures. AI-powered instant removal.",
  alternates: { canonical: "/remove-background-from-screenshot" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Screenshot"
      subtitle="Clean Up Screenshots with AI Background Removal"
      description="Remove backgrounds from screenshots. Extract UI elements, app interfaces, or subjects from your screen captures."
      features={[
        {
                "title": "UI Element Extraction",
                "desc": "Extract buttons, dialogs, and interface elements from screenshots for documentation."
        },
        {
                "title": "App Mockups",
                "desc": "Clean up app screenshots for presentations, marketing, and app store listings."
        },
        {
                "title": "Tutorial Images",
                "desc": "Create clean images for tutorials, guides, and documentation."
        },
        {
                "title": "Any Platform",
                "desc": "Works with screenshots from Windows, Mac, iOS, Android, and web."
        }
]}
      faqs={[
        {
                "q": "Can I extract a specific element from a screenshot?",
                "a": "Our AI removes the background of the main subject. For specific element extraction, crop the screenshot to focus on the element first."
        },
        {
                "q": "Does it work with browser screenshots?",
                "a": "Yes! Screenshots from any source — browsers, apps, or system — work great."
        },
        {
                "q": "Can I use this for app store screenshots?",
                "a": "Yes! Clean up your app screenshots for professional-looking app store listings."
        }
]}
    />
  );
}
