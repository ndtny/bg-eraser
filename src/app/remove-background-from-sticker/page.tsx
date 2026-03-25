import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background to Make Stickers Free | AI BG Eraser",
  description: "Make custom stickers by removing backgrounds free. Create stickers for WhatsApp, Telegram, printing. AI-powered tool.",
  alternates: { canonical: "/remove-background-from-sticker" },
};

export default function Page() {
  return (
    <LandingPage
      title="Make Stickers — Remove Background"
      subtitle="Create Custom Stickers with AI Background Removal"
      description="Remove backgrounds from images to create custom stickers for messaging apps, printing, and merchandise."
      features={[
        {
                "title": "Messaging Stickers",
                "desc": "Create custom stickers for WhatsApp, Telegram, Signal, and iMessage."
        },
        {
                "title": "Print Stickers",
                "desc": "Make transparent files for printing custom vinyl stickers and decals."
        },
        {
                "title": "Merchandise",
                "desc": "Create sticker designs for laptops, water bottles, and merchandise."
        },
        {
                "title": "Fun & Creative",
                "desc": "Turn any photo into a fun sticker — pets, friends, memes, or anything!"
        }
]}
      faqs={[
        {
                "q": "How do I use these as WhatsApp stickers?",
                "a": "Download the transparent PNG, then use a sticker maker app (like Sticker Maker for WhatsApp) to import and create your sticker pack."
        },
        {
                "q": "Can I print these as real stickers?",
                "a": "Yes! Upload the transparent PNG to sticker printing services like StickerMule, Redbubble, or your local print shop."
        },
        {
                "q": "What size should sticker images be?",
                "a": "For messaging stickers, 512x512px is standard. For print stickers, use the highest resolution possible."
        }
]}
    />
  );
}
