import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Wedding Photo Free | AI BG Eraser",
  description: "Remove background from wedding photos free. AI handles veils, dresses, bouquets. Perfect for invitations and cards.",
  alternates: { canonical: "/remove-background-from-wedding-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Wedding Photo"
      subtitle="Wedding Photo Background Removal with AI"
      description="Remove backgrounds from wedding photos for invitations, thank you cards, and albums. AI handles veils, bouquets, and dress details."
      features={[
        {
                "title": "Veil & Dress Detail",
                "desc": "AI handles semi-transparent veils, flowing dresses, and intricate lace details."
        },
        {
                "title": "Wedding Invitations",
                "desc": "Create cutouts for custom wedding invitations, save-the-dates, and thank you cards."
        },
        {
                "title": "Album Enhancement",
                "desc": "Place wedding photos on custom backgrounds for unique album layouts."
        },
        {
                "title": "Bouquet Precision",
                "desc": "Fine flower and leaf details in bouquets are preserved with precision."
        }
]}
      faqs={[
        {
                "q": "Can AI handle wedding veils?",
                "a": "Yes! Our AI is trained to handle semi-transparent materials like veils, maintaining their see-through quality."
        },
        {
                "q": "Will it work with group wedding photos?",
                "a": "Yes, our AI keeps all subjects (bride, groom, wedding party) and removes only the background."
        },
        {
                "q": "Can I create a wedding invitation with this?",
                "a": "Remove the background from your photo, download the transparent PNG, and use it in Canva, Photoshop, or any design tool to create your invitation."
        }
]}
    />
  );
}
