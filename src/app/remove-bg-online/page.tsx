import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Remove BG Online Free — Instant Background Eraser | AI BG Eraser",
  description: "Remove bg online free and fast. No software needed, works in browser. AI background removal tool. Upload and download in seconds.",
  alternates: { canonical: "/remove-bg-online" },
};

export default function Page() {
  return (
    <LandingPage
      title="Remove BG Online"
      subtitle="Fastest Online Background Removal Tool"
      description="Remove backgrounds online in seconds. No software to install, works in your browser on any device. Upload, process, download."
      features={[
        {
                "title": "100% Online",
                "desc": "No software to download or install. Works entirely in your browser on desktop, tablet, or mobile."
        },
        {
                "title": "Lightning Fast",
                "desc": "Most images are processed in under 10 seconds. No waiting in queues."
        },
        {
                "title": "Any Device",
                "desc": "Works on Windows, Mac, Linux, iOS, and Android. Any modern browser is all you need."
        },
        {
                "title": "Secure & Private",
                "desc": "Your images are processed and never stored. We respect your privacy."
        }
]}
      faqs={[
        {
                "q": "Do I need to install anything?",
                "a": "No. AI BG Eraser works entirely in your web browser. Just visit the website, upload your image, and download the result."
        },
        {
                "q": "Does it work on mobile?",
                "a": "Yes! Our tool is fully responsive and works perfectly on iPhone, Android, iPad, and other mobile devices."
        },
        {
                "q": "How fast is the processing?",
                "a": "Most images are processed in 5-10 seconds, depending on image size and complexity."
        }
]}
    />
  );
}
