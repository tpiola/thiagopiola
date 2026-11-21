import Link from 'next/link';
import {ArrowRight, ArrowUpRight, Award, Building2, FlaskConical, HeartPulse, ShieldCheck} from 'lucide-react';
import {ContactForm} from '@/components/shared/ContactForm';
import {contact, site} from '@/lib/content';

const stats = [
  {value: '12+', title: 'Anos como RT em grande rede', text: 'Responsabilidade técnica, equipe, processos e conformidade sanitária'},
  {value: '1/14.000', title: 'Farmacêutico Notável RD Saúde 2025', text: 'Finalista entre cerca de 14 mil farmacêuticos'},
  {value: '2008', title: 'Início na farmácia hospitalar', text: 'Prescrições, equipe multiprofissional e rastreabilidade'},
  {value: '2.000', title: 'Acompanhamentos por mês', text: 'Meta do programa de pós-dispensação que estruturei'}
];

const fronts = [
  {
    icon: Building2,
    label: 'Drogarias e redes',
    title: 'Operação que sustenta indicador',
    text: 'Para donos, gestores e farmacêuticos que precisam de equipe preparada e processo que funcione no pico do movimento.',
    items: [
      'Treinamento técnico e de atendimento para balconistas e farmacêuticos',
      'Leitura da operação: rotina, escala, indicadores, ruptura e mix',
      'Conformidade sanitária: RDC 44/2009, Portaria 344/98, documentação e auditoria interna',
      'Programas de acompanhamento pós-dispensação e fidelização'
    ],
    href: '/empresas',
    cta: 'Treinamento e consultoria',
    featured: false
  },
  {
    icon: FlaskConical,
    label: 'Indústria e distribuição',
    title: 'O ponto de venda, contado por quem está nele',
    text: 'Para laboratórios, distribuidores e healthtechs que precisam que o portfólio seja entendido, lembrado e indicado no balcão.',
    items: [
      'Treinamento de canal sobre portfólio, na linguagem do balcão',
      'Leitura de PDV: o que leva a equipe a indicar, ou não, um produto',
      'Desenho e piloto de programas de suporte ao paciente e adesão',
      'Conteúdo técnico para farmacêuticos e equipes de loja'
    ],
    href: '#industria',
    cta: 'Projetos com a indústria',
    featured: true
  },
  {
    icon: HeartPulse,
    label: 'Pacientes',
    title: 'Perguntas melhores para quem cuida',
    text: 'Conteúdo educativo para entender o próprio tratamento e conversar melhor com médico e farmacêutico.',
    items: [
      'Adesão ao tratamento, sem julgamento',
      'Diabetes e hipertensão no dia a dia',
      'Uso correto, horários e conservação de medicamentos',
      'Newsletter semanal A Dose Certa'
    ],
    href: '/saude',
    cta: 'Conteúdo para pacientes',
    featured: false
  }
];

