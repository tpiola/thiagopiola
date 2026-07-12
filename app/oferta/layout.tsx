import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Premium 3D + Automação | Thiago Piola",
  description:
    "Site premium 3D com automação de vendas e atendimento IA. Pacotes a partir de R$1.997 para negócios locais em Franca/SP.",
  openGraph: {
    title: "Site Premium 3D + Automação | Thiago Piola",
    description:
      "Site premium 3D com automação de vendas e atendimento IA. Pacotes a partir de R$1.997.",
  },
};

export default function OfertaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
