"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

interface ContactForm {
  nome: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
}

export const ContactContent = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
        reset();
      }
    } catch {
      setSubmitted(true);
      reset();
    }
  };

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
            <h1 className="section-title">CONTACTO</h1>
            <p className="section-subtitle mt-3">Agende a Sua Consulta Gratuita</p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-[#f8fafc]">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h3 className="font-display text-[24px] tracking-[2px] uppercase text-[#252525] mb-4">Escritório</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#0e76bc] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-body text-[14px] text-[#252525] font-medium">Morada</p>
                      <p className="font-body text-[14px] text-gray-500">
                        Rua Augusta, 61, 2º Andar<br />
                        1100-053 Lisboa, Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#0e76bc] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-body text-[14px] text-[#252525] font-medium">Telefone</p>
                      <a href="tel:+351211234567" className="font-body text-[14px] text-gray-500 hover:text-[#0e76bc] transition-colors">
                        +351 211 234 567
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#0e76bc] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-body text-[14px] text-[#252525] font-medium">Email</p>
                      <a href="mailto:geral@sousaediasadvogados.pt" className="font-body text-[14px] text-gray-500 hover:text-[#0e76bc] transition-colors">
                        geral@sousaediasadvogados.pt
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg className="w-5 h-5 text-[#0e76bc] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-body text-[14px] text-[#252525] font-medium">Horário</p>
                      <p className="font-body text-[14px] text-gray-500">
                        Segunda a Sexta<br />
                        9h00 – 18h00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-200">
                <h4 className="font-body text-[14px] font-semibold text-[#252525] mb-2">Primeira Consulta Gratuita</h4>
                <p className="font-body text-[13px] text-gray-500">
                  Oferecemos uma consulta inicial gratuita e sem compromisso para avaliar
                  o seu caso e apresentar as opções disponíveis.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200">
                <h4 className="font-body text-[14px] font-semibold text-[#252525] mb-2">Idiomas</h4>
                <p className="font-body text-[13px] text-gray-500">
                  Atendemos em Português, Inglês e Espanhol.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-white border border-gray-200 p-12 text-center">
                  <svg className="w-16 h-16 text-[#0e76bc] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-display text-[28px] tracking-[2px] uppercase text-[#252525] mb-3">Mensagem Enviada</h3>
                  <p className="text-body-regular">
                    Obrigado pelo seu contacto. A nossa equipa entrará em contacto
                    consigo dentro de 24 horas úteis.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-cta-outline mt-6"
                  >
                    Enviar Nova Mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white border border-gray-200 p-8 md:p-12 space-y-6"
                >
                  <h3 className="font-display text-[28px] tracking-[2px] uppercase text-[#252525] mb-2">Envie-nos uma Mensagem</h3>
                  <div className="w-12 h-[2px] bg-[#0e76bc] mb-8" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-[14px] font-medium text-[#252525] mb-2">
                        Nome Completo *
                      </label>
                      <input
                        {...register("nome", { required: "Campo obrigatório" })}
                        className="w-full px-4 py-3 border border-gray-200 font-body text-[14px] focus:outline-none focus:border-[#0e76bc] transition-colors"
                        placeholder="O seu nome"
                      />
                      {errors.nome && (
                        <p className="font-body text-[12px] text-red-500 mt-1">{errors.nome.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block font-body text-[14px] font-medium text-[#252525] mb-2">
                        Email *
                      </label>
                      <input
                        {...register("email", {
                          required: "Campo obrigatório",
                          pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
                        })}
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 font-body text-[14px] focus:outline-none focus:border-[#0e76bc] transition-colors"
                        placeholder="o.seu@email.com"
                      />
                      {errors.email && (
                        <p className="font-body text-[12px] text-red-500 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body text-[14px] font-medium text-[#252525] mb-2">
                        Telefone
                      </label>
                      <input
                        {...register("telefone")}
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 font-body text-[14px] focus:outline-none focus:border-[#0e76bc] transition-colors"
                        placeholder="+351 ..."
                      />
                    </div>
                    <div>
                      <label className="block font-body text-[14px] font-medium text-[#252525] mb-2">
                        Assunto *
                      </label>
                      <select
                        {...register("assunto", { required: "Seleccione um assunto" })}
                        className="w-full px-4 py-3 border border-gray-200 font-body text-[14px] focus:outline-none focus:border-[#0e76bc] transition-colors bg-white"
                      >
                        <option value="">Seleccione...</option>
                        <option value="imigracao">Direito de Imigração</option>
                        <option value="trabalho">Direito do Trabalho</option>
                        <option value="familia">Direito da Família</option>
                        <option value="penal">Direito Penal</option>
                        <option value="empresarial">Direito Empresarial</option>
                        <option value="imobiliario">Direito Imobiliário</option>
                        <option value="outro">Outro</option>
                      </select>
                      {errors.assunto && (
                        <p className="font-body text-[12px] text-red-500 mt-1">{errors.assunto.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-[14px] font-medium text-[#252525] mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      {...register("mensagem", { required: "Campo obrigatório" })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 font-body text-[14px] focus:outline-none focus:border-[#0e76bc] transition-colors resize-none"
                      placeholder="Descreva brevemente o seu caso..."
                    />
                    {errors.mensagem && (
                      <p className="font-body text-[12px] text-red-500 mt-1">{errors.mensagem.message}</p>
                    )}
                  </div>

                  <div>
                    <button type="submit" className="btn-cta w-full md:w-auto">
                      Enviar Mensagem
                    </button>
                    <p className="font-body text-[12px] text-gray-500 mt-3">
                      Ao submeter este formulário, aceita a nossa política de privacidade.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-80 bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="font-body text-[14px] text-gray-500">
            Rua Augusta, 61 — Lisboa, Portugal
          </p>
          <a
            href="https://maps.google.com/?q=Rua+Augusta+61+Lisboa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 font-body text-[14px] text-[#0e76bc] hover:text-[#0a5d96] transition-colors"
          >
            Ver no Google Maps &rarr;
          </a>
        </div>
      </section>
    </>
  );
};
