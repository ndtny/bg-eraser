import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove White Background from Image Free | BG Eraser",
  description:
    "Remove white background from any image instantly with AI. Convert white backgrounds to transparent PNG. Free online tool for logos, graphics, and photos.",
  alternates: { canonical: "/remove-white-background" },
};

export default function RemoveWhiteBackground() {
  return (
    <LandingPage
      title="Remove White Background"
      subtitle="Convert White Backgrounds to Transparent"
      description="Have an image with a white background that you need transparent? Upload it and our AI will remove the white background instantly. Perfect for logos, graphics, scanned images, and more."
      features={[
        {
          title: "Smart White Detection",
          desc: "Our AI doesn't just remove pure white — it handles off-white, light gray, and slightly textured white backgrounds too.",
        },
        {
          title: "Preserve Image Quality",
          desc: "The subject of your image stays crisp and high-quality. Only the white background is removed.",
        },
        {
          title: "Perfect for Logos",
          desc: "Got a logo on a white background? Make it transparent so it works on any colored surface or design.",
        },
        {
          title: "Scanned Documents",
          desc: "Remove white backgrounds from scanned signatures, stamps, and graphics for digital use.",
        },
      ]}
      faqs={[
        {
          q: "Can it remove off-white or light gray backgrounds?",
          a: "Yes! Our AI is smart enough to detect and remove not just pure white, but also off-white, cream, light gray, and other near-white backgrounds.",
        },
        {
          q: "Will it remove white parts inside my image?",
          a: "No. Our AI understands the difference between a white background and white elements within your image (like white clothing or white text). It only removes the background.",
        },
        {
          q: "How do I remove white background from a logo?",
          a: "Simply upload your logo image with the white background. Our AI will detect the logo and remove only the background, preserving all the details of your logo design.",
        },
        {
          q: "Can I use this for scanned signatures?",
          a: "Yes! Upload a scan of your signature on white paper, and our AI will remove the white background, giving you a transparent signature you can place on any document.",
        },
      ]}
    />
  );
}
