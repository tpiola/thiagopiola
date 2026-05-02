import React from "react";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Formação",
    description: "Farmacêutico graduado com especialização em Saúde Integrativa e Fitoterapia.",
  },
  {
    icon: Award,
    title: "Registro Profissional",
    description: "CRF/SP 58.519 – Conselho Regional de Farmácia do Estado de São Paulo.",
  },
  {
    icon: BookOpen,
    title: "Educação Continuada",
    description:
      "Atualização constante em protocolos de farmácia clínica, nutrologia e terapias integrativas.",
  },
  {
    icon: Users,
    title: "Missão",
    description:
      "Educar a população sobre o uso racional de medicamentos e os benefícios de abordagens naturais e integrativas.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Sobre o especialista
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Thiago B. G. Piola
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Farmacêutico registrado no CRF/SP sob o nº 58.519, Thiago dedica sua carreira a
              aproximar as pessoas de uma saúde mais plena por meio da educação sobre tratamentos
              naturais e do uso racional de medicamentos.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Acredita que a melhor medicação é a prevenção — e que quando o medicamento é
              necessário, ele deve ser utilizado com critério, pelo menor tempo possível e sempre
              sob supervisão médica. Seu trabalho une ciência farmacêutica à sabedoria das
              plantas medicinais para oferecer orientação acessível e responsável.
            </p>
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-3">
              <span className="text-2xl">💊</span>
              <div>
                <p className="text-xs text-gray-500">Registro Profissional</p>
                <p className="font-bold text-emerald-700">CRF/SP 58.519</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-emerald-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                    <Icon size={20} className="text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
