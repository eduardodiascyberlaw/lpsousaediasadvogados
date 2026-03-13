"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({ tag, title, subtitle, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className={`font-body text-[14px] font-medium tracking-[0.2em] uppercase ${
          light ? "text-white/70" : "text-[#0e76bc]"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`section-title mt-3 ${light ? "!text-white" : ""}`}>{title}</h2>
      {subtitle && (
        <p className={`section-subtitle mt-3 max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "!text-white/80" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
