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
    "Farmacêutico CRF/SP com Pós-graduação em Engenharia de IA. Perfil executivo raro — 15 anos de operação farmacêutica combinados com desenvolvimento de agentes, automação e produtos digitais.",
  authors: [{ name: "Thiago Biasoli G. Piola" }],
  keywords: [
    "farmacêutico executivo",
    "engenharia de ia",
    "automação farmacêutica",
    "agentes de ia",
    "gestor farmacêutico",
    "thiago piola",
    "indústria farmacêutica",
    "healthtech",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description:
      "Perfil executivo raro: farmácia clínica + engenharia de IA. Disponível para indústria, healthtech e grandes operações.",
    siteName: "Thiago Piola",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description:
      "15 anos de farmácia + IA aplicada. Liderança técnica para indústrias e healthtechs.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased grain`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
