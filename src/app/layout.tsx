import type { Metadata } from "next";
import { Bebas_Neue, Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sousa & Dias Advogados | Direito de Imigração e Trabalho em Portugal",
    template: "%s | Sousa & Dias Advogados",
  },
  description: "Escritório de advocacia especializado em Direito de Imigração, Trabalho e Família em Portugal. Atendimento em Português, Inglês e Espanhol.",
  keywords: [
    "advogado imigração portugal",
    "advogado trabalho portugal",
    "visto portugal",
    "autorização de residência",
    "golden visa",
    "direito laboral",
    "sousa dias advogados",
  ],
  authors: [{ name: "Sousa & Dias Advogados" }],
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://sousaediasadvogados.pt",
    siteName: "Sousa & Dias Advogados",
    title: "Sousa & Dias Advogados | Direito de Imigração e Trabalho",
    description: "Escritório de advocacia especializado em Direito de Imigração, Trabalho e Família em Portugal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${bebas.variable} ${libre.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
