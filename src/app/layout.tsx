import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thiago Piola | Farmacêutico – Saúde Integrativa & Tratamentos Naturais",
  description:
    "Aprenda sobre tratamentos naturais, fitoterapia e como reduzir o uso de medicamentos com segurança, sempre com acompanhamento profissional. Por Thiago B. G. Piola – Farmacêutico CRF/SP 58.519.",
  keywords: [
    "farmacêutico",
    "saúde integrativa",
    "tratamentos naturais",
    "fitoterapia",
    "redução de medicamentos",
    "Thiago Piola",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
