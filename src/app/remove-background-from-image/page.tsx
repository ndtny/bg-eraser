import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image Free Online | BG Eraser",
  description:
    "Remove background from any image for free with AI. Upload your photo and get a transparent background in seconds. No signup, no watermark.",
  alternates: { canonical: "/remove-background-from-image" },
};

export default function RemoveBackgroundFromImage() {
  return (
    <LandingPage
      title="Remove Background from Image"
      subtitle="Free AI Background Removal — No Signup Required"
      description="Upload any image and instantly remove its background using our advanced AI. Works with photos, graphics, logos, and more. Download as PNG with transparent background."
      features={[
        {
          title: "Works with Any Image",
          desc: "Our AI handles photos, illustrations, graphics, and more. Upload JPG, PNG, or WebP files up to 20MB.",
        },
        {
          title: "Pixel-Perfect Edges",
          desc: "Advanced AI model detects fine details like hair strands, fur, and semi-transparent objects for clean cutouts.",
        },
        {
          title: "Instant Processing",
          desc: "Get your background-free image in under 10 seconds. No waiting, no queues.",
        },
        {
          title: "Free & Unlimited",
          desc: "No account needed, no watermarks, no daily limits. Use as many times as you want.",
        },
      ]}
      faqs={[
        {
          q: "How do I remove the background from an image?",
          a: "Simply upload your image using the upload area above. Our AI will automatically detect the subject and remove the background. You can then download the result as a PNG file with a transparent background.",
        },
        {
          q: "What types of images work best?",
          a: "Our AI works best with photos that have a clear subject — people, products, animals, objects. It also handles complex backgrounds, multiple subjects, and semi-transparent elements.",
        },
        {
          q: "Is the quality good enough for professional use?",
          a: "Yes! We use RMBG-2.0, a state-of-the-art AI model that produces professional-quality results suitable for e-commerce, design work, and marketing materials.",
        },
        {
          q: "Can I remove the background from multiple images?",
          a: "Currently, you can process one image at a time. Simply download your result and upload the next image. Batch processing is coming soon.",
        },
      ]}
    />
  );
}
