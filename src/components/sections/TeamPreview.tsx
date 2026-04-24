"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const TeamPreview = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Ambient light */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 25% 50%, rgba(201, 169, 110, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px]">
              <Image
                src="/images/team/eduardo-principal.jpg"
                alt="Dr. Eduardo Dias"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay for text readability on mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent lg:hidden" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center px-8 lg:px-16 xl:px-20 py-20 lg:py-28"
          >
            <span className="section-overline block mb-6">Sócio Fundador</span>

            <h2 className="font-display text-section-title text-white mb-3">
              Dr. Eduardo <span className="italic text-gold">Dias</span>
            </h2>

            <p className="font-body text-[13px] tracking-[0.06em] text-white/30 uppercase mb-8">
              Cédula OA n.º 59368P · Especialista em Direito de Imigração e Trabalho
            </p>

            <div className="divider-gold mb-8" />

            <blockquote className="font-serif italic text-[clamp(1.1rem,1.8vw,1.35rem)] text-white/70 leading-relaxed mb-10">
              &ldquo;Acredito que todas as pessoas merecem acesso a justiça de qualidade,
              independentemente da sua origem. É esse compromisso que me move todos os dias.
              Funcionamos como uma extensão da equipa dos nossos clientes — ouvimos primeiro,
              aconselhamos depois, e lutamos até ao fim.&rdquo;
            </blockquote>

            <Link
              href="/equipa"
              className="group inline-flex items-center gap-3 font-body text-[12px] tracking-[0.12em] uppercase text-gold hover:text-gold-300 transition-colors duration-300"
            >
              Ver Biografia Completa
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
