/** Conteúdo centralizado — thiagopiola.com.br | Definitivo */
/* Tom: executivo, confiante, humano. Mensagem implícita: "Estou pronto. Já provei. Agora quero o terreno maior." */

const whatsappText = encodeURIComponent(
    "Olá, Thiago. Vim pelo seu site e gostaria de conversar sobre sua trajetória profissional.",
  );

export const site = {
    name: "Thiago Biasoli Garcia Piola",
    shortName: "Thiago Piola",
    credential: "Farmacêutico CRF/SP 58.519",
    location: "Franca, SP — Ribeirão Preto e região",
    geo: {
          locality: "Franca",
          region: "SP",
          country: "BR",
    },
    phone: "(16) 99233-3344",
    phoneHref: "tel:5516992333344",
    email: "contato@thiagopiola.com.br",
    whatsapp: `https://wa.me/5516992333344?text=${whatsappText}`,
    linkedin: "https://www.linkedin.com/in/thiago-piola/",
    x: "https://x.com/ThiagoPiola07",
    crfConsultaUrl: "https://www.crfsp.org.br",
    cvUrl: "https://thiagopiola.notion.site/",
    cvLabel: "Ver Currículo",
    url: "https://www.thiagopiola.com.br",
    reidasvendas: "https://www.reidasvendas.com.br",
    industriaUrl: "https://www.thiagopiola.com.br/industria",
} as const;

export const footerTagline =
    "Farmacêutico CRF/SP 58.519 com mais de 15 anos transformando conhecimento farmacêutico em resultado — do hospital ao balcão, da equipe à meta batida.";

export const socialLinks = [
  { href: "https://github.com/tpiola", label: "GitHub" },
  {
        href: "https://me.developers.google.com/u/105476544026751993130",
        label: "Google Developers",
  },
  { href: site.linkedin, label: "LinkedIn" },
  { href: "https://thiagopiola.notion.site/", label: "Notion" },
  { href: "https://www.reddit.com/user/Mental_Individual641/", label: "Reddit" },
  { href: "https://t.me/m/pGzbdmS2ZWRh", label: "Telegram" },
  { href: "https://www.tiktok.com/@tpiola", label: "TikTok" },
  { href: site.x, label: "X" },
  ] as const;

export const socialLinksProfessional = socialLinks.filter((l) =>
    ["GitHub", "Google Developers", "LinkedIn", "Notion", "X"].includes(l.label),
                                                          );

export const socialLinksCommunity = socialLinks.filter((l) =>
    ["Reddit", "Telegram", "TikTok"].includes(l.label),
                                                       );

export const nav = [
  { href: "#quemsou", label: "Quem Sou" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#impacto", label: "Impacto" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
  ] as const;

export const hero = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "Levo saúde aonde eu chego.",
    lead: "Quinze anos transformando conhecimento farmacêutico em resultado — do hospital ao balcão, da equipe à meta batida. Conheço o produto pela ciência e o cliente pela convivência. Agora, busco o desafio onde a entrega depende inteiramente de mim: estar na frente, com o prescritor, no ponto de venda, levando ciência e resultado para onde a saúde precisa chegar.",
    ctaWhatsapp: "Vamos conversar",
    ctaEmail: "E-mail",
    ctaLinkedin: "LinkedIn",
} as const;

export const trustBar = [
  {
        label: "CRF/SP 58.519",
        detail: "Registro ativo e verificável",
        href: "https://www.crfsp.org.br",
  },
  {
            label: "15 anos de campo",
            detail: "Hospital · clínica · balcão · gestão",
            href: undefined,
    },
  {
        label: "Comissão de Ética — CRF",
        detail: "Integridade institucional comprovada",
        href: undefined,
  },
  {
        label: "Liderança comprovada",
        detail: "Equipes treinadas, metas batidas",
        href: undefined,
  },
  ] as const;

