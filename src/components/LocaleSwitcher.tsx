"use client";

import { useI18n } from "@/i18n/context";

export default function LocaleSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="px-2 py-1 text-sm rounded-md border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors"
      title={locale === "en" ? "切换中文" : "Switch to English"}
    >
      {locale === "en" ? "中文" : "EN"}
    </button>
  );
}
