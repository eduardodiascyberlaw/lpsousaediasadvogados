"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "2000+", label: "Casos Resolvidos" },
  { value: "98%", label: "Taxa de Sucesso" },
  { value: "3", label: "Idiomas de Atendimento" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.value}
              </p>
              <p className="font-body text-sm text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
