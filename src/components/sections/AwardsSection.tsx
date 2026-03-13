"use client";

import { motion } from "framer-motion";

/*
  GNS Awards section:
  - Background: white
  - Heading: Bebas Neue Thin / 37px / #adadad / letter-spacing 1px
  - Logos in greyscale row
*/
export const AwardsSection = () => {
  return (
    <section className="bg-white section-tight">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="heading-muted mb-10">PRÉMIOS E DESTAQUES</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-50">
            {/* Placeholder award badges — greyscale */}
            {["Ordem dos Advogados", "Super Lawyers", "Top Advogado", "Legal 500", "Best Lawyers"].map((name) => (
              <div
                key={name}
                className="w-24 h-24 bg-gray-100 rounded flex items-center justify-center"
              >
                <span className="font-body text-[10px] text-gray-400 text-center leading-tight px-1">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
