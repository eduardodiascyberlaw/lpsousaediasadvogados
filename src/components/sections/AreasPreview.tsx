"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/*
  GNS "What We Do" section exact specs:
  - Heading pattern: Bebas 104px #0e76bc + Libre italic 24px #0e76bc
  - 4-column grid with image + title + service links
  - Background: white
*/
const areas = [
  {
    title: "IMIGRAÇÃO",
    subtitle: "Vistos & Residência",
    href: "/areas-de-atuacao/direito-imigracao",
    services: [
      { label: "Autorização de Residência", href: "/areas-de-atuacao/direito-imigracao" },
      { label: "Golden Visa", href: "/areas-de-atuacao/direito-imigracao" },
      { label: "Reagrupamento Familiar", href: "/areas-de-atuacao/direito-imigracao" },
      { label: "Nacionalidade", href: "/areas-de-atuacao/direito-imigracao" },
    ],
  },
  {
    title: "TRABALHO",
    subtitle: "Direitos Laborais",
    href: "/areas-de-atuacao/direito-trabalho",
    services: [
      { label: "Despedimento Ilícito", href: "/areas-de-atuacao/direito-trabalho" },
      { label: "Assédio Laboral", href: "/areas-de-atuacao/direito-trabalho" },
      { label: "Acidentes de Trabalho", href: "/areas-de-atuacao/direito-trabalho" },
      { label: "Contratos", href: "/areas-de-atuacao/direito-trabalho" },
    ],
  },
  {
    title: "FAMÍLIA",
    subtitle: "Relações Familiares",
    href: "/areas-de-atuacao/direito-familia",
    services: [
      { label: "Divórcio", href: "/areas-de-atuacao/direito-familia" },
      { label: "Responsabilidades Parentais", href: "/areas-de-atuacao/direito-familia" },
      { label: "Pensão de Alimentos", href: "/areas-de-atuacao/direito-familia" },
      { label: "Heranças", href: "/areas-de-atuacao/direito-familia" },
    ],
  },
  {
    title: "EMPRESARIAL",
    subtitle: "Negócios & Investimento",
    href: "/areas-de-atuacao/direito-empresarial",
    services: [
      { label: "Constituição de Empresas", href: "/areas-de-atuacao/direito-empresarial" },
      { label: "Contratos Comerciais", href: "/areas-de-atuacao/direito-empresarial" },
      { label: "Compliance & RGPD", href: "/areas-de-atuacao/direito-empresarial" },
      { label: "Fusões & Aquisições", href: "/areas-de-atuacao/direito-empresarial" },
    ],
  },
];

export const AreasPreview = () => {
  return (
    <section className="bg-white section">
      <div className="container-site">
        {/* GNS heading pattern */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">O QUE</h2>
          <p className="section-subtitle mt-2">Nós Fazemos</p>
        </motion.div>

        {/* 4-column grid — GNS pattern: image + heading + service links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Image placeholder */}
              <Link href={area.href} className="block">
                <div className="aspect-[4/3] bg-gray-100 mb-6 overflow-hidden group">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <span className="font-display text-[40px] text-gray-300 tracking-[4px]">
                      {area.title.charAt(0)}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Title */}
              <h3 className="font-display text-[22px] tracking-[1px] text-[#252525] uppercase mb-3">
                {area.title}
              </h3>

              {/* Service links */}
              <ul className="space-y-2">
                {area.services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="font-body text-[14px] text-[#0e76bc] hover:underline transition-colors"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