export const quemsou = {
    paragraphs: [
      "Não escolhi farmácia para ficar atrás de um balcão. Escolhi porque saúde é a coisa mais próxima que existe da vida das pessoas — e eu quero estar onde ela acontece.",
      "Por quinze anos, me dediquei integralmente. Liderei equipes, treinei vendedores, bati indicadores, mantive conformidade impecável e construí método onde antes havia intuição. Fui membro da Comissão de Ética do Conselho Regional de Farmácia — porque acredito que resultado sem integridade não se sustenta.",
      "Dei o meu melhor onde estou. E é justamente porque entreguei tudo que sei o que vem agora: eu cresço quando o desafio cresce. Meu perfil não é de acomodação — é de aceleração. Preciso de um campo onde meu esforço se converta diretamente em valor: para o prescritor que confia, para o paciente que se beneficia, para a companhia que cresce comigo.",
      "É por isso que a estrada me chama. Estar na frente, olho no olho com quem prescreve e quem vende, é onde transformo conhecimento em impacto real. Essa é a missão. E eu estou pronto.",
    ],
} as const;

export const farmaciaIndustria = {
    title: "Áreas de atuação",
    chips: [
          "Vendas Consultivas",
          "Treinamento e Desenvolvimento",
          "Gestão de Equipes",
          "Desenvolvimento de Negócios",
          "Relacionamento com Clientes",
          "Estratégia Comercial",
          "Compliance e Regulatório",
          "Performance Comercial",
          "CRM e Inteligência de Dados",
          "Produto Farmacêutico",
          "Prescrição e Indicação",
          "Comunicação Científica",
        ],
} as const;

export const autoridade = {
    sectionId: "impacto",
    sectionLabel: "03 / Impacto",
    title: "O que construí em 15 anos.",
    lead: "Mais de uma década unindo conhecimento técnico, gestão de pessoas e visão comercial. Cada resultado é prova de método — não de sorte.",
    pilares: [
      {
              number: "01",
              emoji: "🏪",
              title: "Gestão de Farmácia e Resultados",
              desc: "Lidero uma das lojas mais relevantes da maior rede do país. Giro, margem, ruptura, conversão — decisão baseada em dado, não em palpite.",
      },
      {
              number: "02",
              emoji: "🎯",
              title: "Treinamento e Desenvolvimento",
              desc: "Metodologia própria que transforma equipes. Treinamento técnico-comercial com foco em conversão ética, indicadores reais e crescimento contínuo.",
      },
      {
              number: "03",
              emoji: "📋",
              title: "Compliance e Boas Práticas",
              desc: "CRF/SP ativo. Membro da Comissão de Ética do CRF. Conformidade ANVISA e RDCs. Zero autuação — rigor que protege a operação e a reputação.",
      },
      {
              number: "04",
              emoji: "📊",
              title: "Dados e Inteligência de Negócios",
              desc: "Dashboards, CRM e automações que transformam números em decisão comercial. Do dado à ação — em tempo real.",
      },
        ],
} as const;

