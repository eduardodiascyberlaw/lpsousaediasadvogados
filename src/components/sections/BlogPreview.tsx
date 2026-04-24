"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Novas Regras de Imigração em 2026: O Que Muda?",
    date: "12 Março, 2026",
    category: "Imigração",
  },
  {
    title: "Despedimento Durante a Gravidez: Conheça os Seus Direitos",
    date: "8 Março, 2026",
    category: "Trabalho",
  },
  {
    title: "Como Obter Nacionalidade Portuguesa por Naturalização",
    date: "1 Março, 2026",
    category: "Imigração",
  },
];

export const BlogPreview = () => {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-overline block mb-4">Insights</span>
            <h2 className="section-title">
              Pensamento <span className="italic text-gold">jurídico</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 font-body text-[12px] tracking-[0.12em] uppercase text-gold hover:text-navy transition-colors duration-300 mb-2"
          >
            Ver Todos os Artigos
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* Posts */}
        <div className="divide-y divide-cream-300">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/blog" className="group flex flex-col md:flex-row md:items-center justify-between py-8 gap-4">
                <div className="flex items-start gap-6">
                  <span className="font-display text-[2.5rem] text-cream-300 leading-none min-w-[2.5rem] text-right group-hover:text-gold/30 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[clamp(1.1rem,2vw,1.4rem)] text-navy group-hover:text-gold-700 transition-colors duration-300 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="font-body text-[11px] tracking-[0.1em] uppercase text-gold bg-gold/8 px-2.5 py-1">
                        {post.category}
                      </span>
                      <span className="font-body text-[13px] text-body-light">{post.date}</span>
                    </div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-cream-300 group-hover:text-gold transition-all duration-300 group-hover:translate-x-1 hidden md:block flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
