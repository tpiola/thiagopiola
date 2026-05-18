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
  title: "Thiago Piola | Farmacêutico Generalista & Engenheiro de IA",
  description:
    "Farmacêutico generalista CRF/SP 58.519 com Pós-graduação em Engenharia de IA. 15 anos de operação farmacêutica, formação de equipes, vendas de alta performance e automação inteligente.",
  authors: [{ name: "Thiago Biasoli Garcia Piola" }],
  keywords: [
    "farmacêutico generalista",
    "engenheiro de inteligencia artificial",
    "automação farmacêutica",
    "farmacêutico responsável técnico",
    "thiago piola",
    "droga raia",
    "healthtech",
    "n8n automação",
    "agentes de ia",
    "gestão estratégica",
    "sprint scrum farmácia",
    "rei das vendas",
  ],
  metadataBase: new URL("https://www.thiagopiola.com.br"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiago Piola | Farmacêutico Generalista & Engenheiro de IA",
    description:
      "Farmácia clínica + Engenharia de IA + Gestão Estratégica. Formação de equipes, vendas de alta performance e automação inteligente.",
    siteName: "Thiago Piola",
    type: "profile",
    locale: "pt_BR",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description: "15 anos de farmácia + IA aplicada + formação de equipes de alta performance.",
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

/** JSON-LD — Person schema para SEO e ingestão de automações */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Thiago Biasoli Garcia Piola",
  jobTitle: "Farmacêutico Generalista, Estrategista & Engenheiro de IA",
  url: "https://www.thiagopiola.com.br",
  email: "contato@thiagopiola.com.br",
  telephone: "+5516992333344",
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  sameAs: [
    "https://www.linkedin.com/in/thiago-piola/",
    "https://www.instagram.com/thiagopiolaoficial/",
    "https://www.facebook.com/thiagopiolaoficial/",
    "https://x.com/ThiagoPiola07",
    "https://github.com/tpiola",
    "https://bsky.app/profile/thiagopiola.bsky.social",
    "https://www.tiktok.com/@tpiola",
    "https://www.reidasvendas.com.br",
  ],
  knowsAbout: [
    "Farmácia Clínica",
    "Farmácia Hospitalar",
    "Responsabilidade Técnica",
    "Engenharia de Inteligência Artificial",
    "Automação com n8n",
    "Gestão Comercial",
    "Vendas de Alta Performance",
    "Metodologia Sprint e Scrum",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
