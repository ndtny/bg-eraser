import type { Metadata } from "next";
import Providers from "@/components/Providers";
import AuthButton from "@/components/AuthButton";
import "./globals.css";

const SITE_NAME = "AI BG Eraser";
const SITE_URL = "https://www.aibgeraser.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI BG Eraser — Free AI Background Remover | Remove Background Online",
    template: "%s | AI BG Eraser",
  },
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
    "background eraser",
    "remove background online",
    "png background remover",
  ],
  openGraph: {
    title: `${SITE_NAME} — Free AI Background Remover`,
    description:
      "Remove image backgrounds instantly with AI. Free, fast, and no signup required.",
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free AI Background Remover`,
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
  alternates: {
    canonical: SITE_URL,
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
          {/* Header */}
          <header className="sticky top-0 z-50 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]">
            <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M3 12h4" />
                    <path d="M17 12h4" />
                    <path d="M12 3v4" />
                    <path d="M12 17v4" />
                  </svg>
                </div>
                <span className="font-bold text-xl tracking-tight">
                  <span className="text-[var(--primary)]">AI</span> BG Eraser
                </span>
              </a>
              <div className="flex items-center gap-4 sm:gap-6">
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

          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-[var(--border)] py-12 mt-20 bg-[var(--secondary)]">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="col-span-2 md:col-span-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[var(--primary)] to-purple-600 rounded-md flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                    </div>
                    <span className="font-bold"><span className="text-[var(--primary)]">AI</span> BG Eraser</span>
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
                    <li><a href="/pricing" className="hover:text-[var(--foreground)] transition-colors">Pricing</a></li>
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
        </Providers>
      </body>
    </html>
  );
}
