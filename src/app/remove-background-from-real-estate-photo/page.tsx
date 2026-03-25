import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Real Estate Photo Free | AI BG Eraser",
  description: "Remove background from real estate photos free. Enhance property listing images. AI-powered tool for real estate agents.",
  alternates: { canonical: "/remove-background-from-real-estate-photo" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Real Estate Photo"
      subtitle="Real Estate Photo Enhancement with AI"
      description="Enhance real estate listing photos by removing unwanted backgrounds. Create clean property images for MLS, Zillow, and Realtor.com."
      features={[
        {
                "title": "Listing Enhancement",
                "desc": "Remove distracting backgrounds from property exterior and interior photos."
        },
        {
                "title": "Virtual Staging Ready",
                "desc": "Remove furniture and backgrounds for virtual staging applications."
        },
        {
                "title": "MLS Compliant",
                "desc": "Create clean, professional photos that meet MLS listing standards."
        },
        {
                "title": "Agent Branding",
                "desc": "Remove backgrounds from agent headshots for marketing materials."
        }
]}
      faqs={[
        {
                "q": "Can this help with virtual staging?",
                "a": "Yes! Remove existing furniture/backgrounds from room photos, then add virtual staging using design tools."
        },
        {
                "q": "Does it work with room interiors?",
                "a": "Our AI is optimized for foreground subjects. For room-specific editing, specialized real estate tools may be more appropriate."
        },
        {
                "q": "Can I use this for agent headshots?",
                "a": "Absolutely! Create professional agent headshots with clean backgrounds for your marketing materials."
        }
]}
    />
  );
}
