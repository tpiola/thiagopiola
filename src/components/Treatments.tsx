import React from "react";
import { Leaf, Sun, Droplets, Heart, Brain, Apple } from "lucide-react";

const treatments = [
  {
    icon: Leaf,
    color: "emerald",
    title: "Fitoterapia",
    description:
      "Uso terapêutico de plantas medicinais com comprovação científica para auxiliar no tratamento de diversas condições de saúde.",
    examples: ["Valeriana para ansiedade", "Espinheira-santa para o estômago", "Maracujá para insônia"],
  },
  {
    icon: Sun,
    color: "amber",
    title: "Exposição Solar Consciente",
    description:
      "Protocolo seguro de exposição ao sol para síntese de vitamina D, regulação do sono e melhora do humor.",
    examples: ["Vitamina D natural", "Regulação circadiana", "Melhora do humor"],
  },
  {
    icon: Droplets,
    color: "blue",
    title: "Hidratação Terapêutica",
    description:
      "Como a hidratação adequada influencia desde o desempenho cognitivo até a saúde renal e cardiovascular.",
    examples: ["Saúde renal", "Cognição", "Pele e articulações"],
  },
  {
    icon: Heart,
    color: "rose",
    title: "Saúde Cardiovascular Natural",
    description:
      "Estratégias não farmacológicas para manutenção da pressão arterial, colesterol e saúde do coração.",
    examples: ["Dieta DASH", "Atividade física", "Ômega-3 natural"],
  },
  {
    icon: Brain,
    color: "purple",
    title: "Saúde Mental & Equilíbrio",
    description:
      "Abordagens integrativas para ansiedade, estresse e depressão leve como complemento ao tratamento médico.",
    examples: ["Meditação", "Adaptógenos", "Nutrição do cérebro"],
  },
  {
    icon: Apple,
    color: "green",
    title: "Nutrição Funcional",
    description:
      "Como o alimento pode ser o seu melhor remédio — protocolos alimentares baseados em evidências.",
    examples: ["Anti-inflamatória", "Intestino saudável", "Imunidade"],
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-600",
  blue: "bg-blue-100 text-blue-600",
  rose: "bg-rose-100 text-rose-600",
  purple: "bg-purple-100 text-purple-600",
  green: "bg-green-100 text-green-600",
};

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Abordagens terapêuticas
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Tratamentos que fazem a diferença
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Conheça as principais abordagens integrativas que podem ajudá-lo a ter mais saúde
            com menos dependência de medicamentos — sempre com base científica e supervisão
            profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item) => {
            const Icon = item.icon;
            const colorClass = colorMap[item.color];
            return (
              <article
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${colorClass}`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.examples.map((ex) => (
                    <li
                      key={ex}
                      className="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-200"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
