import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove Background Without Sign Up — No Account Needed | AI BG Eraser",
  description: "Remove image backgrounds without creating an account. No sign up, no email required. 3 free uses daily, instant results.",
  keywords: ["remove background without sign up","no account background remover","remove bg no registration","free background remover no signup"],
  alternates: { canonical: "/remove-background-from-image-without-sign-up" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove Background Without Sign Up"
      subtitle="Remove image backgrounds without creating an account. No sign up, no email required. 3 free uses daily, instant results."
      description="Skip the registration forms. AI BG Eraser lets you remove backgrounds from images without creating an account, without entering your email, and without any commitment. Just upload and go. Get 3 free removals every day."
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
                "q": "Do I need to create an account?",
                "a": "No. You get 3 free background removals per day without any account or sign up."
        },
        {
                "q": "Why would I create an account then?",
                "a": "Pro users get unlimited removals. Sign in with Google for Pro access — no forms to fill out."
        }
]}
    />
  );
}
