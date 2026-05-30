import { site, socialLinks, trajetoria } from "@/lib/content";

export function JsonLd() {
  const personId = `${site.url}/#person`;
  const imageUrl = `${site.url}/images/og-card.webp`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profilepage`,
        url: site.url,
        mainEntity: { "@id": personId },
        inLanguage: "pt-BR",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: site.url }],
        },
      },
      {
        "@type": ["Person", "ProfessionalService"],
        "@id": personId,
        name: "Thiago Biasoli Garcia Piola",
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
          "Especialista em Treinamento de Equipes",
          "Engenheiro de Inteligência Artificial",
          "Gestor de Automações",
          "Founder",
        ],
        description: "Farmacêutico CRF/SP 58.519 especialista em treinamento de equipes de alta performance, automação de processos e IA aplicada ao setor farmacêutico. Founder da Rei das Vendas.",
        worksFor: [
          {
            "@type": "Organization",
            name: "Droga Raia",
            url: "https://www.drogaraia.com.br",
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
        ],
        alumniOf: trajetoria.education.map((e) => ({
          "@type": "EducationalOrganization",
          name: e.course.split("—")[0]?.trim() ?? e.course,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: "Franca",
          addressRegion: "SP",
          addressCountry: "BR",
          postalCode: "14400-000",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.5386,
          longitude: -47.4008,
        },
        sameAs: [
          site.linkedin,
          site.reidasvendas,
          ...socialLinks.map((link) => link.href),
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Thiago Biasoli Garcia Piola",
        description: "Site profissional de Thiago Biasoli Garcia Piola — Farmacêutico, especialista em treinamento, automação e IA.",
        publisher: { "@id": personId },
        inLanguage: "pt-BR",
        potentialAction: {
          "@type": "ContactAction",
          target: `https://wa.me/5516992333344`,
          name: "Contato via WhatsApp",
        },
      },
      {
        "@type": "Organization",
        "@id": `${site.reidasvendas}/#organization`,
        name: "Rei das Vendas",
        url: site.reidasvendas,
        founder: { "@id": personId },
        description: "Plataforma de treinamento comercial para o setor farmacêutico.",
        sameAs: [site.reidasvendas],
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
