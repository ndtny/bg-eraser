import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - AI BG Eraser",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      <h1>Terms of Service</h1>
      <p className="text-[var(--muted)]">Last updated: March 25, 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By using AI BG Eraser (&quot;the Service&quot;), you agree to these Terms of
        Service. If you do not agree, please do not use the Service.
      </p>

      <h2>2. Service Description</h2>
      <p>
        AI BG Eraser provides AI-powered background removal from images. The
        Service is available in free and paid tiers.
      </p>

      <h2>3. Free Tier</h2>
      <ul>
        <li>3 background removals per day</li>
        <li>Standard resolution output</li>
        <li>No signup required</li>
        <li>Usage resets daily at midnight UTC</li>
      </ul>

      <h2>4. Pro Subscription</h2>
      <ul>
        <li>Unlimited background removals</li>
        <li>HD high-resolution output</li>
        <li>Priority processing</li>
        <li>Billed monthly at $9.90/month</li>
        <li>Cancel anytime from your customer portal</li>
      </ul>

      <h2>5. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any illegal purpose</li>
        <li>Upload content that violates others&apos; rights</li>
        <li>Attempt to circumvent usage limits</li>
        <li>Use automated tools to abuse the Service</li>
        <li>Reverse engineer or copy the Service</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <p>
        You retain all rights to your uploaded images and processed results. We
        claim no ownership over your content.
      </p>

      <h2>7. Payment & Refunds</h2>
      <p>
        Payments are processed by Lemon Squeezy. We offer a 7-day money-back
        guarantee for Pro subscriptions. Contact us within 7 days of purchase
        for a full refund.
      </p>

      <h2>8. Disclaimer</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranties of any kind. We do
        not guarantee that the AI will produce perfect results for every image.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, AI BG Eraser shall not be liable
        for any indirect, incidental, or consequential damages arising from your
        use of the Service.
      </p>

      <h2>10. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the
        Service after changes constitutes acceptance of the new terms.
      </p>

      <h2>11. Contact</h2>
      <p>
        For questions about these terms, email us at{" "}
        <a href="mailto:hello@aibgeraser.com">hello@aibgeraser.com</a>.
      </p>
    </div>
  );
}
