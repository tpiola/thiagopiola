import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
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
    "taça de higéia",
    "bowl of hygieia",
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
        alt: "Thiago Biasoli Garcia Piola — Farmacêutico, Treinamento e Engenheiro de IA — Taça de Higéia",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  category: "healthcare technology",
  classification: "Business, Technology, Healthcare",
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
    { media: "(prefers-color-scheme: light)", color: "#f5f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#06090f" },
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface font-sans text-foreground antialiased`}
      >
        <SkipLink />
        <JsonLd />
        <ThemeProvider>
          {children}
          <CookieConsent />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
