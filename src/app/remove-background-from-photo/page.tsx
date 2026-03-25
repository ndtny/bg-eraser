import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Photo Free | AI Photo Background Remover",
  description:
    "Remove background from photo instantly with AI. Perfect for portraits, selfies, and professional headshots. Free online tool, no signup needed.",
  alternates: { canonical: "/remove-background-from-photo" },
};

export default function RemoveBackgroundFromPhoto() {
  return (
    <LandingPage
      title="Remove Background from Photo"
      subtitle="AI-Powered Photo Background Removal"
      description="Transform your photos with one click. Our AI precisely removes backgrounds from portraits, selfies, group photos, and more. Get professional results in seconds."
      features={[
        {
          title: "Perfect for Portraits",
          desc: "Our AI excels at detecting people and handling complex edges like hair, creating clean cutouts every time.",
        },
        {
          title: "Professional Headshots",
          desc: "Create professional headshots with transparent or custom backgrounds for LinkedIn, resumes, and business profiles.",
        },
        {
          title: "Group Photos",
          desc: "Remove backgrounds from group photos with multiple people. Our AI accurately detects all subjects.",
        },
        {
          title: "Selfie Enhancement",
          desc: "Remove distracting backgrounds from your selfies for social media posts and profile pictures.",
        },
      ]}
      faqs={[
        {
          q: "Can I remove background from a selfie?",
          a: "Absolutely! Our AI works great with selfies and portraits. It can accurately detect faces and hair to create clean cutouts.",
        },
        {
          q: "Does it work with group photos?",
          a: "Yes, our AI can detect and preserve multiple people in a group photo while removing the background.",
        },
        {
          q: "How do I get a white background instead of transparent?",
          a: "After removing the background, you can place the transparent PNG on any colored background using any basic image editor or presentation software.",
        },
        {
          q: "What photo resolution is supported?",
          a: "We support photos up to 20MB. Large images are automatically optimized for the best balance of quality and processing speed.",
        },
      ]}
    />
  );
}
