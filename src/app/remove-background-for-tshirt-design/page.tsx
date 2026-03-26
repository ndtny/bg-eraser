import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background for T-Shirt Design — Print Ready | AI BG Eraser",
  description: "Remove backgrounds from designs for t-shirt printing. Get transparent PNG ready for DTG, screen printing, and POD services.",
  keywords: ["remove background tshirt design","transparent png for tshirt","background remover for printing","tshirt design transparent background"],
  alternates: { canonical: "/remove-background-for-tshirt-design" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background for T-Shirt Design"
      subtitle="Remove backgrounds from designs for t-shirt printing. Get transparent PNG ready for DTG, screen printing, and POD services."
      description="Creating custom t-shirts? You need transparent PNG files for print-on-demand services like Printful, Teespring, and Merch by Amazon. AI BG Eraser removes backgrounds from your designs instantly, giving you print-ready transparent PNGs."
      features={[
        {
                "title": "AI-Powered",
                "desc": "Uses BRIA RMBG-2.0 AI model for precise background detection and removal."
        },
        {
                "title": "Instant Results",
                "desc": "Get your transparent PNG in seconds, not minutes."
        },
        {
                "title": "Free to Use",
                "desc": "3 free removals per day. No signup required."
        },
        {
                "title": "High Quality",
                "desc": "Clean edges, no artifacts. Production-ready output."
        }
]}
      faqs={[
        {
                "q": "Is the output quality good enough for printing?",
                "a": "Yes. Output is high-resolution PNG with clean edges, suitable for DTG printing and screen printing."
        },
        {
                "q": "Does it work with hand-drawn designs?",
                "a": "Yes. Upload a photo of your sketch or drawing and get a clean transparent version."
        }
]}
    />
  );
}
