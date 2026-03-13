import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito Penal",
  description: "Advogados de defesa criminal em Portugal. Crimes contra pessoas, crimes económicos, violência doméstica e recursos.",
};

export default function DireitoPenalPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito Penal"
      subtitle="Defesa criminal especializada, garantindo os seus direitos constitucionais em todas as fases do processo."
      intro="Quando a sua liberdade está em jogo, precisa de um advogado que lute por si com determinação e competência. Na Sousa & Dias, asseguramos uma defesa criminal rigorosa, respeitando os direitos fundamentais do arguido e trabalhando para o melhor resultado possível."
      services={[
        {
          title: "Defesa Criminal",
          description: "Representação em todas as fases do processo penal, desde o inquérito à sentença e recurso.",
        },
        {
          title: "Crimes Económicos",
          description: "Defesa em processos de fraude fiscal, branqueamento de capitais, burla e outros crimes económicos.",
        },
        {
          title: "Violência Doméstica",
          description: "Representação de vítimas e defesa de arguidos em processos de violência doméstica.",
        },
        {
          title: "Crimes Rodoviários",
          description: "Defesa em processos de condução sob influência, homicídio e ofensas corporais por negligência.",
        },
        {
          title: "Medidas de Coacção",
          description: "Contestação de prisão preventiva e outras medidas de coacção restritivas da liberdade.",
        },
        {
          title: "Recursos",
          description: "Interposição de recursos para o Tribunal da Relação e Supremo Tribunal de Justiça.",
        },
      ]}
      faqs={[
        {
          question: "Fui detido. O que devo fazer?",
          answer: "Tem o direito de permanecer em silêncio e de contactar um advogado imediatamente. Não preste declarações sem a presença do seu advogado. Contacte-nos para assistência imediata.",
        },
        {
          question: "O que é a prisão preventiva?",
          answer: "A prisão preventiva é uma medida de coacção excepcional, aplicada apenas em casos graves. Pode ser contestada e revista periodicamente.",
        },
        {
          question: "Posso ser julgado sem advogado?",
          answer: "Não. Em Portugal, a presença de advogado é obrigatória em julgamento penal. Se não tiver advogado, o tribunal nomeia um defensor oficioso.",
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
