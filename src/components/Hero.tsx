import React from "react";
import { ArrowDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-16"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            <ShieldCheck size={14} />
            Informação com responsabilidade científica
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Menos remédios,{" "}
            <span className="text-emerald-600">mais saúde</span> de verdade.
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            Aprenda com um farmacêutico como utilizar tratamentos naturais, fitoterápicos e hábitos
            saudáveis para reduzir a dependência de medicamentos — sempre com segurança e
            orientação profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#tratamentos"
              className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors text-center shadow-lg shadow-emerald-200"
            >
              Explorar tratamentos
            </a>
            <a
              href="#sobre"
              className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full hover:border-emerald-500 hover:text-emerald-600 transition-colors text-center"
            >
              Conhecer o especialista
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-400">
            * As informações deste site têm caráter educativo e não substituem a consulta médica.
          </p>
        </div>

        {/* Expert card */}
        <div className="flex justify-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full border border-gray-100">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mx-auto mb-6 flex items-center justify-center text-white text-3xl font-extrabold">
              TP
            </div>
            <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
              Thiago B. G. Piola
            </h2>
            <p className="text-emerald-600 font-semibold text-center text-sm mb-2">
              Farmacêutico
            </p>
            <p className="text-gray-400 text-xs text-center mb-6">CRF/SP 58.519</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { label: "Saúde Integrativa", icon: "🌿" },
                { label: "Fitoterapia", icon: "🌱" },
                { label: "Nutrologia", icon: "🥗" },
                { label: "Farmácia Clínica", icon: "💊" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-emerald-50 rounded-2xl p-3 text-sm text-gray-700 font-medium"
                >
                  <span className="block text-2xl mb-1">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
        aria-label="Scroll para baixo"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
