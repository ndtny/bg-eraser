import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for Amazon Product Photos Free | AI BG Eraser",
  description: "Remove background for Amazon product photos free. Create white background images that meet Amazon requirements. AI-powered tool.",
  alternates: { canonical: "/remove-background-for-amazon" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for Amazon"
      subtitle="Amazon-Compliant Product Photos in Seconds"
      description="Create Amazon-compliant product photos with pure white backgrounds. Meet Amazon's image requirements instantly with AI."
      features={[
        {
                "title": "Amazon Compliant",
                "desc": "Create product images with pure white backgrounds that meet Amazon's strict image requirements."
        },
        {
                "title": "Main Image Ready",
                "desc": "Amazon requires main product images on white backgrounds. Our tool makes this effortless."
        },
        {
                "title": "Any Product Type",
                "desc": "Works with electronics, clothing, toys, kitchenware, beauty products, and more."
        },
        {
                "title": "Boost Sales",
                "desc": "Clean product photos on white backgrounds increase click-through rates and conversions on Amazon."
        }
]}
      faqs={[
        {
                "q": "Does this meet Amazon's image requirements?",
                "a": "Yes! Amazon requires main product images on pure white backgrounds. Our AI removes backgrounds cleanly for Amazon compliance."
        },
        {
                "q": "What about Amazon's image size requirements?",
                "a": "Our tool maintains your original image resolution. Ensure you upload images at least 1000px on the longest side for Amazon."
        },
        {
                "q": "Can I use this for all my Amazon listings?",
                "a": "Yes! Process each product photo individually. Free users get 3 per day, Pro users get unlimited."
        }
]}
    />
  );
}
