"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import ImageUploader from "@/components/ImageUploader";
import ImagePreview from "@/components/ImagePreview";
import BatchUploader from "@/components/BatchUploader";
import {
  Zap,
  Shield,
  Sparkles,
  Image as ImageIcon,
  MonitorSmartphone,
  Download,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const { data: session } = useSession();
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [mode, setMode] = useState<"single" | "batch">("single");

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/usage?email=${encodeURIComponent(session.user.email)}`)
        .then((r) => r.json())
        .then((d) => setIsPro(d.isPro || false))
        .catch(() => {});
    }
  }, [session]);

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
      <section className="max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-12 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[var(--primary)] rounded-full text-sm font-medium mb-6 border border-indigo-100">
          <Sparkles className="w-4 h-4" />
          AI-Powered · 3 Free Uses Daily · No Signup
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Remove Image Background
          <br />
          <span className="bg-gradient-to-r from-[var(--primary)] to-purple-600 bg-clip-text text-transparent">
            in Seconds
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          Upload your image and our AI will instantly remove the background.
          Perfect for product photos, portraits, logos, and more. No signup required.
        </p>

        {/* Upload / Preview Area */}
        <div className="max-w-2xl mx-auto">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-start gap-2">
              <span className="shrink-0">⚠️</span>
              {error}
            </div>
          )}

          {processedImage && originalImage ? (
            <ImagePreview
              originalImage={originalImage}
              processedImage={processedImage}
              onReset={handleReset}
            />
          ) : mode === "batch" ? (
            <BatchUploader />
          ) : (
            <ImageUploader
              onImageProcessed={handleImageProcessed}
              onError={handleError}
              onBatchClick={isPro ? () => setMode("batch") : undefined}
              showBatch={true}
            />
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-green-500" /> 100% Private
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-yellow-500" /> Under 10s
          </span>
          <span className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-blue-500" /> High Quality PNG
          </span>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 stagger">
          {[
            {
              step: "1",
              title: "Upload",
              desc: "Upload any image — JPG, PNG, or WebP. Drag & drop or click to browse.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              step: "2",
              title: "AI Processes",
              desc: "Our AI model analyzes your image and removes the background in seconds.",
              color: "from-indigo-500 to-purple-500",
            },
            {
              step: "3",
              title: "Download",
              desc: "Download your image with a transparent background as a high-quality PNG.",
              color: "from-purple-500 to-pink-500",
            },
          ].map((item) => (
            <div key={item.step} className="text-center group">
              <div className={`w-14 h-14 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--secondary)] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Why Choose AI BG Eraser?
          </h2>
          <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
            The fastest and easiest way to remove backgrounds from your images online.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Lightning Fast",
                desc: "Remove backgrounds in under 10 seconds. Our AI processes images instantly.",
                gradient: "from-yellow-400 to-orange-500",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Free to Start",
                desc: "3 free background removals every day. No signup, no credit card required.",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "AI Precision",
                desc: "State-of-the-art AI handles hair, fur, and complex edges perfectly.",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                icon: <ImageIcon className="w-5 h-5" />,
                title: "Any Image Type",
                desc: "Works with photos, product images, portraits, logos, graphics, and more.",
                gradient: "from-pink-400 to-rose-500",
              },
              {
                icon: <MonitorSmartphone className="w-5 h-5" />,
                title: "Works Everywhere",
                desc: "Use on desktop, tablet, or mobile. No software installation needed.",
                gradient: "from-purple-400 to-violet-500",
              },
              {
                icon: <Download className="w-5 h-5" />,
                title: "High Quality PNG",
                desc: "Download your result as a high-quality PNG with transparent background.",
                gradient: "from-cyan-400 to-blue-500",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-lg transition-all group"
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${feature.gradient} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm`}>
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
          Perfect For Every Use Case
        </h2>
        <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
          Whether you&apos;re an e-commerce seller, designer, or content creator — AI BG Eraser has you covered.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger">
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
              className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all group"
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {useCase.emoji}
              </div>
              <h3 className="font-semibold mb-1.5 text-sm sm:text-base">{useCase.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison with competitors */}
      <section className="bg-[var(--secondary)] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3">
            Why Not Just Use remove.bg?
          </h2>
          <p className="text-[var(--muted)] text-center mb-10 max-w-2xl mx-auto">
            We offer the same AI quality at a fraction of the price — or free.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="text-left py-3 px-4 font-semibold">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-[var(--primary)]">AI BG Eraser</th>
                  <th className="text-center py-3 px-4 font-semibold text-[var(--muted)]">remove.bg</th>
                </tr>
              </thead>
              <tbody className="text-[var(--muted)]">
                {[
                  ["Free uses", "3/day", "1/month"],
                  ["Pro price", "$9.90/mo", "$29/mo"],
                  ["AI Quality", "⭐⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"],
                  ["Signup required", "No", "Yes"],
                  ["Speed", "< 10s", "< 10s"],
                ].map(([feature, us, them]) => (
                  <tr key={feature} className="border-b border-[var(--border)]">
                    <td className="py-3 px-4 font-medium text-[var(--foreground)]">{feature}</td>
                    <td className="py-3 px-4 text-center font-medium text-[var(--primary)]">{us}</td>
                    <td className="py-3 px-4 text-center">{them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "Is AI BG Eraser free?",
                a: "You get 3 free background removals every day — no signup needed. For unlimited access, HD output, and batch processing, check out our Pro plan at $9.90/month.",
              },
              {
                q: "What image formats are supported?",
                a: "AI BG Eraser supports JPG, JPEG, PNG, and WebP formats. The maximum file size is 20MB. Results are always downloaded as PNG with transparent background.",
              },
              {
                q: "How does the AI background removal work?",
                a: "We use a state-of-the-art AI model (RMBG-2.0) trained on millions of images. It accurately detects and separates the foreground subject from the background, even handling complex edges like hair and fur.",
              },
              {
                q: "Are my images stored on your servers?",
                a: "No. Your images are processed in real-time and are never stored. We respect your privacy — once you download your result, everything is deleted.",
              },
              {
                q: "Can I use AI BG Eraser for commercial purposes?",
                a: "Absolutely! You can use the processed images for any purpose, including commercial use. There are no restrictions on how you use the results.",
              },
              {
                q: "How is AI BG Eraser different from remove.bg?",
                a: "AI BG Eraser offers 3 free uses per day (vs 1/month for remove.bg), our Pro plan is $9.90/month (vs $29/month), and no signup is required. We use the same state-of-the-art AI technology for equally high-quality results.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 group hover:border-[var(--primary)]/30 transition-colors"
              >
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-[var(--muted)] group-open:rotate-180 transition-transform shrink-0">
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
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Ready to Remove Backgrounds?
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">
          3 free uses every day. Upgrade to Pro for unlimited background removal, HD output, and more.
        </p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all text-lg pulse-glow"
        >
          <Sparkles className="w-5 h-5" />
          Start Removing Backgrounds — It&apos;s Free
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </div>
  );
}
