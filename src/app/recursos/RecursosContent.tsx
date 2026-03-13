"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

const guides = [
  {
    title: "Guia de Imigração para Portugal",
    description: "Tudo o que precisa saber sobre vistos, autorizações de residência e regularização em Portugal.",
    category: "Imigração",
    type: "PDF",
  },
  {
    title: "Checklist: Direitos do Trabalhador",
    description: "Os seus direitos fundamentais enquanto trabalhador em Portugal, incluindo férias, horário e despedimento.",
    category: "Trabalho",
    type: "PDF",
  },
  {
    title: "Guia de Divórcio em Portugal",
    description: "Passo a passo do processo de divórcio, documentação necessária e custos estimados.",
    category: "Família",
    type: "PDF",
  },
  {
    title: "Como Criar Empresa em Portugal",
    description: "Guia prático com todos os passos para constituir uma empresa, do NIF ao licenciamento.",
    category: "Empresarial",
    type: "PDF",
  },
];

const faqs = [
  {
    question: "Quanto custa a primeira consulta?",
    answer: "A primeira consulta é gratuita e sem compromisso. Serve para avaliar o seu caso e apresentar as opções disponíveis.",
  },
  {
    question: "Em que idiomas atendem?",
    answer: "Atendemos em Português, Inglês e Espanhol.",
  },
  {
    question: "Podem tratar do meu caso à distância?",
    answer: "Sim. Muitos dos nossos processos são tratados remotamente via videoconferência. Apenas comparecem presencialmente quando estritamente necessário.",
  },
  {
    question: "Quanto tempo demora um processo de imigração?",
    answer: "Depende do tipo de processo. Uma autorização de residência pode demorar 3 a 12 meses. A nacionalidade pode demorar 1 a 3 anos. Cada caso é único.",
  },
  {
    question: "Quais são os vossos honorários?",
    answer: "Os honorários dependem da complexidade do caso. Após a consulta gratuita, apresentamos uma proposta detalhada e transparente. Não há custos ocultos.",
  },
  {
    question: "Trabalham com apoio judiciário?",
    answer: "Sim. Podemos ajudá-lo a requerer apoio judiciário (protecção jurídica) junto da Segurança Social se preencher os requisitos legais.",
  },
];

const links = [
  { title: "SEF / AIMA", url: "https://www.aima.gov.pt", description: "Agência para a Integração, Migrações e Asilo" },
  { title: "Ordem dos Advogados", url: "https://portal.oa.pt", description: "Portal da Ordem dos Advogados de Portugal" },
  { title: "DGAJ", url: "https://dgaj.justica.gov.pt", description: "Direcção-Geral da Administração da Justiça" },
  { title: "Citius", url: "https://citius.tribunaisnet.mj.pt", description: "Portal dos tribunais portugueses" },
];

export const RecursosContent = () => {
  return (
    <>
      {/* Page Hero */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="section-title">RECURSOS</h1>
            <p className="section-subtitle mt-3">Guias, Checklists e Informação Útil</p>
          </motion.div>
        </div>
      </section>

      {/* Guides */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          <SectionHeading
            tag="Guias e Checklists"
            title="RECURSOS GRATUITOS"
            subtitle="Materiais práticos para o ajudar a compreender os seus direitos e procedimentos legais."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow flex gap-4"
              >
                <div className="w-12 h-12 bg-[#0e76bc]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0e76bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-body text-[12px] font-medium text-[#0e76bc]">{guide.category} &middot; {guide.type}</span>
                  <h3 className="font-display text-[18px] tracking-[1px] uppercase text-[#252525] mt-1 mb-2">{guide.title}</h3>
                  <p className="font-body text-[14px] text-gray-500">{guide.description}</p>
                  <span className="inline-block mt-3 font-body text-[14px] font-medium text-[#0e76bc]">
                    Brevemente disponível
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            tag="Perguntas Frequentes"
            title="DÚVIDAS GERAIS"
            subtitle="Respostas às perguntas mais comuns dos nossos clientes."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[#f8fafc] border border-gray-200 group"
              >
                <summary className="px-6 py-4 cursor-pointer font-body font-medium text-[#252525] hover:text-[#0e76bc] transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#0e76bc] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="font-body text-[14px] text-gray-500">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          <SectionHeading
            tag="Links Úteis"
            title="ENTIDADES RELEVANTES"
            subtitle="Links oficiais para entidades jurídicas portuguesas."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-gray-200 p-5 text-center hover:shadow-lg transition-shadow"
              >
                <h4 className="font-body text-[14px] font-semibold text-[#252525]">{link.title}</h4>
                <p className="font-body text-[12px] text-gray-500 mt-1">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
