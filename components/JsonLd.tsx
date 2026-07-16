import { sentinela } from "@/lib/content";

export function JsonLd() {
  const businessId = `${sentinela.url}/#localbusiness`;
  const websiteId = `${sentinela.url}/#website`;
  const actionId = `${sentinela.url}/#agendar-servico`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: sentinela.url,
        name: sentinela.name,
        inLanguage: "pt-BR",
        publisher: { "@id": businessId },
        potentialAction: { "@id": actionId },
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: sentinela.name,
        url: sentinela.url,
        email: sentinela.email,
        telephone: sentinela.phone,
        image: sentinela.imagePrompts.map((image) => `${sentinela.url}/images/${image.fileName}`),
        description:
          "Controle integrado de pragas urbanas, análise ambiental, diagnóstico de qualidade do ar e água, laudo técnico e atendimento prioritário em Franca/SP e região.",
        priceRange: "$$",
        areaServed: [
          { "@type": "City", name: "Franca" },
          { "@type": "AdministrativeArea", name: "Região de Franca" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Pedro Calandria Fernandes, 1300",
          addressLocality: sentinela.geo.city,
          addressRegion: sentinela.geo.region,
          postalCode: "14407-350",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: sentinela.geo.latitude,
          longitude: sentinela.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        makesOffer: sentinela.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
            provider: { "@id": businessId },
            areaServed: "Franca/SP e região",
          },
          url: `${sentinela.url}${service.slug}`,
        })),
      },
      ...sentinela.imagePrompts.map((image) => ({
        "@type": "ImageObject",
        name: image.name,
        contentUrl: `${sentinela.url}/images/${image.fileName}`,
        caption: image.alt,
        representativeOfPage: image.name === "Hero Section",
        contentLocation: {
          "@type": "Place",
          name: "Franca, São Paulo, Brasil",
          geo: {
            "@type": "GeoCoordinates",
            latitude: sentinela.geo.latitude,
            longitude: sentinela.geo.longitude,
          },
        },
      })),
      {
        "@type": "FAQPage",
        "@id": `${sentinela.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "A Sentinela atende controle de pragas em Franca/SP?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. A Sentinela Saúde Ambiental atende Franca/SP e região com controle integrado de pragas, laudo técnico, garantia contratual e resposta prioritária.",
            },
          },
          {
            "@type": "Question",
            name: "O diagnóstico ambiental é gratuito?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "O site direciona o visitante para agendar um diagnóstico inicial via WhatsApp, onde a equipe confirma disponibilidade, urgência e escopo da vistoria.",
            },
          },
          {
            "@type": "Question",
            name: "Quais serviços a Sentinela oferece?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Sentinela oferece dedetização ecológica, controle de escorpião, barata, cupim e rato, além de orientação para qualidade do ar, água potável, condomínios, empresas e residências.",
            },
          },
        ],
      },
      {
        "@type": "ScheduleAction",
        "@id": actionId,
        name: "Agendar Diagnóstico Ambiental",
        target: sentinela.whatsapp,
        object: { "@type": "Service", name: "Diagnóstico ambiental premium" },
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