export const competencias = {
    sectionId: "competencias",
    sectionLabel: "04 / Competências",
    title: "Competências que geram resultado.",
    lead: "O que entrego em cada desafio profissional — da gestão de pessoas à inteligência de dados.",
    skills: [
      {
              title: "Vendas Consultivas e Relacionamento",
              desc: "Técnica de indicação e venda com embasamento científico. Relacionamento de longo prazo com clientes, prescritores e parceiros.",
      },
      {
              title: "Treinamento e Desenvolvimento de Pessoas",
              desc: "Metodologia que transforma equipes comuns em times de alta performance. Treinamento técnico-comercial com métrica de conversão.",
      },
      {
              title: "Gestão de Equipes e Liderança",
              desc: "Liderança de times de até 13 profissionais. Desenvolvimento de pessoas, delegação por resultado e cultura de alta performance.",
      },
      {
              title: "Inteligência Comercial e CRM",
              desc: "CRM, dashboards e BI comercial para decisão rápida. Funil e indicadores — tudo com número, sem achismo.",
      },
      {
              title: "Compliance e Regulatório",
              desc: "Conformidade com RDCs, ANVISA e boas práticas. Membro da Comissão de Ética do CRF/SP. Conhecimento que o mercado regulado exige.",
      },
      {
              title: "Desenvolvimento de Negócios",
              desc: "Visão de mercado, prospecção e estruturação comercial. Da operação atual a novas oportunidades — com método e resultado.",
      },
      {
              title: "Produto Farmacêutico e Comunicação Científica",
              desc: "Conhecimento profundo de mecanismos de ação, indicações e fisiologia. Base clínica que fundamenta a venda consultiva.",
      },
      {
              title: "IA Aplicada a Negócios",
              desc: "Automação de processos, agentes inteligentes e LLMs para qualificação, conteúdo e decisão comercial acelerada.",
      },
        ],
    metrics: [
      { value: "15+", label: "Anos em operação farmacêutica" },
      { value: "CRF/SP", label: "Registro profissional ativo" },
      { value: "Ética CRF", label: "Comissão de Ética — CRF/SP" },
        ],
} as const;

export const projetos = {
    sectionId: "resultados",
    sectionLabel: "05 / Resultados",
    title: "Entregas que provam execução.",
    lead: "Projetos reais com stack verificável — método comercial, visão de mercado e capacidade de entrega.",
    items: [
      {
              title: "Rei das Vendas",
              problem: "Equipes farmacêuticas sem método de conversão estruturado — dependência de intuição, não de processo.",
              result: "Plataforma de treinamento comercial com método documentado, dashboard de indicadores e integração CRM.",
              stack: ["Treinamento", "CRM", "Farmácia"],
              href: "https://www.reidasvendas.com.br",
      },
      {
              title: "Atuação Profissional — Indústria Farmacêutica",
              problem: "Mais de 15 anos de experiência consolidada precisam de apresentação clara e navegável.",
              result: "Documento vivo com trajetória, competências e resultados — organizado por áreas de atuação.",
              stack: ["Indústria", "Vendas", "Farmácia"],
              href: site.industriaUrl,
      },
      {
              title: "Automação de Indicadores Comerciais",
              problem: "Decisão atrasada por falta de dado consolidado — planilhas e relatórios manuais consomem tempo de gestão.",
              result: "Fluxos n8n + dashboards em tempo real. CRM com lead scoring, tracking de indicadores e BI comercial.",
              stack: ["n8n", "CRM", "BI"],
              href: "https://thiagopiola.notion.site/",
      },
        ],
} as const;

export const tecnologia = {
    sectionId: "stack",
    sectionLabel: "06 / Stack",
    title: "Ferramentas que entregam resultado.",
    lead: "Stack usado em produção real — prova de execução, não promessa de vitrine.",
    items: [
      { title: "CRM & Automação Comercial", desc: "Gestão de carteira e indicadores em tempo real — funil, tracking, follow-up automatizado" },
      { title: "IA e Agentes Inteligentes", desc: "LLMs e agentes para qualificação, conteúdo e decisão comercial acelerada" },
      { title: "Dashboards & BI", desc: "Painéis vivos de indicadores de farmácia — decisão baseada em dado, não em palpite" },
      { title: "n8n & Integrações", desc: "Orquestração de processos comerciais sem atrito — 24/7, escala, zero planilha" },
      { title: "Google GEAR & IA Aplicada", desc: "Programa Google de agentes e IA — formação em inteligência artificial para negócios" },
      { title: "Presença Digital", desc: "Posicionamento profissional e conteúdo que gera reconhecimento e oportunidade" },
        ],
} as const;

