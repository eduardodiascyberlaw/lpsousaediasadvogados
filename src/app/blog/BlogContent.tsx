"use client";

import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

const posts = [
  {
    title: "Novas Regras de Imigração em 2026: O Que Muda?",
    excerpt: "O governo português anunciou alterações significativas à lei de estrangeiros. Saiba quais são as principais mudanças e como afectam o seu processo.",
    date: "12 Mar 2026",
    category: "Imigração",
    readTime: "5 min",
  },
  {
    title: "Despedimento Durante a Gravidez: Os Seus Direitos",
    excerpt: "A lei portuguesa protege as trabalhadoras grávidas contra o despedimento. Conheça os seus direitos e o que fazer se for despedida durante a gravidez.",
    date: "8 Mar 2026",
    category: "Trabalho",
    readTime: "4 min",
  },
  {
    title: "Como Obter Nacionalidade Portuguesa por Naturalização",
    excerpt: "Guia completo sobre os requisitos, documentação e procedimentos para obter a nacionalidade portuguesa por naturalização.",
    date: "1 Mar 2026",
    category: "Imigração",
    readTime: "7 min",
  },
  {
    title: "Guarda Partilhada vs Guarda Exclusiva: Diferenças e Implicações",
    excerpt: "Entenda as diferenças entre os dois regimes de guarda e como o tribunal decide no melhor interesse da criança.",
    date: "22 Fev 2026",
    category: "Família",
    readTime: "6 min",
  },
  {
    title: "Criar Empresa em Portugal: Guia para Estrangeiros",
    excerpt: "Tudo o que precisa saber sobre constituição de empresas em Portugal, desde o NIF até ao licenciamento.",
    date: "15 Fev 2026",
    category: "Empresarial",
    readTime: "8 min",
  },
  {
    title: "Assédio Laboral: Como Identificar e O Que Fazer",
    excerpt: "O assédio no trabalho é um problema crescente. Saiba como identificá-lo, documentá-lo e que passos legais tomar.",
    date: "8 Fev 2026",
    category: "Trabalho",
    readTime: "5 min",
  },
];

export const BlogContent = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">BLOG</h1>
            <p className="section-subtitle mt-3">Artigos e Análises Jurídicas</p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-gray-50 flex items-center justify-center">
                  <span className="font-display text-3xl text-[#0e76bc]/20">S&D</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-[#f8fafc] text-[12px] font-body font-medium text-[#0e76bc] border border-gray-100">
                      {post.category}
                    </span>
                    <span className="font-body text-[12px] text-[#adadad]">{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-[18px] tracking-[1px] uppercase text-[#252525] mb-2 group-hover:text-[#0e76bc] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-[14px] text-gray-500 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-body text-[12px] text-[#adadad]">{post.date}</span>
                    <span className="font-body text-[14px] font-medium text-[#0e76bc] group-hover:translate-x-1 transition-transform">
                      Ler &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
