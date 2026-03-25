import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Image AI — Free & Instant | AI BG Eraser",
  description: "Remove background from image using AI technology. Free instant background removal with one click. No Photoshop needed. Try now.",
  alternates: { canonical: "/remove-background-from-image-ai" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Image with AI"
      subtitle="Let AI Do the Work — One Click, Perfect Results"
      description="Use cutting-edge AI to remove image backgrounds automatically. No Photoshop skills needed. Professional results in seconds."
      features={[
        {
                "title": "No Skills Required",
                "desc": "Forget Photoshop or complex editing tools. Our AI does all the work — just upload and download."
        },
        {
                "title": "Photoshop-Quality Results",
                "desc": "Get results comparable to hours of manual Photoshop editing in just seconds."
        },
        {
                "title": "Saves Hours of Work",
                "desc": "What takes 15-30 minutes in Photoshop, our AI does in under 10 seconds."
        },
        {
                "title": "Anyone Can Use It",
                "desc": "Whether you're a pro designer or complete beginner, our tool delivers professional results."
        }
]}
      faqs={[
        {
                "q": "Is AI as good as manual Photoshop editing?",
                "a": "For background removal, yes. Our AI produces results comparable to professional Photoshop work for the vast majority of images."
        },
        {
                "q": "What makes your AI different?",
                "a": "We use RMBG-2.0, one of the latest AI models specifically designed for background removal. It's trained on diverse datasets for high accuracy across all image types."
        },
        {
                "q": "Can AI handle transparent or semi-transparent objects?",
                "a": "Yes, our AI can detect and preserve semi-transparent elements like glass, smoke, and veils with reasonable accuracy."
        }
]}
    />
  );
}
