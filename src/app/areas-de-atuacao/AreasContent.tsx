"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

const areas = [
  {
    title: "Direito de Imigração",
    description: "Ajudamos quem chega a Portugal a regularizar a sua situação, obter vistos, autorizações de residência, reagrupamento familiar e nacionalidade portuguesa.",
    href: "/areas-de-atuacao/direito-imigracao",
    services: ["Autorização de Residência", "Golden Visa", "Reagrupamento Familiar", "Nacionalidade Portuguesa", "Vistos de Trabalho", "Recurso de Indeferimento"],
  },
  {
    title: "Direito do Trabalho",
    description: "Defendemos os direitos dos trabalhadores e assessoramos empresas em matéria laboral, desde contratos até processos de despedimento.",
    href: "/areas-de-atuacao/direito-trabalho",
    services: ["Despedimento Ilícito", "Assédio Laboral", "Acidentes de Trabalho", "Contratos de Trabalho", "Negociação Colectiva", "Processos Disciplinares"],
  },
  {
    title: "Direito da Família",
    description: "Acompanhamento sensível e rigoroso em processos familiares, priorizando sempre o superior interesse das crianças.",
    href: "/areas-de-atuacao/direito-familia",
    services: ["Divórcio", "Responsabilidades Parentais", "Pensão de Alimentos", "Adopção", "União de Facto", "Heranças e Sucessões"],
  },
  {
    title: "Direito Penal",
    description: "Defesa criminal especializada, com experiência em crimes contra pessoas, crimes económicos e violência doméstica.",
    href: "/areas-de-atuacao/direito-penal",
    services: ["Defesa Criminal", "Crimes Económicos", "Violência Doméstica", "Crimes Rodoviários", "Recursos", "Medidas de Coacção"],
  },
  {
    title: "Direito Empresarial",
    description: "Assessoria jurídica completa para empresas, desde a constituição até operações complexas de reestruturação.",
    href: "/areas-de-atuacao/direito-empresarial",
    services: ["Constituição de Empresas", "Contratos Comerciais", "Compliance", "Governança Corporativa", "Fusões e Aquisições", "Contencioso Comercial"],
  },
  {
    title: "Direito Imobiliário",
    description: "Acompanhamento em todas as fases de operações imobiliárias, garantindo segurança jurídica nas suas transações.",
    href: "/areas-de-atuacao/direito-imobiliario",
    services: ["Compra e Venda", "Arrendamento", "Licenciamento", "Due Diligence", "Contencioso Imobiliário", "Propriedade Horizontal"],
  },
];

export const AreasContent = () => {
  return (
    <>
      {/* Page Hero — GNS style */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">ÁREAS DE ACTUAÇÃO</h1>
            <p className="section-subtitle mt-3">Uma Equipa Multidisciplinar ao Seu Serviço</p>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow space-y-12">
          {areas.map((area, i) => (
            <motion.div
              key={area.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white border border-gray-100 p-8 md:p-12 hover:shadow-lg transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="font-display text-[28px] tracking-[2px] text-[#0e76bc] uppercase mb-4">
                    {area.title}
                  </h2>
                  <p className="text-body-regular mb-6">{area.description}</p>
                  <Link href={area.href} className="btn-cta-outline text-[14px]">
                    Saber Mais
                  </Link>
                </div>
                <div>
                  <h4 className="font-body text-[12px] font-semibold tracking-[0.15em] uppercase text-[#0e76bc] mb-4">
                    Serviços
                  </h4>
                  <ul className="space-y-2">
                    {area.services.map((service) => (
                      <li key={service} className="font-body text-[14px] text-[#252525] flex items-start gap-2">
                        <span className="text-[#0e76bc] mt-1">&#8226;</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
};
