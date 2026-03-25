import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Background Removal API — Free AI API Access | AI BG Eraser",
  description: "Background removal API for developers. AI-powered image processing API. Easy integration, fast results. API access coming soon.",
  alternates: { canonical: "/remove-background-api-free" },
};

export default function Page() {
  return (
    <LandingPage
      title="Background Removal API"
      subtitle="AI Background Removal API for Developers"
      description="Integrate AI background removal into your app or website. Our API makes it easy to process images programmatically."
      features={[
        {
                "title": "RESTful API",
                "desc": "Simple REST API that accepts image uploads and returns transparent PNGs."
        },
        {
                "title": "Fast Processing",
                "desc": "Average processing time under 5 seconds per image via API."
        },
        {
                "title": "Easy Integration",
                "desc": "Simple HTTP POST request. Works with any programming language."
        },
        {
                "title": "Coming Soon",
                "desc": "Our API is coming soon. Sign up to be notified when it launches."
        }
]}
      faqs={[
        {
                "q": "Is the API available yet?",
                "a": "Our API is coming soon! Currently you can use our web tool. Sign up to be the first to know when the API launches."
        },
        {
                "q": "What will the API pricing be?",
                "a": "Our API plan will start at $29.90/month with 1,000 included calls and $0.05 per additional image."
        },
        {
                "q": "Which programming languages are supported?",
                "a": "Our REST API works with any language — Python, JavaScript, Ruby, PHP, Java, Go, and more."
        }
]}
    />
  );
}
