import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Food Photo Free | AI BG Eraser",
  description: "Remove background from food photos free online. Perfect for restaurant menus, delivery apps, food blogs. AI-powered instant removal.",
  alternates: { canonical: "/remove-background-from-food-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Food Photo"
      subtitle="Clean Food Photography Backgrounds with AI"
      description="Remove backgrounds from food photos for menus, delivery apps, and social media. Get clean, appetizing product shots."
      features={[
        {
                "title": "Menu-Ready Photos",
                "desc": "Create clean food images with transparent backgrounds for digital and print menus."
        },
        {
                "title": "Delivery App Photos",
                "desc": "Professional food photos for Uber Eats, DoorDash, Grubhub, and other delivery platforms."
        },
        {
                "title": "Food Blog Assets",
                "desc": "Create beautiful food photography for blog posts and recipe pages."
        },
        {
                "title": "Precise Edges",
                "desc": "AI handles the irregular edges of food items, plates, and garnishes accurately."
        }
]}
      faqs={[
        {
                "q": "Does it work with food on plates?",
                "a": "Yes! Our AI can detect food items with or without plates, bowls, and utensils."
        },
        {
                "q": "Can I use this for my restaurant menu?",
                "a": "Absolutely. Create clean, professional food photos with white or transparent backgrounds for your menu."
        },
        {
                "q": "How about drinks and beverages?",
                "a": "Yes, our AI handles glasses, cups, and beverages, including transparent glass edges."
        }
]}
    />
  );
}
