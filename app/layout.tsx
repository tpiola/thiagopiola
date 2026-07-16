import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
import { sentinela } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const description =
  "Sentinela Saúde Ambiental — controle integrado de pragas, dedetização ecológica, análise ambiental e diagnóstico premium em Franca/SP e região.";

export const metadata: Metadata = {
  metadataBase: new URL(sentinela.url),
  title: {
    default: "Sentinela Saúde Ambiental | Dedetização e Diagnóstico Ambiental em Franca/SP",
    template: "%s | Sentinela Saúde Ambiental",
  },
  description,
  authors: [{ name: sentinela.name, url: sentinela.url }],
  creator: sentinela.name,
  publisher: sentinela.name,
  keywords: [
    "Sentinela Saúde Ambiental",
    "dedetização Franca SP",
    "controle de pragas Franca",
    "dedetização ecológica",
    "escorpião Franca SP",
    "baratas Franca SP",
    "cupim Franca SP",
    "controle de ratos",
    "saúde ambiental",
    "análise da qualidade do ar",
    "análise de água potável",
    "laudo técnico ANVISA",
    "controle integrado de pragas",
    "dedetizadora em Franca",
    "diagnóstico ambiental",
  ],
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
    canonical: sentinela.url,
    languages: {
      "pt-BR": sentinela.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: sentinela.url,
    siteName: sentinela.name,
    title: "Sentinela Saúde Ambiental | Dedetização e Diagnóstico Ambiental em Franca/SP",
    description,
    countryName: "Brasil",
    images: [
      {
        url: "/images/og-card.webp",
        width: 1200,
        height: 630,
        alt: "Sentinela Saúde Ambiental — controle de pragas e diagnóstico ambiental em Franca/SP",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinela Saúde Ambiental | Dedetização em Franca/SP",
    description,
    creator: "@sentinelasaudeambiental",
    images: ["/images/og-card.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "icon", url: "/favicon.svg" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  category: "environmental health",
  classification: "Local Business, Environmental Health, Pest Control",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": "-20.5386;-47.4008",
    ICBM: "-20.5386, -47.4008",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){try{var t=localStorage.getItem("theme");if(!t){t=window.matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"}document.documentElement.classList.add(t)}catch(e){}})()
            `.trim(),
          }}
        />
        {
          (process.env.NEXT_PUBLIC_GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `.trim(),
                }}
              />
            </>
          )) as unknown as React.ReactNode
        }
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface font-sans text-foreground antialiased`}
      >
        <SkipLink />
        <JsonLd />
        <ThemeProvider>
          <I18nProvider>
            {children}
            <SpeedInsights />
            <CookieConsent />
            <Analytics />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
