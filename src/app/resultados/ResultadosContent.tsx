"use client";

import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

const results = [
  {
    area: "Imigração",
    title: "Autorização de Residência após 3 Indeferimentos",
    description: "Cliente brasileiro com três recusas anteriores obteve autorização de residência definitiva após recurso contencioso administrativo.",
    result: "Aprovado",
    highlight: true,
  },
  {
    area: "Trabalho",
    title: "Indemnização por Despedimento Ilícito",
    description: "Trabalhadora despedida durante a gravidez obteve indemnização superior a 25.000\u20AC e reintegração no posto de trabalho.",
    result: "25.000\u20AC+ recuperados",
    highlight: true,
  },
  {
    area: "Família",
    title: "Reagrupamento Familiar em 4 Meses",
    description: "Família de 5 membros reunida em Portugal num prazo recorde, com toda a documentação tratada pelo nosso escritório.",
    result: "Reunificação concluída",
    highlight: false,
  },
  {
    area: "Penal",
    title: "Absolvição em Caso de Crime Económico",
    description: "Empresário acusado de fraude fiscal absolvido após defesa que demonstrou ausência de dolo.",
    result: "Absolvido",
    highlight: true,
  },
  {
    area: "Empresarial",
    title: "Constituição de 15 Empresas para Investidores Estrangeiros",
    description: "Assessoria completa na criação de 15 empresas para investidores de 8 países diferentes, incluindo NIF, conta bancária e licenciamento.",
    result: "15 empresas criadas",
    highlight: false,
  },
  {
    area: "Imobiliário",
    title: "Resolução de Litígio de Arrendamento",
    description: "Senhorio recuperou imóvel ocupado ilegalmente há 3 anos através de acção de despejo, com pagamento de rendas em atraso.",
    result: "Imóvel recuperado",
    highlight: false,
  },
];

export const ResultadosContent = () => {
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
            <h1 className="section-title">RESULTADOS</h1>
            <p className="section-subtitle mt-3">Casos de Sucesso Que Demonstram o Nosso Compromisso</p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-8 transition-shadow ${
                  item.highlight
                    ? "bg-[#1b1b1b] text-white hover:shadow-xl"
                    : "bg-white border border-gray-200 hover:shadow-lg"
                }`}
              >
                <span className={`inline-block px-3 py-1 text-[12px] font-body font-medium mb-4 ${
                  item.highlight
                    ? "bg-white/10 text-[#0e76bc]"
                    : "bg-[#f8fafc] text-[#0e76bc] border border-gray-100"
                }`}>
                  {item.area}
                </span>
                <h3 className={`font-display text-[20px] tracking-[1px] uppercase mb-3 ${
                  item.highlight ? "text-white" : "text-[#252525]"
                }`}>
                  {item.title}
                </h3>
                <p className={`font-body text-[14px] mb-4 leading-relaxed ${
                  item.highlight ? "text-gray-400" : "text-gray-500"
                }`}>
                  {item.description}
                </p>
                <p className="font-body text-[14px] font-semibold text-[#0e76bc]">
                  {item.result}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border border-gray-200 text-center">
            <p className="font-body text-[13px] text-gray-500">
              Nota: Os resultados apresentados são reais mas anonimizados para protecção dos nossos clientes.
              Resultados passados não garantem resultados futuros. Cada caso é único e analisado individualmente.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
