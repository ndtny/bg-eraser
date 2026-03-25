import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background from Signature Free Online | AI BG Eraser",
  description: "Remove background from signature image free. Create transparent digital signatures for documents and emails. AI-powered tool.",
  alternates: { canonical: "/remove-background-from-signature" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background from Signature"
      subtitle="Create Transparent Digital Signatures"
      description="Remove the background from scanned signatures. Create transparent signature images for documents, emails, and digital signing."
      features={[
        {
                "title": "Digital Signatures",
                "desc": "Convert scanned signatures to transparent PNGs for digital document signing."
        },
        {
                "title": "Email Signatures",
                "desc": "Create clean signature images for your email signature block."
        },
        {
                "title": "Document Ready",
                "desc": "Place your transparent signature on any document, contract, or form."
        },
        {
                "title": "Clean Extraction",
                "desc": "AI removes paper background while preserving ink strokes perfectly."
        }
]}
      faqs={[
        {
                "q": "How do I digitize my handwritten signature?",
                "a": "Sign on white paper, take a clear photo or scan it, then upload here. Our AI removes the paper background, leaving just your signature."
        },
        {
                "q": "Can I use this signature on official documents?",
                "a": "The transparent signature image can be placed on digital documents. Check your local laws regarding digital signature validity."
        },
        {
                "q": "Will it preserve the ink color?",
                "a": "Yes, our AI preserves the original ink color and stroke details of your signature."
        }
]}
    />
  );
}
