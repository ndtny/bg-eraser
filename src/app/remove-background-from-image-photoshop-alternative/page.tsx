import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background — Free Photoshop Alternative | AI BG Eraser",
  description: "Free Photoshop alternative for background removal. AI removes backgrounds in seconds, no software needed. Same quality, zero cost.",
  alternates: { canonical: "/remove-background-from-image-photoshop-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Free Photoshop Alternative for Background Removal"
      subtitle="Skip Photoshop — Remove Backgrounds in One Click"
      description="Why spend hours in Photoshop? Our AI removes backgrounds in seconds with the same quality. Free, no software, no skills needed."
      features={[
        {
                "title": "No Photoshop Needed",
                "desc": "Skip the $22/month subscription. Our AI does the same job for free."
        },
        {
                "title": "No Learning Curve",
                "desc": "Photoshop takes weeks to learn. Our tool takes seconds — just upload and download."
        },
        {
                "title": "Same Quality",
                "desc": "AI produces results comparable to expert Photoshop users for background removal."
        },
        {
                "title": "Works Anywhere",
                "desc": "No software install. Works on any device with a browser."
        }
]}
      faqs={[
        {
                "q": "Is this really as good as Photoshop?",
                "a": "For background removal specifically, yes. Our AI matches the quality of manual Photoshop work in most cases, in a fraction of the time."
        },
        {
                "q": "What can Photoshop do that this can't?",
                "a": "Photoshop is a full image editor. Our tool focuses specifically on background removal, which we do faster and easier than Photoshop."
        },
        {
                "q": "Can I do further editing after removal?",
                "a": "Yes! Download the transparent PNG and open it in Photoshop, GIMP, or any editor for further edits."
        }
]}
    />
  );
}
