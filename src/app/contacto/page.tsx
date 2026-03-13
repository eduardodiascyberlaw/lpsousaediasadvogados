import type { Metadata } from "next";
import { ContactContent } from "./ContactContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Entre em contacto com a Sousa & Dias Advogados. Agende a sua consulta gratuita. Escritório em Lisboa, Portugal.",
};

export default function ContactoPage() {
  return <ContactContent />;
}