export const trajetoria = {
    sectionId: "trajetoria",
    sectionLabel: "02 / Trajetória",
    title: "Trajetória profissional.",
    lead: "Experiência consolidada em ambientes de alta exigência — do hospital ao balcão, da operação à estratégia.",
    career: [
      {
                    company: "Droga Raia / RD Saúde — Franca, SP",
              period: "Atual — [N] anos",
                    role: "Farmacêutico Responsável Técnico de Filial",
              desc: "Liderança de equipe, indicadores comerciais e compliance em loja referência da maior rede do país",
              impacts: [
                                  "Conduzo uma das unidades de maior relevância da maior rede de farmácias do país, com liderança direta de equipe de ~13 profissionais.",
                        "Desenvolvi e implementei metodologia própria de treinamento comercial, elevando conversão e ticket médio por meio de indicação técnica e ética.",
                        "Mantenho conformidade plena com CRF/SP e ANVISA — histórico sem não-conformidades.",
                        "Estruturei dashboards e CRM próprios para leitura de indicadores e decisão comercial em tempo real.",
                        "Construí relacionamento sólido e duradouro com clientes, prescritores e parceiros da cadeia de saúde.",
                      ],
      },
      {
              company: "Drogaria Americana — Franca, SP",
              period: "2013–2014",
              role: "Farmacêutico RT",
              desc: "Gestão completa de rotina técnica e operacional de farmácia de bairro",
              impacts: [
                        "Gestão completa da rotina técnica e operacional, com foco em adesão terapêutica e indicação ativa.",
                        "Otimização de processos de atendimento, elevando produtividade da equipe.",
                        "Atuação direta em ações comerciais conduzidas pela indústria farmacêutica.",
                      ],
      },
      {
              company: "Farma Cruz — Franca, SP",
              period: "2012–2013",
              role: "Farmacêutico RT",
              desc: "Compliance regulatório, documentação e processos de dispensação",
              impacts: [
                        "Responsável por controle documental e conformidade regulatória — adequação a RDCs e boas práticas.",
                        "Padronização da dispensação, garantindo rastreabilidade total e segurança do paciente.",
                        "Vivência completa do ciclo de visitas e negociação com a indústria — compreensão prática da dinâmica de vendas e relacionamento.",
                      ],
      },
      {
              company: "Hospital Unimed — Franca, SP",
              period: "2008–2011",
              role: "Auxiliar de Farmácia — Farmácia Hospitalar",
              desc: "Farmácia clínica hospitalar, logística de medicamentos e suporte multidisciplinar",
              impacts: [
                        "Atuação em farmácia clínica de alta complexidade, em suporte à equipe multidisciplinar — [N] leitos.",
                        "Gestão logística de medicamentos controlados e de alto custo, com rastreabilidade integral.",
                        "Participação em comissões de farmácia e terapêutica — base clínica que fundamenta o diálogo com prescritores.",
                      ],
      },
        ],
    education: [
      { course: "Pós-graduação em Engenharia de IA", status: "Em andamento" },
      { course: "GEAR/Google — IA e Agentes Inteligentes", status: "Concluído" },
      { course: "MBA em Gestão Empresarial", status: "Concluído" },
      { course: "MBA em Gestão Estratégica", status: "Concluído" },
      { course: "Farmácia — UNIFRAN", status: "Concluído" },
    ],
    institutional: "Membro da Comissão de Ética — Conselho Regional de Farmácia (CRF/SP). Atuação em pareceres e zelo pela conduta ética da profissão — postura institucional que reforça responsabilidade e credibilidade.",
} as const;

/** Resumo EN */
export const heroEn = {
    title: "Thiago Biasoli\nGarcia Piola",
    titleLine1: "Thiago Biasoli",
    titleLine2: "Garcia Piola",
    subtitle: "I bring health wherever I go.",
    lead: "Fifteen years turning pharmaceutical knowledge into results — from hospital to counter, from team to target met. I know the product through science and the client through daily contact. Now I seek the challenge where delivery depends entirely on me.",
} as const;
