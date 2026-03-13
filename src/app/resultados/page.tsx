import type { Metadata } from "next";
import { ResultadosContent } from "./ResultadosContent";

export const metadata: Metadata = {
  title: "Resultados",
  description: "Casos de sucesso da Sousa & Dias Advogados. Resultados concretos em Imigração, Trabalho, Família e outras áreas.",
};

export default function ResultadosPage() {
  return <ResultadosContent />;
}
