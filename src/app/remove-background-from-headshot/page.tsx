import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Headshot Photo Free | AI BG Eraser",
  description: "Remove background from headshot photos free. Create professional headshots for LinkedIn, resumes. AI-powered, instant results.",
  alternates: { canonical: "/remove-background-from-headshot" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Headshot"
      subtitle="Professional Headshot Background Removal"
      description="Create professional headshots with clean backgrounds. Remove distracting backgrounds from headshot photos for LinkedIn, resumes, and corporate use."
      features={[
        {
                "title": "LinkedIn-Ready",
                "desc": "Create professional headshots perfect for LinkedIn profiles, company websites, and business cards."
        },
        {
                "title": "Clean Shoulders",
                "desc": "AI detects and cleanly cuts around shoulders, collars, and clothing edges."
        },
        {
                "title": "Hair Precision",
                "desc": "Handles all hair types and styles with precise edge detection."
        },
        {
                "title": "Corporate Quality",
                "desc": "Results that look like they were done by a professional photographer."
        }
]}
      faqs={[
        {
                "q": "Is this good enough for corporate headshots?",
                "a": "Yes! Our AI produces clean, professional results suitable for corporate websites, LinkedIn, and business materials."
        },
        {
                "q": "What background should I use after removal?",
                "a": "For professional headshots, solid colors work best — white, light gray, or your brand color. Download the transparent PNG and add any background."
        },
        {
                "q": "Can I batch process team headshots?",
                "a": "Currently one at a time. Process each headshot individually for consistent results."
        }
]}
    />
  );
}
