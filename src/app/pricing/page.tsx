import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import PricingButtons from "@/components/PricingButtons";

export const metadata: Metadata = {
  title: "Pricing - BG Eraser | AI Background Remover Plans",
  description:
    "Choose the right plan for your needs. Free plan with 3 daily uses or Pro plan with unlimited background removal, HD downloads, and more.",
  alternates: { canonical: "/pricing" },
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out BG Eraser",
    features: [
      { text: "3 background removals per day", included: true },
      { text: "Standard resolution output", included: true },
      { text: "PNG download", included: true },
      { text: "No signup required", included: true },
      { text: "Unlimited removals", included: false },
      { text: "HD high-resolution output", included: false },
      { text: "AI background replacement", included: false },
      { text: "Batch processing", included: false },
      { text: "API access", included: false },
    ],
    cta: "Current Plan",
    ctaAction: "free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9.9",
    period: "/month",
    description: "For professionals and businesses",
    badge: "Most Popular",
    features: [
      { text: "Unlimited background removals", included: true },
      { text: "HD high-resolution output", included: true },
      { text: "PNG download (no watermark)", included: true },
      { text: "AI background replacement", included: true },
      { text: "Batch processing (up to 20)", included: true },
      { text: "Priority processing speed", included: true },
      { text: "Email support", included: true },
      { text: "API access", included: false },
    ],
    cta: "Get Pro",
    ctaAction: "pro",
    highlighted: true,
  },
  {
    name: "API",
    price: "$29.9",
    period: "/month",
    description: "For developers and enterprises",
    features: [
      { text: "Everything in Pro", included: true },
      { text: "RESTful API access", included: true },
      { text: "1,000 API calls/month", included: true },
      { text: "Webhook notifications", included: true },
      { text: "Batch processing (unlimited)", included: true },
      { text: "Custom integration support", included: true },
      { text: "99.9% uptime SLA", included: true },
      { text: "Priority email support", included: true },
      { text: "Additional calls: $0.05/image", included: true },
    ],
    cta: "Contact Us",
    ctaAction: "api",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Start free with 3 daily removals. Upgrade when you need more. No
            hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "border-2 border-[var(--primary)] shadow-lg shadow-indigo-100"
                  : "border border-[var(--border)]"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-1">{plan.name}</h2>
                <p className="text-sm text-[var(--muted)]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-[var(--muted)] ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-[var(--foreground)]"
                          : "text-gray-400"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <PricingButtons
                action={plan.ctaAction}
                label={plan.cta}
                highlighted={plan.highlighted}
              />
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">Pricing FAQ</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I try BG Eraser for free?",
                a: "Yes! You get 3 free background removals every day, no signup required. Free uses reset at midnight UTC.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, AmEx), PayPal, and Apple Pay through our payment partner Lemon Squeezy. All payments are secure and encrypted.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Absolutely. You can cancel your subscription at any time from your customer portal. You'll continue to have access until the end of your billing period.",
              },
              {
                q: "What happens if I exceed my API calls?",
                a: "Additional API calls are billed at $0.05 per image. You'll never be cut off — we just add the overage to your next invoice.",
              },
              {
                q: "Do you offer annual billing?",
                a: "Coming soon! Annual plans will offer a 20% discount compared to monthly billing.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 7-day money-back guarantee. If you're not satisfied, contact us within 7 days of purchase for a full refund.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="bg-[var(--secondary)] border border-[var(--border)] rounded-xl p-5 group"
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
