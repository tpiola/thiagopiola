import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { ThemeProvider } from "@/components/ThemeProvider";
import { I18nProvider } from "@/lib/i18n";
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
  "Farmacêutico com atuação técnico-comercial em saúde — operação farmacêutica, hospitalar, treinamento, vendas consultivas e tecnologia.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Thiago Piola | Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde",
    template: "%s | Thiago Piola — Farmacêutico CRF/SP 58.519",
  },
  description,
  authors: [{ name: "Thiago Biasoli Garcia Piola", url: site.url }],
  creator: "Thiago Piola",
  publisher: "Thiago Biasoli Garcia Piola",
  keywords: [
    "Thiago Piola",
    "Thiago Biasoli Garcia Piola",
    "farmacêutico CRF SP",
    "CRF-SP 58.519",
    "farmacêutico técnico-comercial",
    "atuação em saúde",
    "vendas consultivas saúde",
    "treinamento equipes farmácia",
    "treinamento de equipes farmácia",
    "operação farmacêutica",
    "farmácia hospitalar",
    "vendas consultivas",
    "inteligência artificial farmácia",
    "automação farmácia",
    "n8n automação",
    "Google GEAR",
    "agentes IA",
    "MBA gestão farmacêutica",
    "visão de negócio farma",
    "Droga Raia",
    "RD Saúde",
    "franca sp",
    "farmacêutico digital",
    "farmacêutico empreendedor",
    "comunicação técnica",
    "relacionamento profissional",
    "gestão de indicadores",
    "pharmaceutical sales",
    "pharma operations",
    "pharmaceutical executive",
    "pharma business development",
    "healthtech",
    "digital health Brazil",
    "Rei das Vendas",
    "liderança farmacêutica",
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
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: site.url,
    siteName: "Thiago Piola — Farmacêutico CRF/SP 58.519",
    title: "Thiago Piola | Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde",
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
        alt: "Thiago Piola — Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico CRF/SP 58.519 — Atuação técnico-comercial em saúde",
    description,
    creator: "@ThiagoPiola07",
    images: ["/images/og-card.webp"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/logo.png",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
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
        {(process.env.NEXT_PUBLIC_GA_ID && (
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
        )) as unknown as React.ReactNode}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-surface font-sans text-foreground antialiased`}
      >
        <SkipLink />
        <JsonLd />
        <ThemeProvider>
          <I18nProvider>
            {children}
            <CookieConsent />
            <Analytics />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
