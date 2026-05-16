import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Thiago Biasoli G. Piola | Farmacêutico & Engenheiro de IA",
  description: "Farmacêutico CRF-SP 58.519 · Engenheiro de IA · Especialista em Vendas, Treinamento e Automação. Baseado em Franca, SP.",
  keywords: ["farmacêutico", "engenheiro de ia", "automação", "vendas", "treinamento", "franca sp", "thiago piola"],
  authors: [{ name: "Thiago Biasoli G. Piola" }],
  openGraph: {
    type: "website",
    title: "Thiago Biasoli G. Piola | Farmacêutico & Engenheiro de IA",
    description: "Farmacêutico · Engenheiro de IA · Vendas · Treinamento · Automação",
    siteName: "Thiago Piola",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
