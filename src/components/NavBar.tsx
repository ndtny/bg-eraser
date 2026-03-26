"use client";

import AuthButton from "./AuthButton";
import LocaleSwitcher from "./LocaleSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useI18n } from "@/i18n/context";

export default function NavBar() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
            <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
              <circle cx="18" cy="11" r="4" fill="white"/>
              <path d="M11 28c0-5.5 3.1-10 7-10s7 4.5 7 28" fill="white"/>
              <rect x="4" y="4" width="5" height="5" fill="white" opacity="0.4"/>
              <rect x="14" y="4" width="5" height="5" fill="white" opacity="0.4"/>
              <rect x="9" y="9" width="5" height="5" fill="white" opacity="0.4"/>
              <rect x="4" y="14" width="5" height="5" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight">
            <span className="text-[var(--primary)]">AI</span> BG Eraser
          </span>
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            <a href="/#features" className="hover:text-[var(--foreground)] transition-colors">
              {t("features")}
            </a>
            <a href="/pricing" className="hover:text-[var(--foreground)] transition-colors">
              {t("pricing")}
            </a>
            <a href="/#faq" className="hover:text-[var(--foreground)] transition-colors">
              {t("faq")}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
            <AuthButton />
          </div>
        </div>
      </nav>
    </header>
  );
}
