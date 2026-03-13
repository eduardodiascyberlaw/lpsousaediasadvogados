"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/*
  GNS Blog section:
  - Heading pattern: section-title + section-subtitle
  - 3 blog post titles with dates in list format
  - "Ver Blog" link
*/
const posts = [
  { title: "Novas Regras de Imigração em 2026: O Que Muda?", date: "12 Março, 2026" },
  { title: "Despedimento Durante a Gravidez: Conheça os Seus Direitos", date: "8 Março, 2026" },
  { title: "Como Obter Nacionalidade Portuguesa por Naturalização", date: "1 Março, 2026" },
];

export const BlogPreview = () => {
  return (
    <section className="bg-white section">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">BLOG</h2>
          <p className="section-subtitle mt-2">Pensamento Jurídico de Vanguarda</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b border-gray-200 py-6 first:pt-0 last:border-0"
            >
              <Link href="/blog" className="group block">
                <h3 className="font-body text-[18px] font-bold text-[#252525] group-hover:text-[#0e76bc] transition-colors uppercase">
                  {post.title}
                </h3>
                <p className="font-body text-[14px] text-gray-500 mt-2">{post.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="font-display text-[16px] tracking-[2px] uppercase text-[#0e76bc] hover:text-[#0a5d96] transition-colors inline-flex items-center gap-2"
          >
            VER BLOG
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
