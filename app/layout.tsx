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
    "Farmacêutico CRF/SP com Engenharia de IA. Vendas, gestão, treinamento, automação, sites e aplicativos — preparado para saúde e tecnologia.",
  authors: [{ name: "Thiago Biasoli G. Piola" }],
  keywords: [
    "farmacêutico",
    "engenharia de ia",
    "automação",
    "vendas",
    "gestão",
    "thiago piola",
    "franca sp",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description:
      "Base farmacêutica + IA aplicada. Saúde, negócios e tecnologia com método e resultado.",
    siteName: "Thiago Piola",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Piola | Farmacêutico & Engenheiro de IA",
    description: "Saúde, negócios e tecnologia — com método e resultado.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
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
