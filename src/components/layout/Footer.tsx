import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + CTA */}
          <div>
            <h3 className="font-display text-[28px] tracking-[3px] uppercase mb-6">SOUSA & DIAS</h3>
            <Link href="/contacto" className="btn-cta text-[14px] py-3 px-6">
              COMEÇAR
            </Link>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <ul className="space-y-3">
              {[
                ["/", "Home"], ["/equipa", "Equipa"], ["/areas-de-atuacao", "Áreas de Actuação"],
                ["/resultados", "Resultados"], ["/blog", "Blog"], ["/recursos", "Recursos"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="font-body text-[14px] text-gray-400 hover:text-[#0e76bc] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacto */}
          <div>
            <p className="font-display text-[20px] tracking-[2px] uppercase mb-4">Contacte-nos</p>
            <div className="space-y-2 font-body text-[14px] text-gray-400">
              <p><a href="mailto:geral@sousaediasadvogados.pt" className="hover:text-[#0e76bc] transition-colors">geral@sousaediasadvogados.pt</a></p>
              <p><a href="tel:+351211234567" className="hover:text-[#0e76bc] transition-colors">+351 211 234 567</a></p>
              <p className="pt-2">Rua Augusta, 61, 2º Andar<br />1100-053 Lisboa, Portugal</p>
            </div>
          </div>

          {/* Col 4: Social */}
          <div>
            <p className="font-display text-[20px] tracking-[2px] uppercase mb-4">Siga-nos</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0e76bc] transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 110-4.128 2.064 2.064 0 010 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0e76bc] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0e76bc] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[12px] text-gray-500">© {new Date().getFullYear()} Sousa & Dias Advogados. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link href="/politica-privacidade" className="font-body text-[12px] text-gray-500 hover:text-gray-300 transition-colors">Política de Privacidade</Link>
            <Link href="/termos" className="font-body text-[12px] text-gray-500 hover:text-gray-300 transition-colors">Termos de Utilização</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
