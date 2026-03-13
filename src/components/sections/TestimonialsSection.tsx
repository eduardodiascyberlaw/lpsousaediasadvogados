"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
  GNS Testimonials:
  - Carousel/slider of testimonial cards
  - Quote in serif font, attribution below
  - White bg cards with subtle shadow
*/
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
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">TESTEMUNHOS</h2>
          <p className="section-subtitle mt-2">O Que Dizem os Nossos Clientes</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-10 md:p-14 shadow-sm text-center"
            >
              <p className="font-serif italic text-[20px] md:text-[22px] leading-[36px] text-[#252525] mb-8">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <p className="font-body text-[14px] font-bold text-[#252525] uppercase">
                {testimonials[current].author}
              </p>
              <p className="font-body text-[13px] text-gray-500 mt-1">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav dots + arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#0e76bc] hover:text-[#0e76bc] transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-[#0e76bc]" : "bg-gray-300"
                  }`}
                  aria-label={`Testemunho ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:border-[#0e76bc] hover:text-[#0e76bc] transition-colors"
              aria-label="Seguinte"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
