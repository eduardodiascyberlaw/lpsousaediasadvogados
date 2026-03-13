import type { Metadata } from "next";
import { EquipaContent } from "./EquipaContent";

export const metadata: Metadata = {
  title: "A Nossa Equipa",
  description: "Conheça a equipa de advogados da Sousa & Dias. Profissionais especializados em Direito de Imigração, Trabalho e Família.",
};

export default function EquipaPage() {
  return <EquipaContent />;
}
