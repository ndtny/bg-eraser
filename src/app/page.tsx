"use client";

import { useState } from "react";
import ImageUploader from "@/components/ImageUploader";
import ImagePreview from "@/components/ImagePreview";
import { useI18n } from "@/i18n/context";
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
  const { t } = useI18n();
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
      <section className="max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-12 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-[var(--primary)] rounded-full text-sm font-medium mb-6 border border-indigo-100">
          <Sparkles className="w-4 h-4" />
          AI-Powered · 3 Free Uses Daily · No Signup
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          {t("heroTitle")}
          <br />
          <span className="bg-gradient-to-r from-[var(--primary)] to-purple-600 bg-clip-text text-transparent">
            {t("heroTitleAccent")}
          </span>
        </h1>
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("heroSubtitle")}
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
          ) : (
            <ImageUploader
              onImageProcessed={handleImageProcessed}
              onError={handleError}
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
            { step: "1", title: "Upload", desc: "Upload any image — JPG, PNG, or WebP. Drag & drop or click to browse.", color: "from-blue-500 to-indigo-500" },
            { step: "2", title: "AI Processes", desc: "Our AI model analyzes your image and removes the background in seconds.", color: "from-indigo-500 to-purple-500" },
            { step: "3", title: "Download", desc: "Download your image with a transparent background as a high-quality PNG.", color: "from-purple-500 to-pink-500" },
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
            {t("featuresTitle")}
          </h2>
          <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
            {t("featuresSubtitle")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 stagger">
            {[
              { icon: <Zap className="w-5 h-5" />, title: t("featureSpeed"), desc: t("featureSpeedDesc"), gradient: "from-yellow-400 to-orange-500" },
              { icon: <Shield className="w-5 h-5" />, title: t("featureFree"), desc: t("featureFreeDesc"), gradient: "from-green-400 to-emerald-500" },
              { icon: <Sparkles className="w-5 h-5" />, title: t("featureAI"), desc: t("featureAIDesc"), gradient: "from-blue-400 to-indigo-500" },
              { icon: <ImageIcon className="w-5 h-5" />, title: "Any Image Type", desc: "Works with photos, product images, portraits, logos, graphics, and more.", gradient: "from-pink-400 to-rose-500" },
              { icon: <MonitorSmartphone className="w-5 h-5" />, title: "Works Everywhere", desc: "Use on desktop, tablet, or mobile. No software installation needed.", gradient: "from-purple-400 to-violet-500" },
              { icon: <Download className="w-5 h-5" />, title: t("featureQuality"), desc: t("featureQualityDesc"), gradient: "from-cyan-400 to-blue-500" },
            ].map((feature) => (
              <div key={feature.title} className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)]/30 hover:shadow-lg transition-all group">
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
          {t("useCasesTitle")}
        </h2>
        <p className="text-[var(--muted)] text-center mb-12 max-w-2xl mx-auto">
          Whether you&apos;re an e-commerce seller, designer, or content creator — AI BG Eraser has you covered.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger">
          {[
            { title: t("ecommerce"), desc: t("ecommerceDesc"), emoji: "🛒" },
            { title: t("socialMedia"), desc: t("socialMediaDesc"), emoji: "📱" },
            { title: t("design"), desc: t("designDesc"), emoji: "🎨" },
            { title: "Marketing", desc: "Professional images for ads, banners, and materials.", emoji: "📊" },
          ].map((useCase) => (
            <div key={useCase.title} className="p-5 sm:p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--primary)] hover:shadow-md transition-all group">
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform inline-block">{useCase.emoji}</div>
              <h3 className="font-semibold mb-1.5 text-sm sm:text-base">{useCase.title}</h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
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
            {t("faqTitle")}
          </h2>
          <div className="space-y-3">
            {[
              { q: t("faq1Q"), a: t("faq1A") },
              { q: t("faq2Q"), a: t("faq2A") },
              { q: t("faq3Q"), a: t("faq3A") },
              { q: t("faq4Q"), a: t("faq4A") },
              {
                q: "Can I use AI BG Eraser for commercial purposes?",
                a: "Absolutely! You can use the processed images for any purpose, including commercial use.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-[var(--background)] border border-[var(--border)] rounded-xl p-5 group hover:border-[var(--primary)]/30 transition-colors">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-[var(--muted)] group-open:rotate-180 transition-transform shrink-0">▼</span>
                </summary>
                <p className="mt-3 text-[var(--muted)] text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
        <p className="text-[var(--muted)] mb-8 max-w-lg mx-auto">{t("ctaSubtitle")}</p>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all text-lg pulse-glow"
        >
          <Sparkles className="w-5 h-5" />
          {t("ctaButton")}
          <ArrowRight className="w-5 h-5" />
        </a>
      </section>
    </div>
  );
}
