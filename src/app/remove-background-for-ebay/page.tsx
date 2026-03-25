import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for eBay Listings Free | AI BG Eraser",
  description: "Remove background for eBay listing photos free. Clean product photos that help sell faster. AI-powered instant removal.",
  alternates: { canonical: "/remove-background-for-ebay" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for eBay"
      subtitle="Professional eBay Listing Photos with AI"
      description="Create professional eBay listing photos with clean backgrounds. Sell faster with better product images."
      features={[
        {
                "title": "eBay Optimized",
                "desc": "Clean product photos that stand out in eBay search results and drive more bids."
        },
        {
                "title": "Quick Listings",
                "desc": "Process product photos in seconds, not hours. List items faster."
        },
        {
                "title": "Professional Look",
                "desc": "Give your eBay store a professional, trustworthy appearance."
        },
        {
                "title": "Any Item",
                "desc": "Works with clothing, electronics, collectibles, vintage items, and anything you sell."
        }
]}
      faqs={[
        {
                "q": "Do better photos really help sell on eBay?",
                "a": "Yes! eBay's own data shows listings with clear, professional photos get significantly more views and higher final prices."
        },
        {
                "q": "Can I use this for vintage and used items?",
                "a": "Absolutely. Our AI works with any item in any condition, removing the background to create a clean product shot."
        },
        {
                "q": "How many photos can I process for my listings?",
                "a": "Free users get 3 per day. If you have many items to list, our Pro plan offers unlimited processing."
        }
]}
    />
  );
}
