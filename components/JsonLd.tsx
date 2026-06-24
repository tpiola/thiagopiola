import { site, trajetoria } from "@/lib/content";

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const organizationId = `${site.url}/#organization`;
  const websiteId = `${site.url}/#website`;
  const profilePageId = `${site.url}/#profilepage`;
  const breadcrumbId = `${site.url}/#breadcrumb`;
  const imageUrl = `${site.url}/images/og-card.webp`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: site.url,
        mainEntity: { "@id": personId },
        inLanguage: "pt-BR",
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: site.url },
        ],
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": personId,
        name: "Thiago Biasoli Garcia Piola",
        givenName: "Thiago",
        familyName: "Piola",
        alternateName: ["Thiago Piola", "Thiago Biasoli Piola"],
        url: site.url,
        image: {
          "@type": "ImageObject",
          url: imageUrl,
          width: 1200,
          height: 630,
        },
        email: site.email,
        telephone: site.phone,
        jobTitle: [
          "Farmacêutico",
          "Farmacêutico Responsável Técnico",
          "Profissional de Saúde",
          "Consultor Técnico-Comercial",
          "Especialista em Treinamento de Equipes",
          "Analista de Inteligência Artificial e Automação",
          "Founder",
        ],
        description:
          "Farmacêutico CRF/SP 58.519 com atuação técnico-comercial em saúde — treinamento de equipes, vendas consultivas, automação de processos e IA aplicada à saúde. Founder da Rei das Vendas.",
        worksFor: [
          {
            "@type": "Organization",
            name: "Droga Raia — Filial Franca, SP",
            url: "https://www.drogaraia.com.br",
            description:
              "Farmacêutico Responsável Técnico pela filial de Franca, SP.",
          },
          {
            "@type": "Organization",
            name: "Rei das Vendas",
            url: site.reidasvendas,
          },
        ],
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional license",
          name: "CRF/SP 58.519",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Regional de Farmácia do Estado de São Paulo",
          },
        },
        award: "Farmacêutico Notável 2025",
        knowsAbout: [
          "Farmácia",
          "Vendas Consultivas",
          "Treinamento de Equipes",
          "Saúde",
          "Inteligência Artificial",
          "Automação de Processos",
          "Comunicação Técnica",
          "Relacionamento Profissional",
          "Gestão de Indicadores",
        ],
        alumniOf: trajetoria.education.map((e) => ({
          "@type": "EducationalOrganization",
          name: e.course.split("—")[0]?.trim() ?? e.course,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.github,
          site.x,
          site.instagram,
          site.facebook,
          site.tiktok,
          site.telegram,
          site.reddit,
          "https://me.developers.google.com/u/105476544026751993130",
          "https://thiagopiola.notion.site/",
        ],
      },
      {
        "@type": "Organization",
        "@id": organizationId,
        name: site.shortName,
        alternateName: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        founder: { "@id": personId },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.github,
          site.x,
          site.instagram,
          site.facebook,
          site.tiktok,
          site.telegram,
          site.reddit,
          "https://me.developers.google.com/u/105476544026751993130",
          "https://thiagopiola.notion.site/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: "Thiago Biasoli Garcia Piola",
        description:
          "Site profissional de Thiago Biasoli Garcia Piola — Farmacêutico, especialista em treinamento, automação e IA.",
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "ContactAction",
          target: `https://wa.me/5516992333344`,
          name: "Contato via WhatsApp",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#localbusiness`,
        name: site.shortName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description:
          "Farmácia e consultoria farmacêutica em Franca, SP — responsabilidade técnica, treinamento e vendas consultivas.",
        image: imageUrl,
        priceRange: "$$",
        openingHours: "Mo-Fr 08:00-18:00",
        areaServed: { "@type": "City", name: "Franca" },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.geo.locality,
          addressRegion: site.geo.region,
          addressCountry: site.geo.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        parentOrganization: { "@id": organizationId },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Thiago Piola atende em Franca?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, Thiago Piola é farmacêutico com registro ativo CRF/SP 58.519 e atua como Responsável Técnico em Franca, SP, na Droga Raia. Também oferece consultoria e treinamento para equipes farmacêuticas em toda a região.",
            },
          },
          {
            "@type": "Question",
            name: "Quais serviços Thiago Piola oferece?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thiago Piola oferece responsabilidade técnica farmacêutica, treinamento de equipes, vendas consultivas, compliance ANVISA, automação de processos com IA (n8n, agentes inteligentes) e consultoria técnico-comercial para o setor de saúde.",
            },
          },
          {
            "@type": "Question",
            name: "Como entrar em contato com Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `O contato pode ser feito via WhatsApp (${site.phone}), email (${site.email}) ou LinkedIn (${site.linkedin}). A resposta geralmente ocorre em até 2 horas em horário comercial.`,
            },
          },
          {
            "@type": "Question",
            name: "O que é o programa Rei das Vendas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Rei das Vendas é uma plataforma de treinamento comercial proprietária, criada por Thiago Piola, focada em metodologia de vendas consultivas para o setor farmacêutico. Combina técnicas de PNL, neuromarketing e estratégia comercial com resultados mensuráveis.",
            },
          },
          {
            "@type": "Question",
            name: "Thiago Piola atua com inteligência artificial na farmácia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. Thiago Piola possui certificação GEAR/Google em IA e Agentes Inteligentes e pós-graduação em Engenharia de IA. Desenvolve soluções de automação de processos com n8n, agentes inteligentes e IA generativa aplicada à saúde — incluindo triagem B2B, atendimento automatizado e análise de indicadores.",
            },
          },
          {
            "@type": "Question",
            name: "Qual a formação de Thiago Piola?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Thiago Piola é Farmacêutico formado pela UNIFRAN, com registro CRF/SP 58.519. Possui MBA em Gestão Empresarial, MBA em Gestão Estratégica, pós-graduação em Engenharia de IA (em andamento) e certificação GEAR/Google em IA e Agentes Inteligentes. Foi eleito Farmacêutico Notável RD Saúde 2025 entre 14 mil profissionais.",
            },
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${site.url}/#howto-automacao-n8n`,
        name: "Como automatizar processos de qualificação B2B com n8n e IA",
        description:
          "Guia passo a passo para implementar automação de triagem de leads B2B utilizando n8n, LLM e CRM — metodologia utilizada por Thiago Piola.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Mapear os canais de entrada de leads",
            text: "Identifique todos os canais onde os leads chegam: formulários do site, WhatsApp, LinkedIn, e-mail. Liste os campos necessários para qualificação (nome, empresa, cargo, necessidade, orçamento).",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Configurar o webhook de captura no n8n",
            text: "Crie um workflow no n8n com um nó Webhook como trigger. Configure os formulários para enviar dados para este endpoint. Habilite autenticação básica para segurança.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Integrar LLM para análise e scoring do lead",
            text: "Adicione um nó HTTP Request para chamar a API do Google Gemini ou OpenAI. Envie os dados do lead como prompt para classificação (hot/warm/cold) com base em critérios predefinidos como cargo, urgência e fit com o serviço.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Conectar ao CRM e notificar o time comercial",
            text: "Configure um nó para criar/atualizar o lead no CRM. Leads classificados como 'hot' disparam notificação imediata via WhatsApp/Telegram. Leads 'warm' entram em sequência de nutrição automatizada.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Monitorar e otimizar com dashboard de indicadores",
            text: "Implemente um nó de banco de dados (PostgreSQL ou Supabase) para armazenar métricas de conversão. Crie alertas para gargalos e revise o prompt de classificação mensalmente com base nos resultados reais de fechamento.",
          },
        ],
        totalTime: "P7D",
        tool: [
          { "@type": "HowToTool", name: "n8n (self-hosted ou cloud)" },
          { "@type": "HowToTool", name: "Google Gemini API ou OpenAI API" },
          { "@type": "HowToTool", name: "CRM (HubSpot, Pipedrive, ou similar)" },
          { "@type": "HowToTool", name: "WhatsApp Business API ou Telegram Bot" },
          { "@type": "HowToTool", name: "Banco de dados (PostgreSQL/Supabase)" },
        ],
        supply: [
          { "@type": "HowToSupply", name: "Conta Google Cloud ou OpenAI com créditos de API" },
          { "@type": "HowToSupply", name: "Servidor ou VPS para hospedar n8n (ou plano cloud)" },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
