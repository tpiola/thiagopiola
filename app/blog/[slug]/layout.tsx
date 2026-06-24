import type { Metadata } from "next";
import { site } from "@/lib/content";
import { blogPosts } from "@/lib/blog-data";
import { SLUGS } from "@/lib/slugs";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post — Thiago Piola",
      description: "Artigo do blog de Thiago Piola — Farmácia, Tecnologia e Gestão.",
    };
  }

  const title = post.seo.titleTag;
  const description = post.seo.metaDescription;
  const url = post.seo.url;

  return {
    title,
    description,
    keywords: [
      post.category.toLowerCase(),
      "farmácia",
      "saúde",
      "Thiago Piola",
      "blog farmácia",
      "CRF/SP 58.519",
    ],
    authors: [{ name: "Thiago Biasoli Garcia Piola", url: site.url }],
    openGraph: {
      title,
      description,
      url,
      locale: "pt_BR",
      type: "article",
      publishedTime: post.date,
      authors: ["Thiago Piola"],
      siteName: "Thiago Piola — Farmacêutico CRF/SP 58.519",
      images: [
        {
          url: "/images/og-card.webp",
          width: 1200,
          height: 630,
          alt: title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@ThiagoPiola07",
      images: ["/images/og-card.webp"],
    },
    alternates: {
      canonical: url,
      languages: {
        "pt-BR": url,
        en: url,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
