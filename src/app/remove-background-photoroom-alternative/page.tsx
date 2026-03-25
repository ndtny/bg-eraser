import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "PhotoRoom Alternative — Free Background Remover | AI BG Eraser",
  description: "Best PhotoRoom alternative 2026. Free AI background removal, no app download. Same quality, works in browser.",
  alternates: { canonical: "/remove-background-photoroom-alternative" },
};

export default function Page() {
  return (
    <LandingPage
      title="Free PhotoRoom Alternative"
      subtitle="Like PhotoRoom, But Without the Subscription"
      description="Looking for a PhotoRoom alternative? Remove backgrounds for free with the same AI quality. No app download needed."
      features={[
        {
                "title": "No App Download",
                "desc": "PhotoRoom requires an app. Our tool works in any browser — desktop or mobile."
        },
        {
                "title": "Free to Use",
                "desc": "3 free background removals daily. PhotoRoom limits free users heavily."
        },
        {
                "title": "Web-Based",
                "desc": "Access from any device without installing or updating apps."
        },
        {
                "title": "Same Quality",
                "desc": "Our RMBG-2.0 AI produces comparable results to PhotoRoom's background removal."
        }
]}
      faqs={[
        {
                "q": "Is this as good as PhotoRoom?",
                "a": "For background removal, yes. PhotoRoom offers additional features like templates, but for pure background removal, our AI matches their quality."
        },
        {
                "q": "Does PhotoRoom have a free tier?",
                "a": "PhotoRoom has a limited free tier with watermarks. Our free tier has no watermarks and 3 daily uses."
        },
        {
                "q": "Can I use this on mobile like PhotoRoom?",
                "a": "Yes! Our website works perfectly on mobile browsers. No app download needed."
        }
]}
    />
  );
}
