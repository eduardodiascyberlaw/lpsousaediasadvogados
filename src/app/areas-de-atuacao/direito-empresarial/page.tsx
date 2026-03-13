import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito Empresarial",
  description: "Assessoria jurídica empresarial em Portugal. Constituição de empresas, contratos comerciais, compliance e governança corporativa.",
};

export default function DireitoEmpresarialPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito Empresarial"
      subtitle="Assessoria jurídica estratégica para o crescimento seguro do seu negócio em Portugal."
      intro="Abrir e gerir um negócio em Portugal requer conhecimento profundo do enquadramento legal. A Sousa & Dias acompanha empreendedores e empresas em todas as fases da vida corporativa, desde a constituição até à reestruturação, com especial foco em investidores estrangeiros."
      services={[
        {
          title: "Constituição de Empresas",
          description: "Criação de sociedades comerciais, escolha da forma jurídica adequada e registo na conservatória.",
        },
        {
          title: "Contratos Comerciais",
          description: "Elaboração, revisão e negociação de contratos de fornecimento, distribuição, franquia e licenciamento.",
        },
        {
          title: "Compliance",
          description: "Implementação de programas de conformidade regulatória, RGPD e prevenção de branqueamento de capitais.",
        },
        {
          title: "Governança Corporativa",
          description: "Estruturação de órgãos sociais, pactos parassociais e acordos de sócios.",
        },
        {
          title: "Fusões e Aquisições",
          description: "Due diligence, negociação e execução de operações de M&A em Portugal.",
        },
        {
          title: "Contencioso Comercial",
          description: "Representação em litígios comerciais, cobrança de créditos e processos de insolvência.",
        },
      ]}
      faqs={[
        {
          question: "Qual a melhor forma jurídica para a minha empresa?",
          answer: "Depende do tipo de negócio, número de sócios e volume de negócios. As formas mais comuns são a Unipessoal Lda. (1 sócio), Lda. (2+ sócios) e S.A. (grandes empresas). Aconselhamos a melhor opção para o seu caso.",
        },
        {
          question: "Quanto custa criar uma empresa em Portugal?",
          answer: "Os custos de registo rondam os 360€ na conservatória. Com os nossos serviços de assessoria incluidos, garantimos que todo o processo é tratado correctamente desde o início.",
        },
        {
          question: "Preciso de NIF português para criar uma empresa?",
          answer: "Sim. Estrangeiros precisam de obter um NIF português antes de constituir uma empresa. Podemos tratar de todo o processo, incluindo a nomeação de representante fiscal se necessário.",
        },
      ]}
      relatedAreas={[
        { title: "Direito Imobiliário", href: "/areas-de-atuacao/direito-imobiliario" },
        { title: "Direito do Trabalho", href: "/areas-de-atuacao/direito-trabalho" },
        { title: "Direito de Imigração", href: "/areas-de-atuacao/direito-imigracao" },
      ]}
    />
  );
}
