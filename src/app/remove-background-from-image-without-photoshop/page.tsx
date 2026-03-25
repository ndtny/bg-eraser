import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background Without Photoshop — Free AI Tool | AI BG Eraser",
  description: "Remove background without Photoshop free. No software needed. AI background removal in your browser. Instant results.",
  alternates: { canonical: "/remove-background-from-image-without-photoshop" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background Without Photoshop"
      subtitle="No Photoshop? No Problem. AI Does It Better."
      description="Remove image backgrounds without Photoshop or any software. Our AI-powered web tool handles everything in your browser."
      features={[
        {
                "title": "Zero Software",
                "desc": "No downloads, no installations, no subscriptions. Everything works in your browser."
        },
        {
                "title": "Faster Than Manual",
                "desc": "What takes 15-30 minutes in Photoshop takes under 10 seconds with our AI."
        },
        {
                "title": "Beginner Friendly",
                "desc": "Anyone can use it. No design skills or experience required."
        },
        {
                "title": "Professional Output",
                "desc": "Clean, precise cutouts that look like they were done by a professional."
        }
]}
      faqs={[
        {
                "q": "I don't know how to use Photoshop. Can I still remove backgrounds?",
                "a": "Absolutely! Our tool requires zero design skills. Just upload your image and click download."
        },
        {
                "q": "Is this free forever?",
                "a": "Yes, 3 free uses per day forever. No trial period, no expiration."
        },
        {
                "q": "What about GIMP or other free editors?",
                "a": "GIMP is powerful but complex. Our tool is purpose-built for background removal and does it faster and easier."
        }
]}
    />
  );
}
