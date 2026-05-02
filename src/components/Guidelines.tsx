import React from "react";
import { CheckCircle2, AlertTriangle, Info } from "lucide-react";

const dos = [
  "Converse com seu médico antes de iniciar qualquer tratamento natural",
  "Informe ao farmacêutico todos os medicamentos que utiliza — interações existem",
  "Prefira fitoterápicos registrados na Anvisa",
  "Mantenha um diário de saúde para acompanhar sua evolução",
  "Adote mudanças de hábito gradualmente e com consistência",
  "Realize exames preventivos regularmente",
];

const donts = [
  "Não interrompa medicamentos prescritos sem orientação médica",
  "Não se automedique com plantas apenas por indicação popular",
  "Não espere sinais de melhora imediatos — tratamentos naturais levam tempo",
  "Não substitua consultas médicas por buscas na internet",
  "Não ignore sintomas persistentes mesmo usando tratamentos naturais",
];

export default function Guidelines() {
  return (
    <section id="orientacoes" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Uso responsável
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Orientações essenciais
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Para que os tratamentos naturais funcionem de forma segura e eficaz, é fundamental
            seguir algumas orientações básicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-emerald-600" size={24} />
              <h3 className="text-xl font-bold text-emerald-800">O que fazer</h3>
            </div>
            <ul className="space-y-3">
              {dos.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-emerald-900">
                  <span className="mt-0.5 text-emerald-500 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-amber-600" size={24} />
              <h3 className="text-xl font-bold text-amber-800">O que evitar</h3>
            </div>
            <ul className="space-y-3">
              {donts.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-amber-900">
                  <span className="mt-0.5 text-amber-500 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex gap-4 items-start">
          <Info className="text-blue-500 shrink-0 mt-0.5" size={22} />
          <div>
            <h4 className="font-bold text-blue-900 mb-2">Aviso importante</h4>
            <p className="text-sm text-blue-800 leading-relaxed">
              Todo o conteúdo deste site tem finalidade <strong>educativa e informativa</strong>.
              As orientações aqui apresentadas não substituem a consulta com médico, farmacêutico
              ou outro profissional de saúde habilitado. Sempre busque acompanhamento profissional
              antes de iniciar qualquer tratamento, seja ele convencional ou natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
