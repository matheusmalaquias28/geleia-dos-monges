import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import NavbarWeather from './NavbarWeather';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Produtos', to: '/produtos' },
  { label: 'Nossa História', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-50 w-full min-w-0 transition-all duration-500 ${
          scrolled
            ? 'border-b border-espresso/[0.06] bg-cream/92 shadow-[0_8px_30px_-12px_rgba(26,12,8,0.12)] backdrop-blur-xl'
            : 'border-b border-white/[0.08] bg-gradient-to-b from-black/25 to-transparent backdrop-blur-[2px]'
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1800px] items-center justify-between gap-3 px-5 sm:px-8 md:h-[4.75rem] md:gap-6 lg:px-12 xl:px-16 2xl:px-20">
          <Link to="/" className="group shrink-0 flex flex-col leading-none">
            <span
              className={`font-sans text-[10px] font-medium uppercase tracking-[0.28em] transition-colors duration-300 sm:text-xs ${
                scrolled ? 'text-espresso/50' : 'text-cream/65'
              }`}
            >
              Geleia dos
            </span>
            <span
              className={`font-display text-2xl font-bold italic transition-colors duration-300 sm:text-[1.65rem] ${
                scrolled ? 'text-amber-warm' : 'text-cream group-hover:text-cream'
              }`}
            >
              Monges
            </span>
          </Link>

          {/* Desktop: navegação central em pill */}
          <nav
            className="hidden min-w-0 flex-1 justify-center px-2 md:flex"
            aria-label="Principal"
          >
            <div
              className={`inline-flex max-w-full items-center gap-0.5 rounded-full border p-1 shadow-sm transition-colors duration-500 ${
                scrolled
                  ? 'border-espresso/10 bg-white/70'
                  : 'border-cream/20 bg-cream/[0.12] shadow-black/10 backdrop-blur-md'
              }`}
            >
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`whitespace-nowrap rounded-full px-3 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 sm:px-4 sm:text-[11px] sm:tracking-[0.16em] ${
                      active
                        ? scrolled
                          ? 'bg-burgundy-800 text-cream shadow-sm'
                          : 'bg-cream/25 text-cream shadow-sm ring-1 ring-cream/25'
                        : scrolled
                          ? 'text-espresso/60 hover:bg-espresso/[0.06] hover:text-espresso'
                          : 'text-cream/75 hover:bg-cream/15 hover:text-cream'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
            <NavbarWeather scrolled={scrolled} />
            <Link
              to="/produtos"
              className={`hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 sm:px-6 sm:text-[11px] ${
                scrolled
                  ? 'bg-burgundy-800 text-cream shadow-md shadow-burgundy-800/20 hover:bg-burgundy-950'
                  : 'border border-cream/45 bg-cream/[0.08] text-cream backdrop-blur-sm hover:border-cream/60 hover:bg-cream/[0.14]'
              }`}
            >
              Ver produtos
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors md:hidden ${
                scrolled
                  ? 'border-espresso/15 bg-espresso/[0.04] text-espresso hover:bg-espresso/[0.07]'
                  : 'border-cream/25 bg-cream/[0.08] text-cream hover:bg-cream/[0.12]'
              }`}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Menu mobile — drawer + backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              key="nav-mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-[60] bg-espresso/55 backdrop-blur-md md:hidden"
              aria-label="Fechar menu"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              key="nav-mobile-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 340 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-white/10 bg-gradient-to-b from-espresso via-[#120907] to-[#0a0504] shadow-[-16px_0_48px_rgba(0,0,0,0.4)] md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegacao"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
                <div>
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-cream/45">
                    Navegacao
                  </p>
                  <p className="font-display text-xl font-bold italic text-amber-warm">Monges</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/15 bg-cream/[0.06] text-cream/80 transition-colors hover:border-cream/25 hover:bg-cream/[0.1] hover:text-cream"
                  aria-label="Fechar menu"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <li key={link.to}>
                      <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.05, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setMobileOpen(false)}
                          className={`group flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 transition-colors ${
                            location.pathname === link.to
                              ? 'border-amber-warm/35 bg-amber-warm/10 text-cream'
                              : 'border-transparent text-cream/75 hover:border-white/10 hover:bg-white/[0.04] hover:text-cream'
                          }`}
                        >
                          <span className="flex min-w-0 items-baseline gap-3">
                            <span className="font-sans text-[10px] tabular-nums text-cream/30">{String(i + 1).padStart(2, '0')}</span>
                            <span className="font-display text-2xl font-medium leading-tight tracking-tight">
                              {link.label}
                            </span>
                          </span>
                          <ChevronRight
                            size={20}
                            strokeWidth={1.75}
                            className={`shrink-0 transition-transform group-hover:translate-x-0.5 ${
                              location.pathname === link.to ? 'text-amber-warm' : 'text-cream/25 group-hover:text-cream/50'
                            }`}
                            aria-hidden
                          />
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-white/10 px-5 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                <Link
                  to="/produtos"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary flex w-full justify-center py-4"
                >
                  <span className="flex items-center gap-2">
                    Ver produtos
                    <ChevronRight size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                </Link>
                <p className="mt-4 text-center font-sans text-[10px] uppercase tracking-[0.28em] text-cream/35">
                  Campos do Jordão · desde 1988
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
