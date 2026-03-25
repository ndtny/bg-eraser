import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Car Photo Free | AI BG Eraser",
  description: "Remove background from car photos free. Perfect for car dealerships, auto listings. AI-powered instant background removal.",
  alternates: { canonical: "/remove-background-from-car-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Car Photo"
      subtitle="Automotive Photo Background Removal with AI"
      description="Remove backgrounds from car and vehicle photos. Perfect for car dealerships, automotive marketplaces, and vehicle listings."
      features={[
        {
                "title": "Dealership Ready",
                "desc": "Create professional car photos with clean backgrounds for dealer websites and listings."
        },
        {
                "title": "Marketplace Photos",
                "desc": "Stand out on AutoTrader, Cars.com, Facebook Marketplace, and Craigslist."
        },
        {
                "title": "Any Vehicle",
                "desc": "Works with cars, trucks, motorcycles, boats, and any vehicle type."
        },
        {
                "title": "Reflections Handled",
                "desc": "AI manages reflective surfaces like windshields, chrome, and glossy paint."
        }
]}
      faqs={[
        {
                "q": "Can AI handle reflective car surfaces?",
                "a": "Yes, our AI handles chrome, glass, and glossy paint surfaces well, though extremely reflective areas may need minor touch-ups."
        },
        {
                "q": "Does it work with car photos taken outdoors?",
                "a": "Absolutely. Our AI works with any background — parking lots, streets, driveways, or studio settings."
        },
        {
                "q": "Can I add a showroom background after removal?",
                "a": "Yes! Download the transparent PNG and place it on any background — white, showroom, scenic, or custom."
        }
]}
    />
  );
}
