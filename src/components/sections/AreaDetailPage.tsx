"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CtaSection } from "@/components/sections/CtaSection";

interface ServiceItem {
  title: string;
  description: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface AreaDetailPageProps {
  tag: string;
  title: string;
  subtitle: string;
  intro: string;
  services: ServiceItem[];
  faqs: FaqItem[];
  relatedAreas: { title: string; href: string }[];
}

export const AreaDetailPage = ({
  tag,
  title,
  subtitle,
  intro,
  services,
  faqs,
  relatedAreas,
}: AreaDetailPageProps) => {
  return (
    <>
      {/* Page Hero */}
      <section className="section bg-white">
        <div className="container-site text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-[14px] font-medium tracking-[0.2em] uppercase text-[#0e76bc]">
              {tag}
            </span>
            <h1 className="section-title mt-3">{title}</h1>
            <p className="section-subtitle mt-3">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-body-regular text-[18px] leading-relaxed">{intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-body text-[14px] font-medium tracking-[0.2em] uppercase text-[#0e76bc]">
              Os Nossos Serviços
            </span>
            <h2 className="section-title mt-3">COMO PODEMOS AJUDAR</h2>
            <div className="w-12 h-[2px] bg-[#0e76bc] mt-6 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-[#f8fafc] border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-[20px] tracking-[1px] uppercase text-[#252525] mb-3">{service.title}</h3>
                <p className="font-body text-[14px] text-gray-500">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-body text-[14px] font-medium tracking-[0.2em] uppercase text-[#0e76bc]">
              Perguntas Frequentes
            </span>
            <h2 className="section-title mt-3">DÚVIDAS COMUNS</h2>
            <div className="w-12 h-[2px] bg-[#0e76bc] mt-6 mx-auto" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-gray-200 group"
              >
                <summary className="px-6 py-4 cursor-pointer font-body font-medium text-[#252525] hover:text-[#0e76bc] transition-colors list-none flex justify-between items-center">
                  {faq.question}
                  <svg className="w-4 h-4 text-[#0e76bc] group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="font-body text-[14px] text-gray-500">{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-16 bg-white">
        <div className="container-narrow">
          <h3 className="font-display text-[24px] tracking-[2px] uppercase text-[#252525] text-center mb-8">Áreas Relacionadas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="px-6 py-3 bg-white border border-gray-200 font-body text-[14px] text-[#252525] hover:border-[#0e76bc] hover:text-[#0e76bc] transition-colors"
              >
                {area.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};
