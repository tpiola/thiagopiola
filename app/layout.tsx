import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Thiago Piola | Farmaceutico & Engenheiro de IA',
  description: 'Farmaceutico com formacao em Engenharia de Inteligencia Artificial. Especialista em conectar saude, vendas, treinamento, automacao e solucoes digitais para criar resultados reais.',
  keywords: ['farmaceutico', 'inteligencia artificial', 'IA', 'automacao', 'saude', 'tecnologia', 'n8n', 'desenvolvimento'],
  authors: [{ name: 'Thiago Biasoli Garcia Piola' }],
  creator: 'Thiago Piola',
  openGraph: {
    title: 'Thiago Piola | Farmaceutico & Engenheiro de IA',
    description: 'Especialista em conectar saude, vendas, treinamento, automacao e solucoes digitais.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thiago Piola | Farmaceutico & Engenheiro de IA',
    description: 'Especialista em conectar saude, vendas, treinamento, automacao e solucoes digitais.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-slate-50">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
