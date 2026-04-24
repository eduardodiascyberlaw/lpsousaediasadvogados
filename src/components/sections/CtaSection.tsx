"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Ambient gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 60% at 20% 80%, rgba(201, 169, 110, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 40% 50% at 80% 20%, rgba(201, 169, 110, 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-narrow text-center relative z-10 py-28 lg:py-36 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="divider-gold mx-auto mb-10" />

          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight mb-6">
            Precisa de aconselhamento{" "}
            <span className="italic text-gold">jurídico</span>?
          </h2>

          <p className="font-serif text-[clamp(1rem,1.5vw,1.2rem)] text-white/40 max-w-xl mx-auto leading-relaxed mb-12">
            Agende uma consulta gratuita e sem compromisso. A nossa equipa está pronta
            para ouvir o seu caso e apresentar as melhores soluções.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary border-gold">
              <span>Agendar Consulta</span>
            </Link>
            <a
              href="tel:+351211234567"
              className="btn-outline border-white/15 text-white/60 hover:bg-white/5 hover:text-white hover:border-white/25"
            >
              +351 211 234 567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
