import type { Metadata } from "next";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`
        }} />
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
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
