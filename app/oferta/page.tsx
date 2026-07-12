"use client";

import { motion } from "framer-motion";
import { Card3DTilt } from "@/components/effects/Card3DTilt";

const packages = [
  {
    name: "Digital",
    price: "R$ 1.997",
    desc: "Landing page premium 3D com formulário de captura. Para quem quer presença digital de alto nível.",
    features: [
      "Site 3D premium (Next.js + Tailwind)",
      "Animações scroll-driven",
      "Formulário de lead + WhatsApp",
      "Domínio + Hospedagem 1 ano",
      "Deploy Vercel (CDN global)",
      "Lighthouse > 95"
    ],
    highlight: false
  },
  {
    name: "Complete",
    price: "R$ 4.997",
    desc: "Site completo + automação de vendas. Sistema que captura, qualifica e notifica você no WhatsApp.",
    features: [
      "Tudo do Digital +",
      "Sistema de automação n8n",
      "CRM de leads com etiquetas",
      "Resposta automática via WhatsApp",
      "Dashboard de métricas",
      "SEO completo + Schema.org",
      "Blog + Notion integrado",
      "Suporte 30 dias"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "R$ 9.997",
    desc: "Solução completa + agente IA + pipeline de vendas. Para empresas que querem dominar o digital.",
    features: [
      "Tudo do Complete +",
      "Agente IA de atendimento",
      "Pipeline de follow-up automático",
      "Integração com Google Workspace",
      "Relatórios semanais",
      "Treinamento da equipe",
      "Suporte 90 dias"
    ],
    highlight: false
  }
];

const benefits = [
  { icon: "🎯", title: "Leads qualificados", desc: "Seu site filtra quem realmente quer comprar antes de te notificar." },
  { icon: "⚡", title: "Resposta em segundos", desc: "Cliente preenche formulário → recebe resposta automática no WhatsApp." },
  { icon: "📊", title: "Métricas reais", desc: "Saiba quantos visitaram, de onde vieram e o que fizeram." },
  { icon: "🔧", title: "Zero manutenção", desc: "Hospedagem, domínio, SSL e atualizações inclusos." },
];

const faq = [
  { q: "Quanto tempo leva para ficar pronto?", a: "Entre 5 e 10 dias úteis, dependendo do pacote." },
  { q: "Preciso ter conteúdo ou imagens?", a: "Não. Criamos o conteúdo, as imagens (IA) e a copy de vendas." },
  { q: "Funciona no celular?", a: "Sim. Todo site é mobile-first e atinge Lighthouse > 95." },
  { q: "Posso parcelar?", a: "Sim. Em até 6x no cartão ou 12x via boleto." },
  { q: "E se eu não gostar?", a: "Garantia de 7 dias: se não gostar, devolvemos 100%." },
];

export default function OfertaPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-[#FF6B35]/30">
      
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{perspective:"800px"}} aria-hidden>
          <motion.div className="absolute top-[15%] left-[5%] w-[280px] h-[280px] opacity-[0.04]"
            animate={{rotateX:[0,15,0,-15,0],rotateY:[0,-20,0,20,0]}}
            transition={{duration:35,repeat:Infinity,ease:"linear"}}
            style={{transformStyle:"preserve-3d",color:"#FF6B35"}}>
            <svg width="280" height="280" viewBox="0 0 100 100"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.5"/></svg>
          </motion.div>
          <motion.div className="absolute bottom-[20%] right-[8%] w-[200px] h-[200px] opacity-[0.03]"
            animate={{rotateX:[0,-12,0,12,0],rotateY:[0,18,0,-18,0]}}
            transition={{duration:40,repeat:Infinity,ease:"linear",delay:5}}>
            <div style={{width:100,height:100,border:"0.5px solid currentColor",borderRadius:"50%",color:"#FF6B35"}}/>
          </motion.div>
        </div>
        
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}}>
            <span className="inline-block mb-5 border border-[#FF6B35]/30 text-[#FF6B35] rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em]">
              ★ PARA NEGÓCIOS LOCAIS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-6">
              Seu negócio merece<br/>
              <span className="text-[#FF6B35]">um site que vende</span>
            </h1>
            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Site premium 3D + automação de vendas + atendimento IA.
              Tudo que você precisa para capturar leads e vender mais, 
              sem precisar de equipe técnica.
            </p>
            <a href="#planos" className="inline-flex items-center gap-2 bg-[#FF6B35] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#E85A2A] transition-all hover:translate-y-[-2px] shadow-lg shadow-[#FF6B35]/20">
              VER PLANOS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">Por que isso é diferente?</h2>
            <p className="text-white/50 max-w-xl mx-auto">Não é só um site bonito. É um sistema que trabalha por você 24 horas por dia.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((b,i) => (
              <Card3DTilt key={b.title} className="relative" maxTilt={4} scale={1.005} lift={8}>
                <motion.div
                  initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                  viewport={{once:true,margin:"-60px"}}
                  transition={{delay:i*0.08,duration:0.5}}
                  className="border border-white/[0.08] bg-[#141414] rounded-2xl p-6 md:p-8 hover:border-[#FF6B35]/25 transition-all duration-300"
                >
                  <span className="text-2xl mb-4 block">{b.icon}</span>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] mb-2">{b.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{b.desc}</p>
                </motion.div>
              </Card3DTilt>
            ))}
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-20 md:py-28 border-b border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <span className="inline-block mb-4 border border-[#FF6B35]/30 text-[#FF6B35] rounded-full px-4 py-1 text-xs font-medium uppercase tracking-[0.15em]">INVESTIMENTO</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-4">Escolha seu pacote</h2>
            <p className="text-white/50">Sem mensalidade. Sem surpresas. Preço único de implantação.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg,i) => (
              <Card3DTilt key={pkg.name} className="relative" maxTilt={3} scale={1.003} lift={6}>
                <motion.div
                  initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}}
                  viewport={{once:true,margin:"-60px"}}
                  transition={{delay:i*0.1,duration:0.5}}
                  className={`rounded-2xl p-6 md:p-8 border transition-all duration-300 ${pkg.highlight ? 'border-[#FF6B35]/40 bg-[#FF6B35]/[0.04]' : 'border-white/[0.08] bg-[#141414] hover:border-white/[0.15]'}`}
                >
                  {pkg.highlight && <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FF6B35] mb-3 block">MAIS VENDIDO</span>}
                  <h3 className="text-xl font-bold tracking-[-0.03em] mb-1">{pkg.name}</h3>
                  <p className="text-3xl font-bold tracking-[-0.03em] mb-1" style={{color:pkg.highlight?'#FF6B35':'#F5F5F5'}}>{pkg.price}</p>
                  <p className="text-xs text-white/40 mb-6">Pagamento único</p>
                  <p className="text-sm text-white/50 mb-6 leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="text-[#FF6B35] mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#" className={`block w-full text-center py-3.5 rounded-full text-sm font-semibold transition-all ${pkg.highlight ? 'bg-[#FF6B35] text-[#0A0A0A] hover:bg-[#E85A2A]' : 'border border-white/[0.12] text-white hover:bg-white/5'}`}>
                    QUERO ESTE PACOTE
                  </a>
                </motion.div>
              </Card3DTilt>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-3xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.03em] mb-4">Dúvidas frequentes</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {faq.map((item,i) => (
              <details key={i} className="group border border-white/[0.08] rounded-2xl overflow-hidden">
                <summary className="list-none flex items-center justify-between p-5 cursor-pointer text-sm font-medium hover:bg-white/[0.02] transition-colors">
                  {item.q}
                  <svg className="w-4 h-4 text-white/30 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-white/50 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 border-t border-white/[0.06] bg-[#050505]">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h2 className="text-2xl font-bold tracking-[-0.03em] mb-4">Vamos começar?</h2>
          <p className="text-sm text-white/50 mb-8">Chama no WhatsApp que em 15 minutos entendemos seu negócio e te mostro o que faz sentido.</p>
          <a href="https://wa.me/5516999999999" className="inline-flex items-center gap-2 bg-[#FF6B35] text-[#0A0A0A] px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#E85A2A] transition-all">FALAR NO WHATSAPP →</a>
        </div>
      </section>
    </main>
  );
}
