import { SLUGS } from "@/lib/slugs";
import BlogPostShell from "./shell";

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <BlogPostShell slug={params.slug} />;
}
