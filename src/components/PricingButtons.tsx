"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

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

  // Pro plan — PayPal checkout
  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`block w-full py-3 rounded-xl text-center font-medium transition-smooth ${
        highlighted
          ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
          : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
      } ${loading ? "opacity-70 cursor-wait" : ""}`}
    >
      {loading ? "Redirecting to PayPal..." : session?.user?.email ? label : "Sign In to Subscribe"}
    </button>
  );
}
