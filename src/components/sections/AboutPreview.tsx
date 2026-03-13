"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/*
  GNS "Welcome" section exact specs:
  - Background: white #ffffff
  - Layout: Title centrado no topo + 2 colunas (texto esq / imagem dir)
  - "BEM-VINDO": Bebas Neue Thin / 104px / #0e76bc / letter-spacing 30px
  - "Para a Sousa & Dias": Libre Baskerville italic / 24px / #0e76bc
  - Body bold: Montserrat / 18px / Bold 700 / uppercase / #252525
  - Body text: Montserrat / 18px / Regular 400 / #252525 / line-height 32px
*/
export const AboutPreview = () => {
  return (
    <section className="bg-white section">
      <div className="container-site">
        {/* GNS heading pattern — centrado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">BEM-VINDO</h2>
          <p className="section-subtitle mt-2">à Sousa & Dias Advogados</p>
        </motion.div>

        {/* Two columns: text left / image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-body-bold mb-6">
              NÃO SOMOS UM ESCRITÓRIO DE ADVOCACIA TRADICIONAL. E ISSO É INTENCIONAL.
            </p>
            <p className="text-body-regular mb-6">
              Na Sousa & Dias, acreditamos que a advocacia pode ser mais próxima,
              mais clara e mais útil para a vida real dos clientes.
            </p>
            <p className="text-body-regular mb-6">
              Por isso, dedicamo-nos ao Direito de Imigração e ao Direito do
              Trabalho com uma abordagem estratégica, humana e orientada para
              resultados. Sabemos que, para quem vive fora do seu país, cada
              decisão jurídica pode ter impacto direto na estabilidade, na
              família e no futuro.
            </p>
            <p className="text-body-regular mb-6">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative aspect-[9/10] max-w-[520px] mx-auto">
              <Image
                src="/images/team/eduardo-casual.jpg"
                alt="Dr. Eduardo Dias — Sousa & Dias Advogados"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
