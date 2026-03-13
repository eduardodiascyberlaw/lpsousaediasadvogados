"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

const team = [
  {
    name: "Dr. Eduardo Dias",
    role: "Sócio Fundador",
    specialties: ["Direito de Imigração", "Direito do Trabalho", "Direito Penal"],
    bio: "Com mais de 15 anos de experiência, o Dr. Eduardo Dias é um dos advogados de referência em Portugal na área do Direito de Imigração. Formado pela Faculdade de Direito da Universidade de Lisboa, dedicou a sua carreira à defesa dos direitos dos imigrantes e trabalhadores. Fala fluentemente Português, Inglês e Espanhol.",
    image: "/images/team/eduardo-dias.jpg",
    linkedin: "https://www.linkedin.com/in/eduardodias",
    oaNumber: "59368P",
  },
  {
    name: "Dra. Sofia Sousa",
    role: "Sócia",
    specialties: ["Direito da Família", "Direito Empresarial", "Direito Imobiliário"],
    bio: "A Dra. Sofia Sousa traz uma abordagem humanística à prática jurídica. Especialista em Direito da Família e Sucessões, tem vasta experiência em processos de divórcio, regulação de responsabilidades parentais e partilhas. A sua dedicação ao cliente é reconhecida por todos.",
    image: null,
    linkedin: null,
    oaNumber: null,
  },
];

const values = [
  {
    title: "Proximidade",
    description: "Tratamos cada cliente como único. Ouvimos, compreendemos e acompanhamos em cada fase do processo.",
  },
  {
    title: "Transparência",
    description: "Comunicação clara sobre honorários, prazos e expectativas. Sem surpresas.",
  },
  {
    title: "Excelência",
    description: "Formação contínua e rigor técnico para garantir as melhores soluções jurídicas.",
  },
  {
    title: "Compromisso",
    description: "Defendemos os seus direitos com a mesma determinação como se fossem os nossos.",
  },
];

export const EquipaContent = () => {
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
            <h1 className="section-title">EQUIPA</h1>
            <p className="section-subtitle mt-3">Profissionais Dedicados à Defesa dos Seus Direitos</p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i > 0 ? "mt-20 pt-20 border-t border-gray-200" : ""
              }`}
            >
              {/* Photo */}
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative max-w-[400px] mx-auto">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0e76bc]/5 to-[#0e76bc]/10">
                      <span className="font-display text-6xl text-[#0e76bc]/20">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2
                  className="font-display uppercase text-[#252525]"
                  style={{ fontSize: "clamp(28px, 3vw, 40px)", letterSpacing: "2px" }}
                >
                  {member.name}
                </h2>
                <p className="font-body text-[#0e76bc] font-semibold text-[16px] mt-2">{member.role}</p>
                {member.oaNumber && (
                  <p className="font-body text-[14px] text-[#adadad] mt-1">
                    Cédula OA n.º {member.oaNumber}
                  </p>
                )}
                <div className="w-12 h-[2px] bg-[#0e76bc] mt-4 mb-6" />
                <p className="text-body-regular mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="inline-block px-3 py-1 bg-[#f8fafc] text-[14px] font-body text-[#252525] border border-gray-200"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-[14px] text-[#0e76bc] hover:text-[#0a5d96] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="section-title">VALORES</h2>
            <p className="section-subtitle mt-3">Os Princípios Que Nos Definem</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-[#f8fafc] border border-gray-100"
              >
                <h3 className="font-display text-[24px] tracking-[2px] text-[#0e76bc] uppercase mb-3">
                  {value.title}
                </h3>
                <p className="text-body-regular">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
