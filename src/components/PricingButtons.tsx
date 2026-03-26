"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

declare global {
  interface Window {
    Paddle?: {
      Checkout: {
        open: (options: Record<string, unknown>) => void;
      };
      Environment: {
        set: (env: string) => void;
      };
      Setup: (options: Record<string, unknown>) => void;
    };
  }
}

const PADDLE_PRICE_ID = "pri_01kmmjpjytkcmrmq9y36d5sq2t";
const PADDLE_CLIENT_TOKEN = "live_49a94598ece6f4c6f3cbb842275";

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

  const initPaddle = (): Promise<void> => {
    return new Promise((resolve) => {
      if (window.Paddle) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
      script.onload = () => {
        window.Paddle?.Setup({
          token: PADDLE_CLIENT_TOKEN,
        });
        resolve();
      };
      document.head.appendChild(script);
    });
  };

  const handleCheckout = async () => {
    if (!session?.user?.email) {
      // Need to sign in first
      signIn("google");
      return;
    }

    setLoading(true);
    try {
      await initPaddle();

      window.Paddle?.Checkout.open({
        items: [{ priceId: PADDLE_PRICE_ID, quantity: 1 }],
        customer: {
          email: session.user.email,
        },
        customData: {
          email: session.user.email,
        },
        settings: {
          successUrl: "https://www.aibgeraser.com/?upgraded=1",
          theme: "light",
        },
      });
    } catch (error) {
      console.error("Checkout error:", error);
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

  // Pro plan — Paddle checkout
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
      {loading ? "Loading..." : session?.user?.email ? label : "Sign In to Subscribe"}
    </button>
  );
}
