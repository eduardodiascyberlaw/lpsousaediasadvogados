"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const areas = [
  {
    title: "Imigração",
    subtitle: "Vistos & Residência",
    href: "/areas-de-atuacao/direito-imigracao",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    services: [
      "Autorização de Residência",
      "Golden Visa",
      "Reagrupamento Familiar",
      "Nacionalidade",
    ],
  },
  {
    title: "Trabalho",
    subtitle: "Direitos Laborais",
    href: "/areas-de-atuacao/direito-trabalho",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    services: [
      "Despedimento Ilícito",
      "Assédio Laboral",
      "Acidentes de Trabalho",
      "Contratos",
    ],
  },
  {
    title: "Família",
    subtitle: "Relações Familiares",
    href: "/areas-de-atuacao/direito-familia",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    services: [
      "Divórcio",
      "Responsabilidades Parentais",
      "Pensão de Alimentos",
      "Heranças",
    ],
  },
  {
    title: "Empresarial",
    subtitle: "Negócios & Investimento",
    href: "/areas-de-atuacao/direito-empresarial",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    services: [
      "Constituição de Empresas",
      "Contratos Comerciais",
      "Compliance & RGPD",
      "Fusões & Aquisições",
    ],
  },
];

export const AreasPreview = () => {
  return (
    <section className="section" style={{ background: "var(--cream)" }}>
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="section-overline block mb-4">Áreas de Prática</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="section-title max-w-lg">
              Expertise que <span className="italic text-gold">protege</span>
            </h2>
            <p className="text-body-regular text-body-light max-w-md">
              Especializados em áreas do direito que mais impactam a vida
              de quem vive e trabalha em Portugal.
            </p>
          </div>
        </motion.div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={area.href} className="group block">
                <div className="p-8 bg-white border border-cream-300 hover:border-gold/30 hover:shadow-luxury transition-all duration-500 h-full">
                  {/* Icon */}
                  <div className="text-gold/60 group-hover:text-gold transition-colors duration-300 mb-6">
                    {area.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[1.35rem] text-navy mb-1 group-hover:text-gold-700 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="font-body text-[12px] tracking-[0.06em] text-body-light uppercase mb-6">
                    {area.subtitle}
                  </p>

                  {/* Service list */}
                  <ul className="space-y-2.5 border-t border-cream-300 pt-6">
                    {area.services.map((service) => (
                      <li
                        key={service}
                        className="font-body text-[13px] text-body-light flex items-center gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                    <span className="font-body text-[11px] tracking-[0.1em] uppercase">Saber mais</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
