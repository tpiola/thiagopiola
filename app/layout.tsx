import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiago Biasoli G. Piola | Farmacêutico & Engenheiro de IA",
  description:
    "Farmacêutico CRF/SP 58.519 · Engenheiro de IA · Especialista em Vendas, Treinamento e Automação. Especialista em farmácia, IA e automação. Franca, SP.",
  authors: [{ name: "Thiago Biasoli G. Piola" }],
  keywords: [
    "farmacêutico",
    "engenheiro de ia",
    "automação",
    "vendas",
    "treinamento",
    "franca sp",
    "thiago piola",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiago Biasoli G. Piola | Farmacêutico & Engenheiro de IA",
    description: "Farmácia · Engenharia de IA · Automação · Vendas · Treinamento",
    siteName: "Thiago Piola",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary",
    title: "Thiago Biasoli G. Piola | Farmacêutico & Engenheiro de IA",
    description: "Farmácia · Engenharia de IA · Automação · Vendas · Treinamento",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
