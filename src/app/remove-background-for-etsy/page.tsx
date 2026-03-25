import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Etsy Shop Photos Free | AI BG Eraser",
  description: "Remove background for Etsy product photos free. Professional images for handmade and vintage items. AI-powered tool.",
  alternates: { canonical: "/remove-background-for-etsy" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Etsy"
      subtitle="Etsy-Perfect Product Photos with AI"
      description="Make your Etsy products shine with clean, professional photos. Remove backgrounds from handmade and vintage item photos."
      features={[
        {
                "title": "Etsy Seller Favorite",
                "desc": "Join thousands of Etsy sellers who use clean backgrounds to showcase their products."
        },
        {
                "title": "Handmade Items",
                "desc": "Works perfectly with jewelry, crafts, art prints, and handmade goods."
        },
        {
                "title": "Stand Out",
                "desc": "Clean product photos help your items stand out in Etsy search results."
        },
        {
                "title": "Quick & Free",
                "desc": "Process your product photos for free. 3 per day, no signup required."
        }
]}
      faqs={[
        {
                "q": "What background works best for Etsy?",
                "a": "Etsy shoppers respond well to both white backgrounds (professional) and lifestyle photos. Use our tool for clean product shots, and complement with styled photos."
        },
        {
                "q": "Does it work with small handmade items?",
                "a": "Yes! Our AI handles items of any size, from tiny jewelry pieces to large furniture."
        },
        {
                "q": "Can I make my Etsy shop look more professional?",
                "a": "Absolutely. Consistent, clean product photos are the #1 way to make your Etsy shop look more professional and trustworthy."
        }
]}
    />
  );
}
