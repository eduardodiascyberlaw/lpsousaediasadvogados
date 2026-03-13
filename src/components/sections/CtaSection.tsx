"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/*
  Final CTA section — dark bg, blue heading, white text
*/
export const CtaSection = () => {
  return (
    <section className="section" style={{ backgroundColor: "#1b1b1b" }}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display uppercase"
            style={{ fontSize: "clamp(32px, 5vw, 48px)", color: "#0e76bc" }}
          >
            PRECISA DE ACONSELHAMENTO JURÍDICO?
          </h2>
          <p className="font-body text-[18px] text-gray-400 mt-6 leading-[32px] max-w-2xl mx-auto">
            Agende uma consulta gratuita e sem compromisso. A nossa equipa está pronta
            para ouvir o seu caso e apresentar as melhores soluções.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/contacto" className="btn-cta">
              AGENDAR CONSULTA
            </Link>
            <a
              href="tel:+351211234567"
              className="btn-cta-outline"
              style={{ borderColor: "#ffffff", color: "#ffffff" }}
            >
              +351 211 234 567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
