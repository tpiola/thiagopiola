import { SLUGS } from "@/lib/slugs";
import BlogPostShell from "./shell";

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostShell slug={slug} />;
}
