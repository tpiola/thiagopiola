import React from "react";
import { MessageCircle, Mail, AtSign } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-emerald-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-emerald-300 font-semibold text-sm uppercase tracking-widest mb-3">
          Fale comigo
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Tem dúvidas? Vamos conversar.
        </h2>
        <p className="text-emerald-200 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          Orientação farmacêutica responsável e baseada em evidências. Entre em contato para
          tirar suas dúvidas sobre tratamentos naturais e saúde integrativa.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Enviar mensagem",
              href: "https://wa.me/5511999999999",
              bg: "bg-emerald-700 hover:bg-emerald-600",
            },
            {
              icon: Mail,
              label: "E-mail",
              value: "contato@thiagopiola.com.br",
              href: "mailto:contato@thiagopiola.com.br",
              bg: "bg-emerald-800 hover:bg-emerald-700",
            },
            {
              icon: AtSign,
              label: "Instagram",
              value: "@thiago.piola",
              href: "https://instagram.com/thiago.piola",
              bg: "bg-emerald-800 hover:bg-emerald-700",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.bg} rounded-2xl p-6 flex flex-col items-center gap-3 transition-colors`}
              >
                <Icon size={28} className="text-emerald-300" />
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-widest">
                  {item.label}
                </span>
                <span className="text-sm text-white font-medium">{item.value}</span>
              </a>
            );
          })}
        </div>

        <p className="text-emerald-400 text-xs">
          Thiago B. G. Piola · Farmacêutico · CRF/SP 58.519
        </p>
      </div>
    </section>
  );
}
