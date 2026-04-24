"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export const NavigateSection = () => {
  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--cream-warm)" }}>
      {/* Decorative corner lines */}
      <div className="absolute top-12 left-12 w-20 h-20 border-t border-l border-gold/10 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-20 h-20 border-b border-r border-gold/10 hidden lg:block" />

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="divider-gold mx-auto mb-8" />
          <h2 className="font-display text-section-title text-navy mb-8">
            Vamos Navegar <span className="italic text-gold">Juntos</span>
          </h2>
          <p className="text-body-regular max-w-2xl mx-auto text-body-light">
            Sabemos que enfrentar questões legais pode ser intimidante. É por isso
            que estamos aqui — para simplificar o complexo, defender os seus direitos
            e guiá-lo em cada passo. Seja um{" "}
            <Link href="/areas-de-atuacao/direito-imigracao" className="text-gold hover:text-gold-700 transition-colors border-b border-gold/30 hover:border-gold">
              processo de imigração
            </Link>{" "}
            ou uma{" "}
            <Link href="/areas-de-atuacao/direito-trabalho" className="text-gold hover:text-gold-700 transition-colors border-b border-gold/30 hover:border-gold">
              questão laboral
            </Link>
            , a sua tranquilidade é a nossa prioridade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
