import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "AI Background Remover — Best Free AI Tool 2026 | AI BG Eraser",
  description: "Best AI background remover 2026. Remove backgrounds from photos instantly with advanced AI. Free, fast, no signup. Try now.",
  alternates: { canonical: "/ai-background-remover" },
};

export default function Page() {
  return (
    <LandingPage
      title="AI Background Remover"
      subtitle="State-of-the-Art AI for Perfect Background Removal"
      description="Use the latest AI technology to remove backgrounds from any image. Our RMBG-2.0 model delivers professional results in seconds."
      features={[
        {
                "title": "Latest AI Model",
                "desc": "Powered by RMBG-2.0, one of the most advanced background removal AI models available today."
        },
        {
                "title": "Handles Complex Scenes",
                "desc": "Our AI can process images with multiple subjects, complex backgrounds, and challenging lighting conditions."
        },
        {
                "title": "Edge Intelligence",
                "desc": "Smart edge detection preserves fine details like hair, fur, feathers, and semi-transparent materials."
        },
        {
                "title": "Continuous Improvement",
                "desc": "Our AI model is regularly updated to deliver better results with each improvement."
        }
]}
      faqs={[
        {
                "q": "What AI model do you use?",
                "a": "We use RMBG-2.0, a state-of-the-art AI model specifically designed for background removal. It's trained on millions of images for high accuracy."
        },
        {
                "q": "How accurate is the AI?",
                "a": "Our AI achieves over 95% accuracy on standard benchmarks. It handles most images perfectly, including complex scenes with hair, fur, and transparent objects."
        },
        {
                "q": "Is AI background removal better than manual editing?",
                "a": "For most use cases, yes. AI provides instant results that would take 10-30 minutes to achieve manually in Photoshop, with comparable quality."
        }
]}
    />
  );
}
