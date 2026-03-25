"use client";

import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import ImagePreview from "@/components/ImagePreview";
import {
  Zap,
  Shield,
  Sparkles,
  Image as ImageIcon,
  MonitorSmartphone,
  Download,
} from "lucide-react";

export default function Home() {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageProcessed = (original: string, processed: string) => {
    setOriginalImage(original);
    setProcessedImage(processed);
    setError(null);
  };

  const handleError = (errorMsg: string) => {
    setError(errorMsg);
  };

  const handleReset = () => {
    setOriginalImage(null);
    setProcessedImage(null);
    setError(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-[var(--primary)] rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          AI-Powered · 3 Free Uses Daily · No Signup
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Remove Image Background
          <br />
          <span className="text-[var(--primary)]">in Seconds</span>
        </h1>
        <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10">
          Upload your image and our AI will instantly remove the background.
          Perfect for product photos, portraits, logos, and more. No signup
          required.
        </p>

        {/* Upload / Preview Area */}
        <div className="max-w-2xl mx-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {processedImage && originalImage ? (
            <ImagePreview
              originalImage={originalImage}
              processedImage={processedImage}
              onReset={handleReset}
            />
          ) : (
            <ImageUploader
              onImageProcessed={handleImageProcessed}
              onError={handleError}
            />
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Upload",
              desc: "Upload any image — JPG, PNG, or WebP. Drag & drop or click to browse.",
            },
            {
              step: "2",
              title: "AI Processes",
              desc: "Our AI model analyzes your image and removes the background in seconds.",
            },
            {
              step: "3",
              title: "Download",
              desc: "Download your image with a transparent background as a PNG file.",
            },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[var(--muted)] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--secondary)] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose BG Eraser?
          </h2>
          <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
            The fastest and easiest way to remove backgrounds from your images
            online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Lightning Fast",
                desc: "Remove backgrounds in under 10 seconds. Our AI processes images instantly.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Free to Start",
                desc: "3 free background removals every day. No signup, no credit card required.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "AI Precision",
                desc: "State-of-the-art AI model handles hair, fur, and complex edges perfectly.",
              },
              {
                icon: <ImageIcon className="w-6 h-6" />,
                title: "Any Image Type",
                desc: "Works with photos, product images, portraits, logos, graphics, and more.",
              },
              {
                icon: <MonitorSmartphone className="w-6 h-6" />,
                title: "Works Everywhere",
                desc: "Use on desktop, tablet, or mobile. No software installation needed.",
              },
              {
                icon: <Download className="w-6 h-6" />,
                title: "High Quality PNG",
                desc: "Download your result as a high-quality PNG with transparent background.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)]"
              >
                <div className="w-10 h-10 bg-indigo-50 text-[var(--primary)] rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--muted)]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">
          Perfect For Every Use Case
        </h2>
        <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
          Whether you&apos;re an e-commerce seller, designer, or content creator
          — BG Eraser has you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "E-Commerce",
              desc: "Clean product photos with white or transparent backgrounds for your online store.",
              emoji: "🛒",
            },
            {
              title: "Social Media",
              desc: "Create eye-catching profile pictures and posts with custom backgrounds.",
              emoji: "📱",
            },
            {
              title: "Design",
              desc: "Extract subjects from photos for use in graphic design and presentations.",
              emoji: "🎨",
            },
            {
              title: "Marketing",
              desc: "Professional-looking images for ads, banners, and marketing materials.",
              emoji: "📊",
            },
          ].map((useCase) => (
            <div
              key={useCase.title}
              className="p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] transition-smooth"
            >
              <div className="text-3xl mb-3">{useCase.emoji}</div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-[var(--muted)]">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--secondary)] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is BG Eraser free?",
                a: "You get 3 free background removals every day — no signup needed. For unlimited access, HD output, and batch processing, check out our Pro plan at $9.9/month.",
              },
              {
                q: "What image formats are supported?",
                a: "BG Eraser supports JPG, JPEG, PNG, and WebP formats. The maximum file size is 20MB. Results are always downloaded as PNG with transparent background.",
              },
              {
                q: "How does the AI background removal work?",
                a: "We use a state-of-the-art AI model (RMBG-2.0) that has been trained on millions of images. It can accurately detect and separate the foreground subject from the background, even handling complex edges like hair and fur.",
              },
              {
                q: "Are my images stored on your servers?",
                a: "No. Your images are processed in real-time and are not permanently stored. Once you download your result, the processed image is deleted from our servers.",
              },
              {
                q: "Can I use BG Eraser for commercial purposes?",
                a: "Absolutely! You can use the processed images for any purpose, including commercial use. There are no restrictions on how you use the results.",
              },
              {
                q: "What makes BG Eraser different from other tools?",
                a: "BG Eraser offers generous free usage (3/day) with no signup. We use the latest AI technology (RMBG-2.0) for the best quality results, and our Pro plan is significantly cheaper than competitors like remove.bg.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 group"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-[var(--muted)] text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Remove Backgrounds?
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          3 free uses every day. Upgrade to Pro for unlimited background
          removal, HD output, and more.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-smooth text-lg"
        >
          <Sparkles className="w-5 h-5" />
          Start Removing Backgrounds — It&apos;s Free
        </a>
      </section>
    </div>
  );
}
