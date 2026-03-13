import type { Metadata } from "next";
import { AreasContent } from "./AreasContent";

export const metadata: Metadata = {
  title: "Áreas de Actuação",
  description: "Conheça as áreas de actuação da Sousa & Dias Advogados: Imigração, Trabalho, Família, Penal, Empresarial e Imobiliário.",
};

export default function AreasPage() {
  return <AreasContent />;
}
