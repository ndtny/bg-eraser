"use client";

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
  const handleClick = () => {
    if (action === "free") {
      window.location.href = "/";
      return;
    }
    // Pro and API are not available yet
  };

  if (action === "free") {
    return (
      <button
        onClick={handleClick}
        className="block w-full py-3 rounded-xl text-center font-medium transition-smooth border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]"
      >
        {label}
      </button>
    );
  }

  // Pro and API — show Coming Soon
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
