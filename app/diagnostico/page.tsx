"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DiagnosticoPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    nome: "", empresa: "", site: "", instagram: "", email: "", whatsapp: "",
    setor: "", faturamento: "", leadCapture: "", leadResponse: "", desafio: ""
  });

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased">
      <div className="mx-auto max-w-2xl px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 border border-[#FF6B35]/30 text-[#FF6B35] rounded-full px-4 py-1 text-xs font-medium uppercase tracking-[0.15em]">GRÁTIS • 3 MIN</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">Diagnóstico de Conversão Digital</h1>
          <p className="text-white/50">Descubra onde seu site está perdendo clientes — e quanto isso está custando.</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1,2,3].map(s => (
            <div key={s} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              s === step ? 'bg-[#FF6B35] text-[#0A0A0A]' : 
              s < step ? 'bg-[#FF6B35]/30 text-white/60' : 'bg-white/[0.06] text-white/30'
            }`}>{s}</div>
          ))}
        </div>

        <motion.div key={step} initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.3}}>
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-6">Dados da empresa</h2>
              {[
                {label:"Seu nome", field:"nome", placeholder:"Ex: Carlos"},
                {label:"Nome da empresa", field:"empresa", placeholder:"Ex: Clínica Sorriso"},
                {label:"Site atual", field:"site", placeholder:"Ex: meusite.com.br"},
                {label:"Instagram", field:"instagram", placeholder:"Ex: @meuperfil"},
              ].map(f => (
                <div key={f.field}>
                  <label className="text-xs uppercase tracking-[0.1em] text-white/40 mb-2 block">{f.label}</label>
                  <input type="text" value={form[f.field as keyof typeof form]} onChange={e => update(f.field, e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full bg-[#141414] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] outline-none transition-colors" />
                </div>
              ))}
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-6">Como você captura clientes hoje?</h2>
              {[
                {label:"Seu setor", field:"setor", type:"select", options:["Estética","Odontologia","Restaurante","Academia","Advocacia","Outro"]},
                {label:"Qual o faturamento mensal aproximado?", field:"faturamento", type:"select", options:["Até R$ 10 mil","R$ 10-30 mil","R$ 30-100 mil","Acima de R$ 100 mil"]},
                {label:"Como os leads chegam até você hoje?", field:"leadCapture", placeholder:"Instagram, indicação, Google..."},
                {label:"Quanto tempo leva para responder um lead novo?", field:"leadResponse", type:"select", options:["Minutos","Horas","Dias","Não sei"]},
              ].map(f => (
                <div key={f.field}>
                  <label className="text-xs uppercase tracking-[0.1em] text-white/40 mb-2 block">{f.label}</label>
                  {f.type === "select" ? (
                    <select value={form[f.field as keyof typeof form]} onChange={e => update(f.field, e.target.value)}
                      className="w-full bg-[#141414] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] outline-none transition-colors">
                      <option value="">Selecione...</option>
                      {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  ) : (
                    <input type="text" value={form[f.field as keyof typeof form]} onChange={e => update(f.field, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-[#141414] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] outline-none transition-colors" />
                  )}
                </div>
              ))}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold mb-6">Contato e desafio</h2>
              {[
                {label:"WhatsApp", field:"whatsapp", placeholder:"(16) 99999-9999"},
                {label:"E-mail", field:"email", placeholder:"contato@empresa.com"},
                {label:"Qual seu maior desafio para conseguir clientes online?", field:"desafio", type:"textarea", placeholder:"Descreva resumidamente..."},
              ].map(f => (
                <div key={f.field}>
                  <label className="text-xs uppercase tracking-[0.1em] text-white/40 mb-2 block">{f.label}</label>
                  {f.type === "textarea" ? (
                    <textarea rows={4} value={form[f.field as keyof typeof form]} onChange={e => update(f.field, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-[#141414] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] outline-none transition-colors resize-none" />
                  ) : (
                    <input type="text" value={form[f.field as keyof typeof form]} onChange={e => update(f.field, e.target.value)}
                      placeholder={f.placeholder}
                      className="w-full bg-[#141414] border border-white/[0.1] rounded-xl px-4 py-3 text-sm focus:border-[#FF6B35] outline-none transition-colors" />
                  )}
                </div>
              ))}
              
              <div className="pt-4 p-4 bg-[#141414] border border-white/[0.08] rounded-xl">
                <p className="text-xs text-white/40 leading-relaxed">
                  Ao enviar, você receberá uma análise gratuita do seu funil digital. 
                  Seus dados não serão compartilhados.
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button onClick={() => setStep(s => s-1)} className="border border-white/[0.12] text-white px-6 py-3 rounded-full text-sm hover:bg-white/5 transition-all">
              ← VOLTAR
            </button>
          ) : <div />}
          
          {step < 3 ? (
            <button onClick={() => setStep(s => s+1)} className="bg-[#FF6B35] text-[#0A0A0A] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#E85A2A] transition-all">
              PRÓXIMO →
            </button>
          ) : (
            <button onClick={() => alert("Diagnóstico enviado! Entraremos em contato em até 24h.")} className="bg-[#FF6B35] text-[#0A0A0A] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#E85A2A] transition-all">
              ENVIAR DIAGNÓSTICO
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
