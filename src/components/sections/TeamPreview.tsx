"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/*
  GNS Founder section:
  - 2 columns: image left, text right
  - Heading pattern: Bebas 104px #0e76bc + Libre italic 24px #0e76bc
  - Quote: italic, serif
  - "VIEW FULL BIO" link
*/
export const TeamPreview = () => {
  return (
    <section className="bg-white section">
      <div className="container-site">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">ENCONTRAR</h2>
          <p className="section-subtitle mt-2">A Força Motriz Por Trás da Nossa Inovação Jurídica</p>
        </motion.div>

        {/* 2-column layout: photo left / quote right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[3/4] max-w-[400px] mx-auto lg:mx-0">
              <Image
                src="/images/team/eduardo-dias.jpg"
                alt="Dr. Eduardo Dias"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h3
              className="font-display uppercase mb-4"
              style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#252525", letterSpacing: "2px" }}
            >
              DR. EDUARDO DIAS
            </h3>

            <p className="font-serif italic text-[18px] leading-[32px] text-[#252525] mb-6">
              &ldquo;Acredito que todas as pessoas merecem acesso a justiça de qualidade,
              independentemente da sua origem. É esse compromisso que me move todos os dias.
              Funcionamos como uma extensão da equipa dos nossos clientes — ouvimos primeiro,
              aconselhamos depois, e lutamos até ao fim.&rdquo;
            </p>

            <p className="font-body text-[14px] text-[#252525] mb-1">
              <strong>Sócio Fundador</strong> · Cédula OA n.º 59368P
            </p>
            <p className="font-body text-[14px] text-gray-500 mb-6">
              Especialista em Direito de Imigração e Trabalho
            </p>

            <Link
              href="/equipa"
              className="font-display text-[16px] tracking-[2px] uppercase text-[#0e76bc] hover:text-[#0a5d96] transition-colors inline-flex items-center gap-2"
            >
              VER BIOGRAFIA COMPLETA
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
