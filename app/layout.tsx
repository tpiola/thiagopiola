import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/lib/content";
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
  "Thiago Piola — Farmacêutico generalista, estrategista e engenheiro de IA. Automação, healthtech e resultado real com Sprint e Scrum. Franca, SP.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Thiago Piola | Farmacêutico, IA e Automação",
    template: "%s | Thiago Piola",
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "farmacêutico",
    "engenheiro de inteligência artificial",
    "automação farmácia",
    "healthtech",
    "indústria farmacêutica",
    "thiago piola",
    "franca sp",
    "CRF-SP",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: site.url },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: site.url,
    siteName: site.shortName,
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description,
    countryName: "Brasil",
    images: [
      {
        url: "/images/og-card.webp",
        width: 1200,
        height: 630,
        alt: "Thiago Piola — Farmacêutico e Engenheiro de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description,
    creator: "@ThiagoPiola07",
    images: ["/images/og-card.webp"],
  },
  icons: {
    icon: [{ url: "/images/logo.webp", type: "image/webp", sizes: "any" }],
    shortcut: [{ url: "/images/logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/logo.webp", type: "image/webp" }],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": "-20.5386;-47.4008",
    ICBM: "-20.5386, -47.4008",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9fb" },
    { media: "(prefers-color-scheme: dark)", color: "#070b12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased grain`}>
        <SkipLink />
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
