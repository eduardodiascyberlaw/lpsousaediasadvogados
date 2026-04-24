"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-end overflow-hidden" style={{ background: "#0a1628" }}>
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201, 169, 110, 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-5 lg:px-10 pointer-events-none">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute top-0 bottom-0 w-px hidden lg:block"
            style={{
              left: `${25 * (i + 1)}%`,
              background: "rgba(201, 169, 110, 0.04)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end min-h-[calc(100vh-88px)]">
          {/* Left — Copy */}
          <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-10 h-px bg-gold" />
              <span className="font-body text-[12px] font-medium tracking-[0.2em] uppercase text-gold">
                Sousa & Dias Advogados
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-hero-xl text-white mb-8"
            >
              Caminhar{" "}
              <span className="italic text-gold">ao seu</span>
              <br />
              lado.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="font-serif text-[clamp(1.15rem,2vw,1.4rem)] text-white/50 max-w-md leading-relaxed mb-12"
            >
              Direito de Imigração e Trabalho com uma abordagem
              estratégica, humana e orientada para resultados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contacto" className="btn-primary">
                <span>Agendar Consulta</span>
              </Link>
              <Link href="/areas-de-atuacao" className="btn-outline border-white/20 text-white/70 hover:bg-white/5 hover:text-white hover:border-white/30">
                Áreas de Actuação
              </Link>
            </motion.div>

            {/* Stats ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex gap-12 mt-16 pt-8 border-t border-white/[0.06]"
            >
              {[
                { value: "15+", label: "Anos" },
                { value: "2000+", label: "Casos" },
                { value: "98%", label: "Sucesso" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] text-gold font-light">{stat.value}</p>
                  <p className="font-body text-[11px] tracking-[0.12em] uppercase text-white/30 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[85vh] max-h-[800px]">
              {/* Gold accent bar */}
              <div className="absolute top-[10%] -left-6 w-1 h-[30%] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

              <Image
                src="/images/team/eduardo-principal.jpg"
                alt="Dr. Eduardo Dias — Sousa & Dias Advogados"
                fill
                className="object-cover object-top"
                sizes="50vw"
                priority
                style={{
                  maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
                }}
              />

              {/* Subtle overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-navy-900 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile portrait (below copy) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="lg:hidden absolute bottom-0 right-0 w-[60%] h-[45%] opacity-20"
      >
        <Image
          src="/images/team/eduardo-principal.jpg"
          alt="Dr. Eduardo Dias"
          fill
          className="object-cover object-top"
          sizes="60vw"
          style={{
            maskImage: "linear-gradient(to left, black 30%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
};