const cases = [
  {
    tag: 'Adesão · Segurança do paciente',
    title: 'Programa de acompanhamento pós-dispensação',
    found: 'O contato com o paciente dependia de ficha de papel e da memória da equipe. Não havia registro de melhora, abandono ou reação adversa.',
    action: 'Sistema digital com registro em até 40 segundos no balcão, mensagens distintas por motivo (serviço farmacêutico, MIP, psicotrópicos, agonistas de GLP-1) e por quem adquiriu, acesso direto à bula e pendências que passam automaticamente para o dia seguinte.',
    outcome: 'Operação dimensionada para 2.000 acompanhamentos por mês, com painel diário de execução por colaborador.'
  },
  {
    tag: 'Dispensação · Conservação',
    title: 'Orientação padronizada para suspensões e termolábeis',
    found: 'Suspensões antibióticas e produtos refrigerados saíam do balcão sem orientação escrita padronizada de preparo, horários e estabilidade após abertura.',
    action: 'Sistema de etiquetas para 9 suspensões antibióticas e 13 produtos refrigerados, incluindo agonistas de GLP-1, com prazo pós-primeiro uso, cartão de horários com marcação de doses e alerta de excipientes e alergênicos.',
    outcome: 'Orientação de uso entregue por escrito no ato da dispensação, igual para toda a equipe.'
  },
  {
    tag: 'Inteligência de PDV',
    title: 'Leitura competitiva de preço e mix',
    found: 'Concorrência local com tabloide agressivo e nenhuma leitura objetiva de onde a loja perdia na comparação.',
    action: 'Comparativo de 174 itens de tabloide, 113 com equivalente direto, ranqueados pela diferença de preço e organizados por categoria.',
    outcome: 'Lista priorizada para ajuste de mix, estoque e comunicação de loja.'
  },
  {
    tag: 'Gestão de equipe',
    title: 'Formação e gestão da equipe de loja',
    found: 'Atendimento muito rápido perde o paciente. Muito lento derruba a satisfação. A equipe não tinha um protocolo comum entre os dois extremos.',
    action: 'Manual de atendimento consultivo com exemplos por categoria, pontos cegos do balcão e tempo de atendimento, mais painel de equipe com indicadores, escala e mapa da loja.',
    outcome: 'Material impresso e aplicado na rotina, com acompanhamento individual por indicador.'
  }
];

const timeline = [
  {
    when: '2014 — hoje',
    role: 'Farmacêutico Responsável Técnico',
    org: 'Grande rede de varejo farmacêutico · Franca/SP',
    text: 'Responsabilidade técnica, gestão de pessoas e processos, controle de medicamentos sujeitos a controle especial, serviços farmacêuticos, indicadores operacionais e formação contínua da equipe. Relacionamento diário com pacientes, prescritores e gestão regional.',
    now: true
  },
  {when: '2013 — 2014', role: 'Farmacêutico Responsável Técnico', org: 'Drogaria Americana', text: 'Gestão da rotina técnica, indicadores operacionais e dispensação em conformidade regulatória.', now: false},
  {when: '2012 — 2013', role: 'Farmacêutico Responsável Técnico', org: 'Farma Cruz', text: 'Conformidade documental junto à ANVISA e padronização dos processos de dispensação.', now: false},
  {when: '2008 — 2011', role: 'Auxiliar de Farmácia Hospitalar', org: 'Hospital Unimed', text: 'Análise de prescrições, trabalho com equipe multiprofissional, fluxos assistenciais, logística e rastreabilidade de medicamentos.', now: false}
];

const education = [
  ['Farmácia · UNIFRAN', 'Graduação'],
  ['MBA em Gestão Empresarial', 'Concluído'],
  ['MBA em Gestão Estratégica', 'Concluído'],
  ['Google GEAR · IA e Agentes Inteligentes', 'Concluído'],
  ['Pós-graduação em Engenharia de IA', 'Em curso']
];

const skills = [
  {kicker: 'Regulatório', title: 'Qualidade e conformidade', chips: ['Boas Práticas Farmacêuticas · RDC 44/2009', 'Controle especial · Portaria 344/98', 'Documentação técnica', 'Auditoria interna', 'Responsabilidade técnica']},
  {kicker: 'Clínico', title: 'Cuidado e segurança do paciente', chips: ['Adesão ao tratamento', 'Serviços farmacêuticos', 'Acompanhamento pós-dispensação', 'Monitoramento de reações adversas', 'Termolábeis e agonistas de GLP-1', 'Farmácia hospitalar']},
  {kicker: 'Canal', title: 'Ponto de venda e negócio', chips: ['Execução no PDV', 'Mix, ruptura e estoque', 'Análise competitiva de preço', 'Atendimento consultivo', 'Relacionamento com prescritores', 'Indicadores operacionais']},
  {kicker: 'Educação', title: 'Treinamento e comunicação', chips: ['Treinamento técnico de equipes', 'Manuais e protocolos de atendimento', 'Comunicação técnica para leigos', 'Liderança em alta demanda']},
  {kicker: 'Tecnologia', title: 'Dados, automação e IA', chips: ['Dashboards de KPI', 'Excel e Google Sheets avançado', 'Automação com n8n', 'Agentes de IA', 'CRM']}
];

