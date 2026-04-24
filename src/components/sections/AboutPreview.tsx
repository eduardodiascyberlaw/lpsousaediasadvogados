"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const AboutPreview = () => {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container-site">
        {/* Overline + Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <span className="section-overline block mb-4">Quem Somos</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-title max-w-xl">
              Um escritório que <span className="italic text-gold">faz a diferença</span>
            </h2>
            <div className="divider-gold hidden lg:block mb-3" />
          </div>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text — 7 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-serif text-[clamp(1.2rem,1.8vw,1.5rem)] italic text-navy leading-relaxed">
              &ldquo;Vocês não parecem advogados.&rdquo;
            </p>
            <p className="text-body-regular">
              Consideramos isso o maior elogio. A Sousa & Dias nasceu da convicção
              de que um escritório de advocacia pode ser diferente: próximo,
              transparente e verdadeiramente empenhado na vida dos seus clientes.
            </p>
            <p className="text-body-regular">
              Por isso, dedicamo-nos ao Direito de Imigração e ao Direito do
              Trabalho com uma abordagem estratégica, humana e orientada para
              resultados. Sabemos que, para quem vive fora do seu país, cada
              decisão jurídica pode ter impacto direto na estabilidade, na
              família e no futuro.
            </p>
            <p className="text-body-regular">
              Mais do que apresentar respostas genéricas, procuramos compreender
              o contexto de cada pessoa para construir soluções práticas,
              criativas e juridicamente seguras.
            </p>
            <p className="text-body-regular">
              Ouvimos primeiro. Aconselhamos com clareza. E trabalhamos com
              verdadeiro compromisso com aquilo que importa: resultados concretos
              e tranquilidade para seguir em frente.
            </p>
          </motion.div>

          {/* Image — 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 hidden lg:block" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/team/eduardo-principal.jpg"
                  alt="Dr. Eduardo Dias — Sousa & Dias Advogados"
                  fill
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
              </div>
              {/* Caption */}
              <div className="mt-5 flex items-center gap-3">
                <div className="w-8 h-px bg-gold" />
                <p className="font-body text-[12px] tracking-[0.08em] text-body-light uppercase">
                  Dr. Eduardo Dias, Sócio Fundador
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
