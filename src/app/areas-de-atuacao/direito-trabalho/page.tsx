import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito do Trabalho",
  description: "Advogados especialistas em Direito do Trabalho em Portugal. Despedimento, assédio laboral, acidentes de trabalho e contratos.",
};

export default function DireitoTrabalhoPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito do Trabalho"
      subtitle="Protegemos os direitos dos trabalhadores e assessoramos empresas em matéria laboral."
      intro="O Direito do Trabalho é uma das áreas mais sensíveis da prática jurídica. Na Sousa & Dias, temos uma vasta experiência na defesa de trabalhadores vítimas de despedimento ilícito, assédio laboral e acidentes de trabalho, bem como na assessoria a empresas que pretendem cumprir a legislação laboral de forma rigorosa."
      services={[
        {
          title: "Despedimento Ilícito",
          description: "Contestação de despedimentos sem justa causa, cálculo de indemnizações e representação em tribunal de trabalho.",
        },
        {
          title: "Assédio Laboral",
          description: "Apoio jurídico a vítimas de assédio moral e sexual no trabalho, incluindo queixas e acções judiciais.",
        },
        {
          title: "Acidentes de Trabalho",
          description: "Defesa dos direitos do trabalhador sinistrado, incluindo indemnização por incapacidade e pensões.",
        },
        {
          title: "Contratos de Trabalho",
          description: "Elaboração, revisão e negociação de contratos individuais e colectivos de trabalho.",
        },
        {
          title: "Processos Disciplinares",
          description: "Acompanhamento de processos disciplinares, tanto na perspectiva do trabalhador como do empregador.",
        },
        {
          title: "Negociação Colectiva",
          description: "Assessoria em negociações colectivas, acordos de empresa e instrumentos de regulamentação colectiva.",
        },
      ]}
      faqs={[
        {
          question: "Fui despedido sem justa causa. O que posso fazer?",
          answer: "Pode impugnar o despedimento no tribunal de trabalho dentro de 60 dias. Tem direito a reintegração no posto de trabalho ou a uma indemnização. Contacte-nos para analisarmos o seu caso.",
        },
        {
          question: "O que constitui assédio laboral?",
          answer: "O assédio laboral inclui comportamentos hostis e repetidos, como humilhações, isolamento, sobrecarga injustificada ou retirada de funções. A lei portuguesa protege o trabalhador nestas situações.",
        },
        {
          question: "Quanto custa um advogado de trabalho?",
          answer: "Os honorários dependem da complexidade do caso. Oferecemos uma consulta gratuita para avaliar a sua situação e apresentar uma proposta transparente.",
        },
      ]}
      relatedAreas={[
        { title: "Direito de Imigração", href: "/areas-de-atuacao/direito-imigracao" },
        { title: "Direito Penal", href: "/areas-de-atuacao/direito-penal" },
        { title: "Direito Empresarial", href: "/areas-de-atuacao/direito-empresarial" },
      ]}
    />
  );
}
