import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito da Família",
  description: "Advogados especialistas em Direito da Família em Portugal. Divórcio, responsabilidades parentais, pensão de alimentos e heranças.",
};

export default function DireitoFamiliaPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito da Família"
      subtitle="Acompanhamento sensível e rigoroso nos momentos mais delicados da vida familiar."
      intro="As questões familiares exigem uma abordagem jurídica que equilibre o rigor técnico com a sensibilidade humana. Na Sousa & Dias, tratamos cada caso familiar com a discção e o cuidado que merece, priorizando sempre o bem-estar das crianças e a resolução pacífica dos conflitos."
      services={[
        {
          title: "Divórcio",
          description: "Acompanhamento em divórcios por mútuo consentimento e litigiosos, incluindo partilha de bens e pensão de alimentos.",
        },
        {
          title: "Responsabilidades Parentais",
          description: "Regulação do exercício das responsabilidades parentais, residência, regime de visitas e pensão de alimentos.",
        },
        {
          title: "Pensão de Alimentos",
          description: "Fixação, alteração e cobrança coerciva de pensões de alimentos para filhos e cônjuges.",
        },
        {
          title: "Adopção",
          description: "Assessoria jurídica em processos de adopção nacional e internacional.",
        },
        {
          title: "União de Facto",
          description: "Reconhecimento e efeitos jurídicos da união de facto, incluindo direitos patrimoniais e de sucessão.",
        },
        {
          title: "Heranças e Sucessões",
          description: "Partilhas, testamentos, aceitação e repúdio de heranças, e contencioso sucessório.",
        },
      ]}
      faqs={[
        {
          question: "Quanto tempo demora um divórcio em Portugal?",
          answer: "Um divórcio por mútuo consentimento pode ser concluído em poucas semanas na conservatória. Um divórcio litigioso pode demorar entre 6 meses a 2 anos, dependendo da complexidade.",
        },
        {
          question: "Como é decidida a guarda dos filhos?",
          answer: "O tribunal decide com base no superior interesse da criança. A regra é a guarda partilhada, salvo situações excepcionais que justifiquem a guarda exclusiva.",
        },
        {
          question: "Tenho direito a herança se não há testamento?",
          answer: "Sim. A lei portuguesa estabelece herdeiros legítimos (cônjuge, descendentes, ascendentes) que têm direito a uma quota da herança mesmo na ausência de testamento.",
        },
      ]}
      relatedAreas={[
        { title: "Direito de Imigração", href: "/areas-de-atuacao/direito-imigracao" },
        { title: "Direito Imobiliário", href: "/areas-de-atuacao/direito-imobiliario" },
        { title: "Direito Penal", href: "/areas-de-atuacao/direito-penal" },
      ]}
    />
  );
}
