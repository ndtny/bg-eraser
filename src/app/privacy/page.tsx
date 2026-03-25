import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - AI BG Eraser",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      <h1>Privacy Policy</h1>
      <p className="text-[var(--muted)]">Last updated: March 25, 2026</p>

      <h2>1. Information We Collect</h2>
      <p>
        <strong>Images:</strong> When you upload an image for background removal,
        we process it through our AI service. We do <strong>not store</strong> your
        uploaded images or processed results on our servers. Images are processed
        in real-time and discarded immediately after processing.
      </p>
      <p>
        <strong>Account Information:</strong> If you sign in with Google, we
        receive your name, email address, and profile picture from Google. We use
        this solely to identify your account and manage your subscription.
      </p>
      <p>
        <strong>Usage Data:</strong> We collect anonymous usage data including IP
        address (truncated), browser type, and pages visited to improve our
        service and enforce fair usage limits.
      </p>
      <p>
        <strong>Payment Information:</strong> Payments are processed by Lemon
        Squeezy. We never see or store your credit card details.
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>Process your background removal requests</li>
        <li>Manage your account and subscription</li>
        <li>Enforce daily usage limits for free users</li>
        <li>Improve our service</li>
        <li>Send transactional emails (receipts, subscription updates)</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>
        We do not sell your data. We share data only with:
      </p>
      <ul>
        <li><strong>AI Processing:</strong> Images are sent to our AI provider for background removal</li>
        <li><strong>Payment Processing:</strong> Lemon Squeezy processes payments</li>
        <li><strong>Authentication:</strong> Google OAuth for sign-in</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        Images are not retained after processing. Account data is retained as
        long as your account is active. You can request account deletion by
        contacting us.
      </p>

      <h2>5. Cookies</h2>
      <p>
        We use essential cookies for authentication and session management. We
        may use analytics cookies (Google Analytics) to understand how our
        service is used.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your personal data.
        Contact us at hello@aibgeraser.com for any privacy-related requests.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy questions, email us at{" "}
        <a href="mailto:hello@aibgeraser.com">hello@aibgeraser.com</a>.
      </p>
    </div>
  );
}
