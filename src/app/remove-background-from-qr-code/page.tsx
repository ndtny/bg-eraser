import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from QR Code Free | AI BG Eraser",
  description: "Remove background from QR code free. Create transparent QR code images. AI-powered tool for marketing materials.",
  alternates: { canonical: "/remove-background-from-qr-code" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from QR Code"
      subtitle="Transparent QR Code Images with AI"
      description="Remove backgrounds from QR code images. Create transparent QR codes for use on business cards, flyers, and marketing materials."
      features={[
        {
                "title": "Transparent QR Codes",
                "desc": "Place QR codes on any background without white borders or boxes."
        },
        {
                "title": "Marketing Materials",
                "desc": "Use transparent QR codes on flyers, posters, business cards, and packaging."
        },
        {
                "title": "Clean Design",
                "desc": "Integrate QR codes seamlessly into your designs without ugly white squares."
        },
        {
                "title": "Scannable",
                "desc": "Transparent QR codes remain fully scannable when placed on contrasting backgrounds."
        }
]}
      faqs={[
        {
                "q": "Will the QR code still scan after removing the background?",
                "a": "Yes, as long as there's enough contrast between the QR code and whatever background you place it on. Dark QR on light backgrounds works best."
        },
        {
                "q": "Can I put a transparent QR code on a colored flyer?",
                "a": "Yes! Just make sure the background color provides enough contrast with the QR code for reliable scanning."
        },
        {
                "q": "Does it work with custom/branded QR codes?",
                "a": "Yes, our AI handles standard and custom-designed QR codes with logos embedded in them."
        }
]}
    />
  );
}