const formats = [
  ['Treinamento de canal', 'Portfólio explicado para balconistas e farmacêuticos, com casos reais de balcão e linguagem que a equipe usa.'],
  ['Programas de suporte ao paciente', 'Desenho do fluxo de acompanhamento, mensagens e indicadores, a partir de um programa já operado em loja.'],
  ['Leitura de ponto de venda', 'Diagnóstico de exposição, indicação, ruptura e objeções reais da equipe e do paciente.'],
  ['Conteúdo técnico', 'Materiais, aulas e roteiros para farmacêuticos, revisados com critério técnico e regulatório.']
];

const profileUrl = 'https://thiagopiola.notion.site/';
const linkedinUrl = 'https://www.linkedin.com/in/thiago-piolaoficial';

export function ProfessionalHome() {
  return (
    <div className="tp">
      {/* HERO */}
      <section className="tp-hero" aria-labelledby="tp-title">
        <div className="tp-wrap tp-hero-grid">
          <div>
            <span className="tp-pill tp-mono"><span className="tp-dot" aria-hidden="true" />Farmacêutico {site.credential} · Franca, SP</span>
            <h1 id="tp-title">
              Entre a receita e o paciente, o tratamento se perde. <span className="tp-grad">Eu trabalho nesse intervalo.</span>
            </h1>
            <p className="tp-lead">
              Há mais de 12 anos sou <strong>farmacêutico responsável técnico em grande rede de varejo farmacêutico</strong>. Formo equipes,
              organizo a operação e desenho programas de acompanhamento que fazem o paciente usar o medicamento do jeito certo e voltar à farmácia.
            </p>
            <p className="tp-quote-box">Farmácia hospitalar, varejo, regulação e execução comercial: a visão completa de como o medicamento chega, é indicado e é usado.</p>
            <div className="tp-ctas">
              <a className="tp-btn tp-btn-primary" href="#contato">Conversar sobre um projeto <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="tp-btn tp-btn-ghost" href="#trajetoria">Ver trajetória</a>
            </div>
            <ul className="tp-checks">
              <li><ShieldCheck size={18} aria-hidden="true" />Operação hospitalar e drogaria</li>
              <li><Award size={18} aria-hidden="true" />Finalista Farmacêutico Notável 2025</li>
            </ul>
          </div>

          <aside className="tp-bula" aria-label="Ficha técnica profissional">
            <div className="tp-bula-head">
              <b>Thiago Piola</b>
              <span>Ficha técnica profissional · farmacêutico</span>
            </div>
            <dl>
              <div><dt>Composição</dt><dd>Farmácia hospitalar (2008) + 14 anos como RT no varejo + gestão (2 MBAs) + dados e IA aplicada.</dd></div>
              <div><dt>Indicações</dt><dd><ul>
                <li>Drogarias e redes que precisam de equipe técnica e processo.</li>
                <li>Laboratórios e distribuidores que querem entender o balcão.</li>
                <li>Pacientes que querem entender o próprio tratamento.</li>
              </ul></dd></div>
              <div><dt>Posologia</dt><dd>Treinamento, consultoria ou projeto. Escopo definido após conversa inicial.</dd></div>
              <div><dt>Advertências</dt><dd>Não promete resultado clínico. Trabalha com evidência, norma sanitária e indicador.</dd></div>
            </dl>
            <div className="tp-bula-foot"><span>Reg. <strong>{site.credential}</strong></span><span>Franca · SP</span></div>
          </aside>
        </div>
      </section>

      {/* PROVAS */}
      <section className="tp-proof" aria-label="Provas de entrega">
        <div className="tp-wrap">
          <p className="tp-proof-label tp-mono">Provas de entrega</p>
          <div className="tp-stats">
            {stats.map(s => (
              <div className="tp-stat" key={s.value}><b>{s.value}</b><strong>{s.title}</strong><p>{s.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ATUAÇÃO */}
      <section className="tp-sec" id="atuacao">
        <div className="tp-wrap">
          <div className="tp-head tp-center">
            <span className="tp-kicker tp-mono"><b>01</b> Atuação no setor farmacêutico</span>
            <h2>Três frentes, um critério: o medicamento certo, usado do jeito certo.</h2>
            <p className="tp-intro">O mesmo conhecimento de balcão serve a quem opera a farmácia, a quem fabrica o medicamento e a quem toma.</p>
          </div>
          <div className="tp-fronts">
            {fronts.map(f => {
              const Icon = f.icon;
              return (
                <article className={'tp-front' + (f.featured ? ' tp-featured' : '')} key={f.label}>
                  <span className="tp-icon"><Icon size={22} aria-hidden="true" /></span>
                  <span className="tp-mono tp-front-label">{f.label}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <ul>{f.items.map(i => <li key={i}>{i}</li>)}</ul>
                  <Link className="tp-link" href={f.href}>{f.cta} <ArrowRight size={16} aria-hidden="true" /></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CASOS */}
      <section className="tp-sec tp-white" id="casos">
        <div className="tp-wrap">
          <div className="tp-head">
            <span className="tp-kicker tp-mono"><b>02</b> Resultados em produção</span>
            <h2>Trabalho que já está rodando na farmácia, não no slide.</h2>
            <p className="tp-intro">Cada caso segue a lógica de um registro farmacêutico: o que foi encontrado, a conduta adotada e o desfecho.</p>
          </div>
          <div className="tp-cases">
            {cases.map((c, i) => (
              <article className="tp-case" key={c.title}>
                <div className="tp-case-top"><span className="tp-tag">{c.tag}</span><span className="tp-mono">Caso 0{i + 1}</span></div>
                <h3>{c.title}</h3>
                <dl className="tp-soap">
                  <div><dt>Achado</dt><dd>{c.found}</dd></div>
                  <div><dt>Conduta</dt><dd>{c.action}</dd></div>
                  <div className="tp-out"><dt>Desfecho</dt><dd>{c.outcome}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="tp-tech">
            <h3>Tecnologia a serviço<br />da operação</h3>
            <p><b>Rei das Vendas.</b> Plataforma própria de treinamento técnico-comercial para o setor farmacêutico, da qual sou fundador.</p>
            <p><b>Automação com IA.</b> Fluxos em n8n com modelos de linguagem para triagem de demandas, certificação Google GEAR em agentes inteligentes e pós-graduação em Engenharia de IA em andamento.</p>
          </div>
        </div>
      </section>

      {/* RECONHECIMENTO */}
      <section className="tp-award" aria-label="Reconhecimento">
        <div className="tp-wrap">
          <span className="tp-mono">Reconhecimento · 2025</span>
          <div className="tp-big">1 <i>em</i> 14.000</div>
          <p>Finalista do prêmio Farmacêutico Notável RD Saúde 2025, escolhido entre cerca de 14 mil farmacêuticos por ética, compromisso e lealdade.</p>
        </div>
      </section>

      {/* TRAJETÓRIA */}
      <section className="tp-sec" id="trajetoria">
        <div className="tp-wrap">
          <div className="tp-head">
            <span className="tp-kicker tp-mono"><b>03</b> Trajetória</span>
            <h2>Do hospital ao varejo, sempre do lado de dentro do balcão.</h2>
          </div>
          <div className="tp-career">
            <ol className="tp-timeline">
              {timeline.map(t => (
                <li className={t.now ? 'tp-now' : undefined} key={t.when}>
                  <span className="tp-when tp-mono">{t.when}</span>
                  <h3>{t.role}</h3>
                  <p className="tp-org">{t.org}</p>
                  <p>{t.text}</p>
                  {t.now ? <span className="tp-badge"><Award size={16} aria-hidden="true" />Finalista Farmacêutico Notável RD Saúde 2025</span> : null}
                </li>
              ))}
            </ol>
            <div>
              <div className="tp-side">
                <h3>Formação</h3>
                <ul className="tp-edu">
                  {education.map(([name, status]) => (
                    <li key={name}><span>{name}</span><span className={status === 'Em curso' ? 'tp-prog' : undefined}>{status}</span></li>
                  ))}
                </ul>
              </div>
              <div className="tp-side">
                <h3>Perfil completo</h3>
                <a className="tp-btn tp-btn-primary tp-block" href={profileUrl} target="_blank" rel="noopener">Perfil profissional detalhado <ArrowUpRight size={16} aria-hidden="true" /></a>
                <a className="tp-btn tp-btn-ghost tp-block" href={linkedinUrl} target="_blank" rel="noopener">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPETÊNCIAS */}
      <section className="tp-sec tp-white" id="competencias">
        <div className="tp-wrap">
          <div className="tp-head tp-center">
            <span className="tp-kicker tp-mono"><b>04</b> Competências profissionais</span>
            <h2>Visão técnica, regulatória e de negócio na mesma pessoa.</h2>
          </div>
          <div className="tp-skills">
            {skills.map(s => (
              <div className="tp-skill" key={s.title}>
                <h3><small>{s.kicker}</small>{s.title}</h3>
                <div className="tp-chips">{s.chips.map(c => <span className="tp-chip" key={c}>{c}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDÚSTRIA */}
      <section className="tp-sec" id="industria">
        <div className="tp-wrap">
          <div className="tp-head">
            <span className="tp-kicker tp-mono"><b>05</b> Indústria e distribuição</span>
            <h2>A indústria conhece a molécula. O balcão conhece o paciente. <span className="tp-grad">Faço a ponte.</span></h2>
          </div>
          <div className="tp-partner">
            <div className="tp-partner-copy">
              <p>Doze anos como responsável técnico me deram uma leitura que não aparece em relatório de sell-out: por que a equipe indica um produto e esquece outro, em que momento o paciente abandona o tratamento e o que uma visita técnica precisa ter para ser lembrada no dia seguinte.</p>
              <p className="tp-muted">Coloco essa leitura à disposição de laboratórios, distribuidores e healthtechs, com rigor técnico, respeito à norma sanitária e foco em indicador.</p>
              <div className="tp-ctas">
                <Link className="tp-btn tp-btn-primary" href="/contato?assunto=industria">Abrir conversa <ArrowRight size={16} aria-hidden="true" /></Link>
                <a className="tp-btn tp-btn-ghost" href={profileUrl} target="_blank" rel="noopener">Perfil profissional</a>
              </div>
              <div className="tp-avail"><span className="tp-tag">Base: Franca/SP</span><span className="tp-tag">Presencial e remoto</span></div>
            </div>
            <div className="tp-formats">
              {formats.map(([title, text], i) => (
                <div className="tp-format" key={title}><span className="tp-n">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section className="tp-sec tp-white" id="contato">
        <div className="tp-wrap tp-contact">
          <div>
            <span className="tp-kicker tp-mono"><b>06</b> Contato</span>
            <h2>Conte o contexto. Eu respondo pessoalmente.</h2>
            <p className="tp-intro">Treinamento de equipe, consultoria para drogaria, projeto com indústria, aula ou palestra. Não envie exames, receitas ou dados de saúde por aqui.</p>
            <ul className="tp-contact-list">
              <li><a href={site.whatsapp}><span>WhatsApp</span><span className="tp-mono">{site.phone}</span></a></li>
              <li><a href={'mailto:' + site.email}><span>E-mail</span><span className="tp-mono">{site.email}</span></a></li>
              <li><a href={linkedinUrl} target="_blank" rel="noopener"><span>LinkedIn</span><span className="tp-mono">/in/thiago-piolaoficial</span></a></li>
            </ul>
          </div>
          <div className="tp-form">
            <ContactForm initialSubject={contact.subjects[1]} />
          </div>
        </div>
      </section>
    </div>
  );
}
