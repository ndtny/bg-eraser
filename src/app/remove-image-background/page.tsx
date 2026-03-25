import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Image Background — AI Powered Free Tool | AI BG Eraser",
  description: "Remove image background with AI in one click. Free online background removal tool. No signup, instant results. Try now.",
  alternates: { canonical: "/remove-image-background" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Image Background"
      subtitle="AI-Powered Background Removal in One Click"
      description="Remove the background from any image with one click. Our AI handles the heavy lifting — you just upload and download."
      features={[
        {
                "title": "One-Click Removal",
                "desc": "No complex settings or sliders. Upload your image and our AI does everything automatically."
        },
        {
                "title": "Smart Subject Detection",
                "desc": "AI automatically identifies the main subject in your image — people, products, animals, or objects."
        },
        {
                "title": "Before & After Preview",
                "desc": "Use our interactive slider to compare the original and processed images side by side."
        },
        {
                "title": "Instant Download",
                "desc": "Download your background-free image as a high-quality PNG with one click."
        }
]}
      faqs={[
        {
                "q": "What types of images can I remove backgrounds from?",
                "a": "You can remove backgrounds from virtually any image — portraits, product photos, pet photos, logos, graphics, and more."
        },
        {
                "q": "What if the AI doesn't detect my subject correctly?",
                "a": "Our AI works best with images that have a clear subject. Try using a higher quality image or one with better contrast between subject and background."
        },
        {
                "q": "Can I edit the result after removal?",
                "a": "You can download the transparent PNG and further edit it in any image editor like Photoshop, Canva, or GIMP."
        }
]}
    />
  );
}
