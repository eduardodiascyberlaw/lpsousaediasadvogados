import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito de Imigração",
  description: "Advogados especialistas em Direito de Imigração em Portugal. Vistos, autorizações de residência, Golden Visa, reagrupamento familiar e nacionalidade.",
};

export default function DireitoImigracaoPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito de Imigração"
      subtitle="Acompanhamento completo para quem quer viver, trabalhar ou investir em Portugal."
      intro="Portugal tornou-se um dos destinos mais procurados por imigrantes de todo o mundo. Na Sousa & Dias, compreendemos os desafios que enfrenta quem decide começar uma nova vida num país diferente. A nossa equipa acompanha cada cliente desde o primeiro contacto até à resolução final, garantindo que todos os procedimentos são tratados com rigor e celeridade."
      services={[
        {
          title: "Autorização de Residência",
          description: "Tratamos de todo o processo de obtenção e renovação de autorizações de residência, incluindo situações de manifestação de interesse e regularização extraordinária.",
        },
        {
          title: "Golden Visa",
          description: "Assessoria completa no programa de Autorização de Residência para Actividade de Investimento (ARI), incluindo análise de elegibilidade e acompanhamento do processo.",
        },
        {
          title: "Reagrupamento Familiar",
          description: "Auxílio na reunião de famílias em Portugal, tratando de toda a documentação necessária junto do SEF/AIMA.",
        },
        {
          title: "Nacionalidade Portuguesa",
          description: "Acompanhamento em pedidos de nacionalidade por naturalização, casamento, união de facto ou por ser descendente de judeus sefarditas.",
        },
        {
          title: "Vistos de Trabalho e Estudo",
          description: "Preparação e submissão de pedidos de visto para trabalho, estudo, estágio e actividade profissional independente.",
        },
        {
          title: "Recurso de Indeferimento",
          description: "Contestação de decisões negativas do SEF/AIMA, incluindo recursos administrativos e judiciais.",
        },
      ]}
      faqs={[
        {
          question: "Quanto tempo demora uma autorização de residência?",
          answer: "O prazo varia conforme o tipo de autorização e a carga do SEF/AIMA. Em média, o processo pode demorar entre 3 a 12 meses. Com o nosso acompanhamento, garantimos que a documentação é correctamente preparada para evitar atrasos.",
        },
        {
          question: "Posso trabalhar enquanto aguardo a autorização?",
          answer: "Sim, em muitos casos o recibo de agendamento ou a manifestação de interesse permite trabalhar legalmente em Portugal. Analisamos cada situação individualmente.",
        },
        {
          question: "O que é necessário para o reagrupamento familiar?",
          answer: "São necessários documentos que comprovem o vínculo familiar, meios de subsistência adequados e alojamento. Preparamos toda a documentação e acompanhamos o processo junto das autoridades.",
        },
        {
          question: "O Golden Visa ainda está disponível?",
          answer: "O programa foi alterado em 2023, mas continua disponível para determinados tipos de investimento. Aconselhamos sobre as opções actuais e a melhor estratégia para cada caso.",
        },
      ]}
      relatedAreas={[
        { title: "Direito do Trabalho", href: "/areas-de-atuacao/direito-trabalho" },
        { title: "Direito da Família", href: "/areas-de-atuacao/direito-familia" },
        { title: "Direito Empresarial", href: "/areas-de-atuacao/direito-empresarial" },
      ]}
    />
  );
}
