import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from ID Photo Free Online | AI BG Eraser",
  description: "Remove background from ID photo free. Create white background ID photos for passports, visas, licenses. AI-powered tool.",
  alternates: { canonical: "/remove-background-from-id-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from ID Photo"
      subtitle="Create ID Photos with White Background"
      description="Remove backgrounds from ID photos for passports, visas, driver's licenses, and student IDs. Get clean white backgrounds instantly."
      features={[
        {
                "title": "Multi-Purpose",
                "desc": "Works for passports, visas, driver's licenses, student IDs, work badges, and more."
        },
        {
                "title": "White Background",
                "desc": "Clean white background that meets requirements for most ID photo standards."
        },
        {
                "title": "Head & Shoulders",
                "desc": "Clean cutout of head and shoulders — exactly what ID photos require."
        },
        {
                "title": "DIY & Save",
                "desc": "Skip the photo studio. Create ID photos at home for free."
        }
]}
      faqs={[
        {
                "q": "Will this meet passport photo requirements?",
                "a": "Our tool removes backgrounds cleanly. Ensure your photo meets size, face position, and lighting requirements for your specific document."
        },
        {
                "q": "Can I use this for a visa application?",
                "a": "Yes, as long as the photo otherwise meets the visa's specific requirements for size, face position, and expression."
        },
        {
                "q": "How do I get the right dimensions?",
                "a": "Our tool removes the background at original resolution. Use any photo editor to crop to the required dimensions afterwards."
        }
]}
    />
  );
}
