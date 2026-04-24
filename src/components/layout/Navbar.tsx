"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogoSD } from "../ui/LogoSD";

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
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${scrolled ? "backdrop-blur-xl" : ""}`}
        style={{
          backgroundColor: scrolled ? "rgba(10, 22, 40, 0.95)" : "transparent",
          height: "88px",
          borderBottom: scrolled ? "1px solid rgba(201, 169, 110, 0.1)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative group">
            <LogoSD
              width={72}
              height={45}
              className="transition-opacity duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setDropdown(link.href)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="font-body text-[13px] font-medium tracking-[0.08em] text-white/80 hover:text-gold transition-colors duration-300 px-4 py-2 uppercase"
                >
                  {link.label}
                </Link>
                {link.children && dropdown === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-3"
                  >
                    <div className="bg-navy-900/98 backdrop-blur-xl border border-gold/10 py-3 min-w-[240px] shadow-luxury-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-6 py-2.5 font-body text-[13px] tracking-[0.04em] text-white/60 hover:text-gold hover:bg-white/[0.03] transition-all duration-200"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Internal Access */}
          <div className="flex items-center gap-5">
            <Link
              href="/contacto"
              className="hidden lg:inline-flex items-center justify-center px-7 py-2.5 bg-gold text-navy font-body text-[12px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 hover:bg-gold-300"
            >
              <span>Começar</span>
            </Link>
            <a
              href="https://app.eduardodiasadvogado.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 font-body text-[11px] tracking-[0.06em] text-white/30 hover:text-white/60 transition-colors duration-300"
              title="Acesso Interno"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Interno
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </div>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60]"
            style={{ background: "linear-gradient(180deg, #0a1628 0%, #0d1d35 100%)" }}
          >
            <div className="flex justify-between items-center px-6 h-22 pt-6">
              <LogoSD
                width={64}
                height={40}
              />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/60 hover:text-white transition-colors" aria-label="Fechar">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-12 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 font-display text-[28px] font-light text-white/90 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 font-body text-[14px] text-white/40 hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 space-y-4"
              >
                <div className="divider-gold mb-8" />
                <Link
                  href="/contacto"
                  className="block w-full text-center py-4 bg-gold text-navy font-body text-[13px] font-semibold tracking-[0.12em] uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  Começar
                </Link>
                <a
                  href="https://app.eduardodiasadvogado.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-body text-[12px] text-white/30 hover:text-white/60 transition-colors pt-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  Acesso Interno
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: "88px" }} />
    </>
  );
};
