import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Canva Designs Free | AI BG Eraser",
  description: "Remove background for Canva designs free. No Canva Pro needed. AI background removal, download transparent PNG for Canva.",
  alternates: { canonical: "/remove-background-for-canva" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Canva"
      subtitle="Free Alternative to Canva's Background Remover"
      description="Remove image backgrounds for free and use in Canva. No Canva Pro subscription needed for background removal."
      features={[
        {
                "title": "Canva Pro Alternative",
                "desc": "Get background removal for free — no need to pay for Canva Pro's built-in remover."
        },
        {
                "title": "Easy Import",
                "desc": "Download your transparent PNG and upload directly to Canva for your designs."
        },
        {
                "title": "Any Design Project",
                "desc": "Use in Canva for social media posts, presentations, flyers, business cards, and more."
        },
        {
                "title": "Better Quality",
                "desc": "Our dedicated AI often produces better results than Canva's built-in background remover."
        }
]}
      faqs={[
        {
                "q": "Is this better than Canva's background remover?",
                "a": "Our dedicated AI model (RMBG-2.0) is specifically trained for background removal and often produces cleaner results, especially with hair and complex edges."
        },
        {
                "q": "How do I use the result in Canva?",
                "a": "Download the transparent PNG from our tool, then upload it to Canva using the 'Uploads' section. It will maintain its transparency."
        },
        {
                "q": "Do I need Canva Pro for this?",
                "a": "No! Our background removal is completely free. You only need free Canva to use the transparent PNGs in your designs."
        }
]}
    />
  );
}
