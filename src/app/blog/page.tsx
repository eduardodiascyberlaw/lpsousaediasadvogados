import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artigos e notícias sobre Direito de Imigração, Trabalho, Família e outras áreas. Sousa & Dias Advogados.",
};

export default function BlogPage() {
  return <BlogContent />;
}
