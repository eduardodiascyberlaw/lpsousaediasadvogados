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
              OS CLIENTES COSTUMAM NOS DIZER, &ldquo;VOCÊS NÃO PARECEM ADVOGADOS.&rdquo;
            </p>
            <p className="text-body-regular mb-6">
              Consideramos isso o maior elogio. A Sousa & Dias nasceu da convicção
              de que um escritório de advocacia pode ser diferente: próximo,
              transparente e verdadeiramente empenhado na vida dos seus clientes.
            </p>
            <p className="text-body-regular mb-6">
              Especializamo-nos em Direito de Imigração e Direito do Trabalho
              porque acreditamos que quem chega a Portugal merece um
              acompanhamento jurídico de excelência — não apenas competente, mas
              humano.
            </p>
            <p className="text-body-regular">
              Funcionamos como uma extensão da sua equipa. Ouvimos primeiro,
              aconselhamos depois. E lutamos por resultados reais.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <Image
                src="/images/team/eduardo-dias.jpg"
                alt="Sousa & Dias Advogados"
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
