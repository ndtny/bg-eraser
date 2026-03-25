"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

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
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (action === "free") {
      window.location.href = "/";
      return;
    }

    if (action === "api") {
      window.location.href = "mailto:hello@aibgeraser.com?subject=API Plan Inquiry";
      return;
    }

    if (action === "pro") {
      setLoading(true);
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        });

        const data = await res.json();

        if (data.url) {
          window.location.href = data.url;
        } else {
          alert(data.error || "Failed to create checkout. Please try again.");
        }
      } catch {
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const baseStyle = highlighted
    ? "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)]"
    : "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]";

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`block w-full py-3 rounded-xl text-center font-medium transition-smooth disabled:opacity-70 ${baseStyle}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          Loading...
        </span>
      ) : (
        label
      )}
    </button>
  );
}
