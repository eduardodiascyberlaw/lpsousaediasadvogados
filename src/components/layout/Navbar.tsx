"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/equipa", label: "Equipa" },
  {
    href: "/areas-de-atuacao",
    label: "Áreas de Actuação",
    children: [
      { href: "/areas-de-atuacao/direito-imigracao", label: "Imigração" },
      { href: "/areas-de-atuacao/direito-trabalho", label: "Trabalho" },
      { href: "/areas-de-atuacao/direito-familia", label: "Família" },
      { href: "/areas-de-atuacao/direito-penal", label: "Penal" },
      { href: "/areas-de-atuacao/direito-empresarial", label: "Empresarial" },
      { href: "/areas-de-atuacao/direito-imobiliario", label: "Imobiliário" },
    ],
  },
  { href: "/resultados", label: "Resultados" },
  { href: "/blog", label: "Blog" },
  { href: "/recursos", label: "Recursos" },
];

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(27, 27, 27, 0.90)", height: "96px" }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center justify-between h-full">
          {/* Logo S&D */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-sd.jpg"
              alt="Sousa & Dias Advogados"
              width={80}
              height={50}
              style={{ objectFit: "contain", borderRadius: "4px" }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.href)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="font-display text-[18px] font-normal text-white hover:text-[#0e76bc] transition-colors px-2.5 py-1 uppercase"
                >
                  {link.label}
                </Link>
                {link.children && dropdown === link.href && (
                  <div className="absolute top-full left-0 pt-3">
                    <div className="bg-white shadow-xl py-2 min-w-[220px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 font-body text-[14px] text-[#252525] hover:text-[#0e76bc] hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + CRM access + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://app.eduardodiasadvogado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 font-body text-[12px] text-white/50 hover:text-white transition-colors"
              title="Acesso Interno"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Acesso Interno
            </a>
            <Link href="/contacto" className="hidden lg:inline-flex btn-cta text-[15px] py-3 px-6">
              COMEÇAR
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#1b1b1b]"
          >
            <div className="flex justify-between items-center px-6 h-24">
              <Image
                src="/images/logo-sd.jpg"
                alt="Sousa & Dias"
                width={70}
                height={44}
                style={{ objectFit: "contain", borderRadius: "4px" }}
              />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white" aria-label="Fechar">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-[24px] tracking-[2px] text-white uppercase"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-2 font-body text-[14px] text-white/60 hover:text-[#0e76bc] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-8 space-y-4">
                <Link href="/contacto" className="btn-cta w-full text-center block" onClick={() => setMobileOpen(false)}>
                  COMEÇAR
                </Link>
                <a
                  href="https://app.eduardodiasadvogado.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-body text-[13px] text-white/40 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Acesso Interno
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: "96px" }} />
    </>
  );
};
