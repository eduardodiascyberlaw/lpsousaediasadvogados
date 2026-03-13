import type { Metadata } from "next";
import { AreaDetailPage } from "@/components/sections/AreaDetailPage";

export const metadata: Metadata = {
  title: "Direito Imobiliário",
  description: "Advogados de Direito Imobiliário em Portugal. Compra e venda, arrendamento, licenciamento e contencioso imobiliário.",
};

export default function DireitoImobiliarioPage() {
  return (
    <AreaDetailPage
      tag="Áreas de Actuação"
      title="Direito Imobiliário"
      subtitle="Segurança jurídica em todas as suas operações imobiliárias em Portugal."
      intro="O mercado imobiliário português apresenta oportunidades e desafios únicos, especialmente para investidores estrangeiros. A Sousa & Dias oferece acompanhamento integral em operações imobiliárias, garantindo que cada transacção é segura e juridicamente sólida."
      services={[
        {
          title: "Compra e Venda de Imóveis",
          description: "Due diligence, negociação, elaboração de contratos-promessa e acompanhamento na escritura.",
        },
        {
          title: "Arrendamento",
          description: "Elaboração de contratos de arrendamento, acções de despejo e resolução de conflitos entre senhorio e inquilino.",
        },
        {
          title: "Licenciamento",
          description: "Acompanhamento de processos de licenciamento urbanístico, alojamento local e alteração de uso.",
        },
        {
          title: "Due Diligence Imobiliária",
          description: "Verificação de registo predial, ónus, encargos, situação fiscal e urbanística do imóvel.",
        },
        {
          title: "Propriedade Horizontal",
          description: "Constituição e alteração de propriedade horizontal, regulamentos de condomínio e conflitos entre condóminos.",
        },
        {
          title: "Contencioso Imobiliário",
          description: "Representação em litígios sobre posse, propriedade, servidões, demarcações e vícios de construção.",
        },
      ]}
      faqs={[
        {
          question: "Posso comprar imóveis em Portugal sendo estrangeiro?",
          answer: "Sim. Não existem restrições à aquisição de imóveis por estrangeiros em Portugal. Necessita apenas de NIF português. Acompanhamos todo o processo.",
        },
        {
          question: "O que devo verificar antes de comprar um imóvel?",
          answer: "Registo predial, caderneta predial, licença de utilização, certidão de teor, dívidas fiscais e encargos. A nossa due diligence cobre todos estes aspectos.",
        },
        {
          question: "O que é o alojamento local e como o licenciar?",
          answer: "O alojamento local permite explorar imóveis para turismo (tipo Airbnb). O licenciamento envolve registo na câmara municipal e cumprimento de requisitos específicos. Tratamos de todo o processo.",
        },
      ]}
      relatedAreas={[
        { title: "Direito Empresarial", href: "/areas-de-atuacao/direito-empresarial" },
        { title: "Direito da Família", href: "/areas-de-atuacao/direito-familia" },
        { title: "Direito de Imigração", href: "/areas-de-atuacao/direito-imigracao" },
      ]}
    />
  );
}
