"use client";

import { motion } from "framer-motion";

const credentials = [
  { name: "Ordem dos Advogados", abbr: "OA" },
  { name: "Super Lawyers", abbr: "SL" },
  { name: "Top Advogado", abbr: "TA" },
  { name: "Legal 500", abbr: "L5" },
  { name: "Best Lawyers", abbr: "BL" },
];

export const AwardsSection = () => {
  return (
    <section className="section-tight relative overflow-hidden" style={{ background: "var(--navy)" }}>
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201, 169, 110, 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-body text-[11px] tracking-[0.2em] uppercase text-white/25">
            Reconhecimento & Credenciais
          </span>

          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16 mt-10">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-full border border-gold/15 flex items-center justify-center group-hover:border-gold/40 transition-colors duration-500">
                  <span className="font-display text-[18px] text-gold/40 group-hover:text-gold/80 transition-colors duration-500">
                    {cred.abbr}
                  </span>
                </div>
                <span className="font-body text-[10px] tracking-[0.1em] text-white/20 uppercase text-center max-w-[100px] leading-tight">
                  {cred.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
