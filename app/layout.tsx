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
  "Thiago Biasoli Garcia Piola — Farmacêutico CRF/SP 58.519, especialista em treinamento de equipes de alta performance, automação de processos e engenharia de IA aplicada ao setor farmacêutico. Founder da Rei das Vendas. Franca, SP, Brasil.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Thiago Biasoli Garcia Piola | Treinamento, IA e Automação Farmacêutica",
    template: "%s | Thiago Biasoli Garcia Piola",
  },
  description,
  authors: [{ name: "Thiago Biasoli Garcia Piola", url: site.url }],
  creator: "Thiago Biasoli Garcia Piola",
  publisher: "Thiago Biasoli Garcia Piola",
  keywords: [
    "farmacêutico",
    "treinamento de equipes farmácia",
    "automação farmácia",
    "inteligência artificial farmácia",
    "engenheiro de inteligência artificial",
    "healthtech",
    "indústria farmacêutica",
    "thiago piola",
    "thiago biasoli garcia piola",
    "franca sp",
    "CRF-SP",
    "rei das vendas",
    "reidasvendas",
    "gestão farmácia",
    "compliance ANVISA",
    "n8n automação",
    "Google GEAR",
    "agentes IA",
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
    canonical: site.url,
    languages: {
      "pt-BR": site.url,
      "en-US": `${site.url}/en`,
    },
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: site.url,
    siteName: "Thiago Biasoli Garcia Piola",
    title: "Thiago Biasoli Garcia Piola | Treinamento, IA e Automação Farmacêutica",
    description,
    countryName: "Brasil",
    firstName: "Thiago",
    lastName: "Piola",
    username: "ThiagoPiola07",
    gender: "male",
    images: [
      {
        url: "/images/og-card.webp",
        width: 1200,
        height: 630,
        alt: "Thiago Biasoli Garcia Piola — Farmacêutico, Treinamento e Engenheiro de IA",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Biasoli Garcia Piola | Treinamento, IA e Automação",
    description,
    creator: "@ThiagoPiola07",
    images: ["/images/og-card.webp"],
  },
  icons: {
    icon: [{ url: "/images/logo.webp", type: "image/webp", sizes: "any" }],
    shortcut: [{ url: "/images/logo.webp", type: "image/webp" }],
    apple: [{ url: "/images/logo.webp", type: "image/webp" }],
  },
  verification: {
    google: undefined,
  },
  category: "healthcare technology",
  classification: "Business, Technology, Healthcare",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": "-20.5386;-47.4008",
    ICBM: "-20.5386, -47.4008",
    "profile:first_name": "Thiago",
    "profile:last_name": "Piola",
    "profile:username": "ThiagoPiola07",
    "article:author": "Thiago Biasoli Garcia Piola",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#06090f" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#0c2340" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Thiago Piola" />
        <meta name="application-name" content="Thiago Biasoli Garcia Piola" />
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
