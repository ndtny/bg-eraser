"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";


interface LandingPageProps {
  title: string;
  subtitle: string;
  description: string;
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export default function LandingPage({
  title,
  subtitle,
  description,
  features,
  faqs,
}: LandingPageProps) {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-xl text-[var(--primary)] font-medium mb-4">
          {subtitle}
        </p>
        <p className="text-[var(--muted)] max-w-2xl mx-auto mb-10">
          {description}
        </p>

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
              onReset={() => {
                setOriginalImage(null);
                setProcessedImage(null);
                setError(null);
              }}
            />
          ) : (
            <ImageUploader
              onImageProcessed={(orig, proc) => {
                setOriginalImage(orig);
                setProcessedImage(proc);
                setError(null);
              }}
              onError={setError}
            />
          )}
        </div>
      </section>

      {/* Features for this use case */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-[var(--border)]"
            >
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--secondary)] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
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
    </div>
  );
}
