"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "./ThemeProvider";
import { I18nProvider } from "@/i18n/context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <I18nProvider>
          {children}
        </I18nProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
