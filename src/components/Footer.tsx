"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12 mt-20 bg-[var(--secondary)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-md flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                  <circle cx="18" cy="11" r="4" fill="white"/>
                  <path d="M11 28c0-5.5 3.1-10 7-10s7 4.5 7 28" fill="white"/>
                  <rect x="4" y="4" width="5" height="5" fill="white" opacity="0.4"/>
                  <rect x="9" y="9" width="5" height="5" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span className="font-bold">
                <span className="text-[var(--primary)]">AI</span> BG Eraser
              </span>
            </div>
            <p className="text-sm text-[var(--muted)]">
              Free AI-powered background remover. Remove backgrounds from images instantly with one click.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Tools</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><a href="/remove-background-from-image" className="hover:text-[var(--foreground)] transition-colors">Remove Background from Image</a></li>
              <li><a href="/remove-background-from-photo" className="hover:text-[var(--foreground)] transition-colors">Remove Background from Photo</a></li>
              <li><a href="/transparent-background-maker" className="hover:text-[var(--foreground)] transition-colors">Transparent Background Maker</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Use Cases</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><a href="/product-photo-background-remover" className="hover:text-[var(--foreground)] transition-colors">Product Photos</a></li>
              <li><a href="/remove-white-background" className="hover:text-[var(--foreground)] transition-colors">Remove White Background</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><a href="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-[var(--foreground)] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} AI BG Eraser. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
