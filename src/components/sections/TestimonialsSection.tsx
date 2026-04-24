"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "A equipa da Sousa & Dias tratou do meu processo de autorização de residência com uma eficiência e humanidade que nunca encontrei noutro escritório. Recomendo sem hesitação.",
    author: "Maria C.",
    role: "Cliente — Imigração",
  },
  {
    text: "Quando fui despedido injustamente, o Dr. Dias lutou pelo meu caso como se fosse o dele. Ganhei a acção e recebi a indemnização a que tinha direito.",
    author: "Carlos R.",
    role: "Cliente — Direito do Trabalho",
  },
  {
    text: "Precisava de ajuda com o reagrupamento familiar e a Sousa & Dias acompanhou-me em cada passo. Hoje a minha família está reunida em Portugal graças a eles.",
    author: "Ana S.",
    role: "Cliente — Imigração",
  },
  {
    text: "Profissionalismo, transparência e resultados. A constituição da minha empresa foi tratada com rapidez e sem surpresas. Excelente serviço.",
    author: "Pedro M.",
    role: "Cliente — Direito Empresarial",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((p) => (p + 1) % testimonials.length), []);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section relative overflow-hidden" style={{ background: "var(--cream-warm)" }}>
      {/* Large decorative quote mark */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 font-display text-[20rem] text-navy/[0.02] leading-none pointer-events-none select-none hidden lg:block">
        &ldquo;
      </div>

      <div className="container-site relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-overline block mb-4">Testemunhos</span>
          <h2 className="section-title">
            O que dizem os nossos <span className="italic text-gold">clientes</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8"
            >
              <p className="font-serif italic text-[clamp(1.2rem,2.2vw,1.6rem)] text-navy leading-relaxed mb-10">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>

              <div className="divider-gold mx-auto mb-6" style={{ width: "40px" }} />

              <p className="font-body text-[13px] font-semibold tracking-[0.06em] text-navy uppercase">
                {testimonials[current].author}
              </p>
              <p className="font-body text-[12px] text-body-light mt-1">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 border border-cream-300 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="group relative w-8 h-[2px] transition-all duration-500"
                  aria-label={`Testemunho ${i + 1}`}
                >
                  <div className={`absolute inset-0 transition-colors duration-500 ${
                    i === current ? "bg-gold" : "bg-cream-300"
                  }`} />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-cream-300 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="Seguinte"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
