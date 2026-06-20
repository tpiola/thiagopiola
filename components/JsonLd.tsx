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
          "Especialista em Treinamento de Equipes",
          "Engenheiro de Inteligência Artificial",
          "Gestor de Automações",
          "Founder",
        ],
        description:
          "Farmacêutico CRF/SP 58.519 especialista em treinamento de equipes de alta performance, automação de processos e IA aplicada ao setor farmacêutico. Founder da Rei das Vendas.",
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
        knowsAbout: [
          "Farmácia",
          "Treinamento de equipes",
          "Gestão farmacêutica",
          "Compliance ANVISA",
          "Inteligência artificial",
          "Automação de processos",
          "n8n",
          "Google Gemini",
          "Claude AI",
          "Agentes inteligentes",
          "Scrum",
          "Sprint",
          "Healthtech",
          "Indústria farmacêutica",
          "Varejo farmacêutico",
          "Vendas consultivas técnico-científicas",
          "Relacionamento com prescritores",
          "Gestão de território farmacêutico",
          "Assuntos regulatórios",
          "Farmacovigilância",
          "BPF — Boas Práticas de Fabricação",
          "Liderança de equipes",
          "People analytics",
          "Inteligência comercial",
          "CRM farmacêutico",
          "Farmácia clínica e hospitalar",
          "Business acumen",
          "Indicadores de performance farmacêutica",
          "Negociação e persuasão ética",
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
