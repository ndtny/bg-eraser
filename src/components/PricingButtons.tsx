"use client";

import { useSession, signIn } from "next-auth/react";
import { useState, useEffect } from "react";

interface PricingButtonsProps {
  action: string;
  label: string;
  highlighted: boolean;
}

export default function PricingButtons({
  action,
  label,
  highlighted,
}: PricingButtonsProps) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    if (session?.user?.email) {
      fetch(`/api/usage?email=${encodeURIComponent(session.user.email)}`)
        .then((r) => r.json())
        .then((d) => setIsPro(d.isPro || false))
        .catch(() => {});
    }
  }, [session]);

  const handleCheckout = async () => {
    if (!session?.user?.email) {
      signIn("google");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session.user.email }),
      });

      const data = await res.json();

      if (data.approvalUrl) {
        window.location.href = data.approvalUrl;
      } else {
        alert("Failed to create checkout. Please try again.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (action === "free") {
    return (
      <button
        onClick={() => (window.location.href = "/")}
        className="block w-full py-3 rounded-xl text-center font-medium transition-smooth border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
      >
        {label}
      </button>
    );
  }

  if (action === "api") {
    return (
      <button
        disabled
        className="block w-full py-3 rounded-xl text-center font-medium cursor-not-allowed border border-[var(--border)] text-[var(--muted)]"
      >
        Coming Soon
      </button>
    );
  }

  // Pro plan — already subscribed
  if (isPro && action === "pro") {
    return (
      <button
        disabled
        className={`block w-full py-3 rounded-xl text-center font-medium ${
          highlighted
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-600"
        }`}
      >
        ✓ Current Plan
      </button>
    );
  }

  // Pro plan — Coming Soon (payment testing in progress)
  const baseStyle = highlighted
    ? "bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/30"
    : "border border-[var(--border)] text-[var(--muted)]";

  return (
    <button
      disabled
      className={`block w-full py-3 rounded-xl text-center font-medium cursor-not-allowed ${baseStyle}`}
    >
      Coming Soon
    </button>
  );
}
