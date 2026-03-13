import type { Metadata } from "next";
import { RecursosContent } from "./RecursosContent";

export const metadata: Metadata = {
  title: "Recursos",
  description: "Recursos jurídicos gratuitos: guias, checklists e FAQ sobre Imigração, Trabalho e Família em Portugal.",
};

export default function RecursosPage() {
  return <RecursosContent />;
}
