import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Passport Photo Background Remover — White BG Free | AI BG Eraser",
  description: "Passport photo background remover free. Create white background passport photos online. Meets US, UK, EU photo requirements.",
  alternates: { canonical: "/passport-photo-background-remover" },
};

export default function Page() {
  return (
    <LandingPage
      title="Passport Photo Background Remover"
      subtitle="Create Passport Photos with White Background"
      description="Remove backgrounds from passport photos and replace with white. Meet requirements for US, UK, EU, and other passport photos."
      features={[
        {
                "title": "White Background",
                "desc": "Remove any background and get a clean white background suitable for passport photos."
        },
        {
                "title": "Meets Requirements",
                "desc": "Create photos that meet passport photo requirements for most countries."
        },
        {
                "title": "Clean Edges",
                "desc": "Precise AI cutout ensures clean edges around your face and shoulders."
        },
        {
                "title": "Save Money",
                "desc": "Skip expensive passport photo services. Do it yourself for free."
        }
]}
      faqs={[
        {
                "q": "Does this meet passport photo requirements?",
                "a": "Our tool removes the background, which you can then place on white. For official passport photos, ensure proper dimensions, face positioning, and lighting."
        },
        {
                "q": "Can I use this for visa photos too?",
                "a": "Yes! The background removal works for any ID photo — passports, visas, driver's licenses, student IDs, and more."
        },
        {
                "q": "How do I add a white background after removal?",
                "a": "Download the transparent PNG and place it on a white canvas in any photo editor, or simply view the transparent PNG on a white background before downloading."
        }
]}
    />
  );
}
