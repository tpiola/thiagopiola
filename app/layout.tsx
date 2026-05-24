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
  "Thiago Biasoli Garcia Piola — Farmacêutico CRF/SP, especialista em IA aplicada, tecnologia, vendas, treinamentos e automação para facilitar resultados em saúde, varejo farmacêutico e projetos digitais. Franca, SP.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Thiago Biasoli Garcia Piola | Farmacêutico, IA, Vendas e Tecnologia",
    template: "%s | Thiago Biasoli Garcia Piola",
  },
  description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "Professional Services",
  keywords: [
    "Thiago Biasoli Garcia Piola",
    "Thiago Piola",
    "farmacêutico em Franca SP",
    "farmacêutico CRF SP 58519",
    "farmacêutico inteligência artificial",
    "engenheiro de inteligência artificial",
    "IA aplicada em farmácia",
    "automação farmacêutica",
    "healthtech",
    "vendas farmacêuticas",
    "treinamento de equipes de farmácia",
    "facilitador de resultados",
    "tecnologia para saúde",
    "SEO GEO Google",
    "Franca SP",
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: site.url },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: site.url,
    siteName: site.shortName,
    title: "Thiago Biasoli Garcia Piola | Farmacêutico, IA e Resultados",
    description,
    countryName: "Brasil",
    images: [
      {
        url: "/images/og-card.webp",
        width: 1200,
        height: 630,
        alt: "Thiago Biasoli Garcia Piola — Farmacêutico, IA, tecnologia e resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Biasoli Garcia Piola | Farmacêutico, IA e Resultados",
    description,
    creator: "@ThiagoPiola07",
    images: ["/images/og-card.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/images/logo.png", type: "image/png" }],
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Franca",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    "business:contact_data:locality": site.geo.locality,
    "business:contact_data:region": site.geo.region,
    "business:contact_data:country_name": "Brasil",
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
