import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Welcome to Pro! - BG Eraser",
  robots: { index: false },
};

export default function ProSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold mb-4">
        Welcome to BG Eraser Pro! 🎉
      </h1>

      <p className="text-lg text-[var(--muted)] mb-8">
        Your subscription is now active. Enjoy unlimited background removals,
        HD downloads, and all Pro features.
      </p>

      <div className="bg-[var(--secondary)] border border-[var(--border)] rounded-xl p-6 mb-8 text-left">
        <h2 className="font-semibold mb-3">What you now have access to:</h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Unlimited background removals
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            HD high-resolution output
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            No watermarks
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            AI background replacement
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Batch processing (up to 50 images)
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Priority processing speed
          </li>
        </ul>
      </div>

      <a
        href="/"
        className="inline-block px-8 py-3 bg-[var(--primary)] text-white rounded-xl font-medium hover:bg-[var(--primary-hover)] transition-smooth"
      >
        Start Removing Backgrounds →
      </a>

      <p className="text-xs text-[var(--muted)] mt-6">
        A confirmation email has been sent to your inbox.
        You can manage your subscription from the customer portal link in the email.
      </p>
    </div>
  );
}
