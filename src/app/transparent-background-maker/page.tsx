import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Transparent Background Maker Free Online | BG Eraser",
  description:
    "Make any image background transparent instantly with AI. Free online transparent background maker for logos, icons, product photos and more.",
  alternates: { canonical: "/transparent-background-maker" },
};

export default function TransparentBackgroundMaker() {
  return (
    <LandingPage
      title="Transparent Background Maker"
      subtitle="Create Transparent PNG Images Instantly"
      description="Turn any image into a transparent PNG with one click. Perfect for logos, icons, stickers, and product photos. Our AI handles the hard work for you."
      features={[
        {
          title: "Transparent PNG Output",
          desc: "All results are saved as PNG files with full alpha transparency. Ready to use in any design project.",
        },
        {
          title: "Perfect for Logos",
          desc: "Make your logo background transparent for use on websites, business cards, and marketing materials.",
        },
        {
          title: "Sticker & Icon Creation",
          desc: "Create stickers and icons with transparent backgrounds for messaging apps, websites, and presentations.",
        },
        {
          title: "No Design Skills Needed",
          desc: "You don't need Photoshop or any design experience. Our AI does everything automatically.",
        },
      ]}
      faqs={[
        {
          q: "What is a transparent background?",
          a: "A transparent background means the area behind your subject has no color — it's see-through. This is represented by a checkered pattern in image editors and saved as a PNG file with alpha transparency.",
        },
        {
          q: "How do I make a logo background transparent?",
          a: "Simply upload your logo image. Our AI will detect the logo and remove the background, giving you a transparent PNG that works on any colored surface.",
        },
        {
          q: "Can I make a white background transparent?",
          a: "Yes! Our AI can remove white backgrounds, colored backgrounds, complex photo backgrounds — any type of background.",
        },
        {
          q: "What apps support transparent PNG images?",
          a: "Transparent PNGs work in virtually all modern applications — Canva, Figma, PowerPoint, Google Slides, Photoshop, web browsers, and most social media platforms.",
        },
      ]}
    />
  );
}
