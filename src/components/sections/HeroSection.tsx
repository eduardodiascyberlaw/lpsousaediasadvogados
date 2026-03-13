"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/*
  GNS Hero exact specs:
  - Background: white #ffffff (matches photo background)
  - Min-height: 840px
  - Text in upper portion, photo smaller in lower portion
  - "100% COM PAIXÃO": Montserrat / 41px / Bold 700 / #363636 / centered
  - "VAMOS.": Montserrat / 41px / Light 300 / #363636
*/
export const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden bg-white"
      style={{ minHeight: "840px" }}
    >
      {/* Text — upper portion, above Eduardo's head */}
      <div className="relative z-10 px-6 text-center" style={{ paddingTop: "120px", paddingBottom: "20px" }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-body"
          style={{
            fontSize: "clamp(28px, 4vw, 41px)",
            fontWeight: 700,
            color: "#363636",
            lineHeight: 1.2,
            letterSpacing: "1px",
          }}
        >
          100% COM PAIXÃO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body mt-2"
          style={{
            fontSize: "clamp(28px, 4vw, 41px)",
            fontWeight: 300,
            color: "#363636",
            lineHeight: 1.2,
            letterSpacing: "1px",
          }}
        >
          VAMOS.
        </motion.p>
      </div>

      {/* Eduardo walking photo — sized smaller, anchored at bottom */}
      <div className="relative mt-auto w-full flex justify-center" style={{ height: "620px" }}>
        <Image
          src="/images/team/eduardo-dias.jpg"
          alt="Dr. Eduardo Dias"
          fill
          className="object-contain object-bottom"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
};
