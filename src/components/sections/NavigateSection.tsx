"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/*
  GNS "Let's Navigate Together" section:
  - Background: #f8fafc (light blue-grey)
  - Heading: Bebas Neue / 48px / #0e76bc
  - Body: Montserrat / 18px / #222222 / line-height 32px
*/
export const NavigateSection = () => {
  return (
    <section className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-display uppercase"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", color: "#0e76bc" }}
          >
            VAMOS NAVEGAR JUNTOS
          </h2>
          <p className="text-body-regular mt-8 max-w-3xl mx-auto" style={{ color: "#222222" }}>
            Sabemos que enfrentar questões legais pode ser intimidante. É por isso
            que estamos aqui — para simplificar o complexo, defender os seus direitos
            e guiá-lo em cada passo. Seja um{" "}
            <Link href="/areas-de-atuacao/direito-imigracao" className="text-[#0e76bc] hover:underline">
              processo de imigração
            </Link>{" "}
            ou uma{" "}
            <Link href="/areas-de-atuacao/direito-trabalho" className="text-[#0e76bc] hover:underline">
              questão laboral
            </Link>
            , a sua tranquilidade é a nossa prioridade.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
