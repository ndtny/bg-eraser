"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut, Crown } from "lucide-react";
import { useState } from "react";

export default function AuthButton() {
  const { data: session, status } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  if (status === "loading") {
    return (
      <div className="w-20 h-9 bg-[var(--secondary)] rounded-lg animate-pulse" />
    );
  }

  if (session) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors text-sm"
        >
          {session.user?.image ? (
            <img
              src={session.user.image}
              alt=""
              className="w-6 h-6 rounded-full"
            />
          ) : (
            <div className="w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-xs font-bold">
              {session.user?.name?.[0] || "U"}
            </div>
          )}
          <span className="hidden sm:inline max-w-[120px] truncate">
            {session.user?.name || session.user?.email}
          </span>
        </button>

        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 mt-1 w-48 bg-white border border-[var(--border)] rounded-xl shadow-lg z-50 py-1">
              <div className="px-3 py-2 text-xs text-[var(--muted)] border-b border-[var(--border)]">
                {session.user?.email}
              </div>
              <button
                onClick={() => {
                  setShowMenu(false);
                  signOut();
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors text-sm font-medium"
    >
      <LogIn className="w-4 h-4" />
      Sign In
    </button>
  );
}
