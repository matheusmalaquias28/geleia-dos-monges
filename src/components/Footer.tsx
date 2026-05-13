import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Nossos Produtos', to: '/produtos' },
  { label: 'Nossa História', to: '/sobre' },
  { label: 'Fale Conosco', to: '/contato' },
] as const;

const categories = [
  'Geleias',
  'Geleias Diet',
  'Doces',
  'Conservas',
  'Compotas',
  'Marca Própria',
] as const;

export default function Footer() {
  return (
    <footer className="relative isolate w-full min-w-0 overflow-hidden bg-gradient-to-b from-espresso via-[#140a07] to-[#0d0604] text-cream">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-warm/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-burgundy-800/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-amber-warm/[0.06] blur-3xl"
        aria-hidden
      />

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-white/[0.06] bg-espresso/40 py-3.5 backdrop-blur-sm">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-body px-8 text-base italic text-cream/40">
              Da fruta para a mesa &middot; Desde 1988 &middot; Serra da Mantiqueira &middot; Campos do Jordão
              &middot;
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full px-6 pb-10 pt-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 lg:pb-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* Marca */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.35em] text-cream/45">
                Geleia dos
              </p>
              <h3 className="font-display mt-1 text-4xl font-bold italic text-amber-warm sm:text-5xl">Monges</h3>
            </div>
            <p className="font-body max-w-sm text-lg leading-relaxed text-cream/55">
              Da fruta para a mesa, uma relação de compromisso. Artesanal desde 1988.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="https://instagram.com/geleiadosmonges"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 bg-cream/[0.04] text-cream/55 transition-all hover:border-amber-warm/40 hover:bg-amber-warm/10 hover:text-amber-warm"
                aria-label="Instagram da Geleia dos Monges"
              >
                <Instagram size={18} strokeWidth={1.75} />
              </a>
              <a
                href="https://facebook.com/geleiadosmonges"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 bg-cream/[0.04] text-cream/55 transition-all hover:border-amber-warm/40 hover:bg-amber-warm/10 hover:text-amber-warm"
                aria-label="Facebook da Geleia dos Monges"
              >
                <Facebook size={18} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="lg:col-span-2">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Navegacao
            </p>
            <ul className="mt-5 space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2.5 py-1.5 font-sans text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-amber-warm opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="border-b border-transparent pb-px transition-colors group-hover:border-amber-warm/50">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categorias */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Categorias
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    to="/produtos"
                    className="group inline-flex items-center gap-1 py-1.5 font-sans text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    <span className="block h-px w-3 origin-left scale-x-0 bg-amber-warm/80 transition-transform duration-200 group-hover:scale-x-100" aria-hidden />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/40">
              Contato
            </p>
            <div className="mt-5 space-y-3 rounded-2xl border border-white/[0.07] bg-cream/[0.03] p-5 backdrop-blur-sm">
              <div className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-burgundy-800/40 text-amber-warm">
                  <MapPin size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <p className="font-sans text-sm leading-relaxed text-cream/65">
                  Rod. Floriano Rodrigues Pinheiro, Km 46
                  <br />
                  Campos do Jordão, SP
                  <br />
                  <span className="text-cream/45">CEP 12460-000</span>
                </p>
              </div>
              <a
                href="tel:+551236621346"
                className="flex items-center gap-3 rounded-xl py-1 font-sans text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-burgundy-800/40 text-amber-warm">
                  <Phone size={16} strokeWidth={1.75} aria-hidden />
                </span>
                (12) 3662-1346
              </a>
              <a
                href="mailto:contato@geleiadosmonges.com.br"
                className="group flex items-start gap-3 rounded-xl py-1 font-sans text-sm text-cream/70 transition-colors hover:text-cream"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-burgundy-800/40 text-amber-warm">
                  <Mail size={16} strokeWidth={1.75} aria-hidden />
                </span>
                <span className="flex min-w-0 flex-1 items-center justify-between gap-2 break-all">
                  contato@geleiadosmonges.com.br
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 text-cream/35 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-sans text-xs leading-relaxed text-cream/35">
            &copy; {new Date().getFullYear()} Fruitland Com. e Ind. de Alimentos. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs tracking-wide text-cream/35">
            <span className="text-cream/25">Exportamos para</span>{' '}
            <span className="text-cream/50">França</span>
            <span className="mx-2 text-cream/20">&middot;</span>
            <span className="text-cream/50">EUA</span>
            <span className="mx-2 text-cream/20">&middot;</span>
            <span className="text-cream/50">Argentina</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
