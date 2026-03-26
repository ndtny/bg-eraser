"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="p-2 rounded-md border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors"
      title={resolvedTheme === "light" ? "Dark mode" : "Light mode"}
    >
      {resolvedTheme === "light" ? (
        <Moon className="w-4 h-4 text-[var(--muted)]" />
      ) : (
        <Sun className="w-4 h-4 text-[var(--muted)]" />
      )}
    </button>
  );
}
