import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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

export const metadata: Metadata = {
  title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
  description:
    "Farmacêutico CRF/SP com Pós-graduação em Engenharia de IA. 15 anos de operação farmacêutica + sistemas de IA, automação e produto digital. Disponível para indústria, healthtech e grandes redes.",
  authors: [{ name: "Thiago Biasoli G. Piola" }],
  keywords: [
    "farmacêutico executivo",
    "engenharia de inteligencia artificial",
    "automação farmacêutica",
    "farmacêutico responsável técnico",
    "thiago piola",
    "droga raia",
    "healthtech",
    "n8n automação",
    "agentes de ia",
  ],
  metadataBase: new URL("https://www.thiagopiola.com.br"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description:
      "Perfil raro: farmácia clínica + engenharia de IA. Disponível para indústria, healthtech e operações de alto padrão.",
    siteName: "Thiago Piola",
    type: "profile",
    locale: "pt_BR",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description: "15 anos de farmácia + IA aplicada. Disponível para posições executivas.",
    images: ["/images/og-cover.jpg"],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07090f" },
  ],
};

/** JSON-LD — Person schema for SEO and n8n automation ingestion */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thiago Biasoli G. Piola",
  jobTitle: "Farmacêutico Responsável Técnico & Engenheiro de IA",
  url: "https://www.thiagopiola.com.br",
  email: "contato@thiagopiola.com.br",
  telephone: "+5516992333344",
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  sameAs: [
    "https://www.linkedin.com/in/thiago-piola/",
    "https://www.instagram.com/thiagopiolaoficial/",
    "https://www.facebook.com/thiagopiolaoficial/",
    "https://x.com/ThiagoPiola07",
  ],
  knowsAbout: [
    "Farmácia Clínica",
    "Responsabilidade Técnica",
    "Engenharia de Inteligência Artificial",
    "Automação com n8n",
    "Gestão Comercial",
    "Desenvolvimento de Produto Digital",
  ],
  alumniOf: [
    { "@type": "EducationalOrganization", name: "UNIFRAN" },
    { "@type": "EducationalOrganization", name: "Google / GEAR" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased grain`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
