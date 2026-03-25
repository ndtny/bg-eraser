import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image on Mac Free | AI BG Eraser",
  description: "Remove background from image on Mac free. Better than Preview's Instant Alpha. AI-powered one-click removal in browser.",
  alternates: { canonical: "/remove-background-from-image-on-mac" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background on Mac"
      subtitle="Mac Background Removal — No Preview Hassle"
      description="Remove image backgrounds on your Mac without struggling with Preview's limited tools. Our AI does it in one click."
      features={[
        {
                "title": "Better Than Preview",
                "desc": "Mac's Preview app has basic Instant Alpha, but our AI handles complex scenes far better."
        },
        {
                "title": "No Software Needed",
                "desc": "Works in Safari or Chrome. No need to install additional Mac apps."
        },
        {
                "title": "Retina Quality",
                "desc": "Full resolution processing that looks great on Retina displays."
        },
        {
                "title": "Drag & Drop",
                "desc": "Drag images from Finder directly into our upload area."
        }
]}
      faqs={[
        {
                "q": "Is this better than Mac Preview's Instant Alpha?",
                "a": "Much better. Preview's Instant Alpha requires manual clicking and struggles with complex backgrounds. Our AI does it automatically and perfectly."
        },
        {
                "q": "Does it work with Photos app images?",
                "a": "Yes! Export or drag photos from the Photos app into our tool."
        },
        {
                "q": "What about macOS's built-in background removal?",
                "a": "macOS Ventura+ has basic removal, but our AI is more accurate, especially with hair and complex edges."
        }
]}
    />
  );
}
