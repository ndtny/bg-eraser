import type { Metadata } from "next";
import Providers from "@/components/Providers";
import AuthButton from "@/components/AuthButton";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI BG Eraser - Free AI Background Remover | Remove Background Online",
  description:
    "Remove image backgrounds instantly with AI. Free online background remover for photos, product images, portraits and more. 3 free uses daily, no signup required.",
  keywords: [
    "background remover",
    "remove background",
    "ai background remover",
    "remove background from image",
    "transparent background",
    "remove bg",
    "photo background remover",
    "free background remover",
  ],
  openGraph: {
    title: "BG Eraser - Free AI Background Remover",
    description:
      "Remove image backgrounds instantly with AI. Free, fast, and no signup required.",
    type: "website",
    locale: "en_US",
    siteName: "BG Eraser",
  },
  twitter: {
    card: "summary_large_image",
    title: "BG Eraser - Free AI Background Remover",
    description:
      "Remove image backgrounds instantly with AI. Free, fast, and no signup required.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`
            }} />
          </>
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Providers>
        <header className="border-b border-[var(--border)]">
          <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 3a2 2 0 0 0-2 2" />
                  <path d="M19 3a2 2 0 0 1 2 2" />
                  <path d="M21 19a2 2 0 0 1-2 2" />
                  <path d="M5 21a2 2 0 0 1-2-2" />
                  <path d="M9 3h1" />
                  <path d="M9 21h1" />
                  <path d="M14 3h1" />
                  <path d="M14 21h1" />
                  <path d="M3 9v1" />
                  <path d="M21 9v1" />
                  <path d="M3 14v1" />
                  <path d="M21 14v1" />
                </svg>
              </div>
              <span className="font-bold text-xl">BG Eraser</span>
            </a>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
                <a href="/#features" className="hover:text-[var(--foreground)] transition-colors">
                  Features
                </a>
                <a href="/pricing" className="hover:text-[var(--foreground)] transition-colors">
                  Pricing
                </a>
                <a href="/#faq" className="hover:text-[var(--foreground)] transition-colors">
                  FAQ
                </a>
              </div>
              <AuthButton />
            </div>
          </nav>
        </header>

        <Providers>
        <main className="flex-1">{children}</main>

        </Providers>
        <footer className="border-t border-[var(--border)] py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">BG Eraser</h3>
                <p className="text-sm text-[var(--muted)]">
                  Free AI-powered background remover. Remove backgrounds from
                  images instantly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Tools</h4>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>
                    <a href="/remove-background-from-image" className="hover:text-[var(--foreground)]">
                      Remove Background from Image
                    </a>
                  </li>
                  <li>
                    <a href="/remove-background-from-photo" className="hover:text-[var(--foreground)]">
                      Remove Background from Photo
                    </a>
                  </li>
                  <li>
                    <a href="/transparent-background-maker" className="hover:text-[var(--foreground)]">
                      Transparent Background Maker
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>
                    <a href="/product-photo-background-remover" className="hover:text-[var(--foreground)]">
                      Product Photos
                    </a>
                  </li>
                  <li>
                    <a href="/remove-white-background" className="hover:text-[var(--foreground)]">
                      Remove White Background
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Legal</h4>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  <li>
                    <a href="/privacy" className="hover:text-[var(--foreground)]">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-[var(--foreground)]">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[var(--border)] text-center text-sm text-[var(--muted)]">
              © {new Date().getFullYear()} BG Eraser. All rights reserved.
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}
