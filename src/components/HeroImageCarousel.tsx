import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/carrossel/geleia-framboesa.webp', alt: 'Geleia de Framboesa Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-goiaba.webp', alt: 'Geleia de Goiaba Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-morango.webp', alt: 'Geleia de Morango Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-amora.webp', alt: 'Geleia de Amora Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-damasco.webp', alt: 'Geleia de Damasco Monges — Campos do Jordão' },
] as const;

const n = slides.length;

/** Tablet (md) mostra 2 imagens por vez; celular, 1. */
const tabletQuery = '(min-width: 768px)';

function usePerView() {
  const [perView, setPerView] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia(tabletQuery).matches ? 2 : 1,
  );

  useEffect(() => {
    const mql = window.matchMedia(tabletQuery);
    const update = () => setPerView(mql.matches ? 2 : 1);
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return perView;
}

export default function HeroImageCarousel() {
  const perView = usePerView();
  const positions = n - perView + 1;
  const [rawIndex, setIndex] = useState(0);
  // Ao passar de celular para tablet, a última posição deixa de existir.
  const index = Math.min(rawIndex, positions - 1);

  const prev = useCallback(() => {
    setIndex((index - 1 + positions) % positions);
  }, [index, positions]);

  const next = useCallback(() => {
    setIndex((index + 1) % positions);
  }, [index, positions]);

  const pad = (v: number) => String(v).padStart(2, '0');
  const visible = perView === 1 ? pad(index + 1) : `${pad(index + 1)}–${pad(index + perView)}`;
  const counter = `${visible} / ${pad(n)}`;

  return (
    <section
      className="relative z-20 -mt-[20dvh] w-full min-w-0 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Destaques em imagens"
    >
      <div className="relative h-[450px] w-full lg:h-[450px]">
        {/* Controles — celular e tablet */}
        <div className="absolute right-4 top-4 z-30 flex items-center gap-1 sm:right-6 sm:top-5 lg:hidden">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-espresso/70 text-cream backdrop-blur-md transition-colors hover:border-white/40 hover:bg-espresso"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <span className="min-w-[3.25rem] select-none text-center font-sans text-xs font-medium tabular-nums tracking-wide text-cream/90 drop-shadow-md">
            {counter}
          </span>
          <button
            type="button"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-espresso/70 text-cream backdrop-blur-md transition-colors hover:border-white/40 hover:bg-espresso"
            aria-label="Próxima imagem"
          >
            <ChevronRight size={20} strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        {/* Celular: 1 slide por vez · Tablet: 2 */}
        <div className="h-full w-full overflow-hidden md:px-[5px] lg:hidden">
          <motion.div
            className="flex h-full"
            style={{ width: `${(n * 100) / perView}%` }}
            animate={{ x: `${-(index / n) * 100}%` }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="h-[450px] shrink-0 md:px-[5px]"
                style={{ width: `${100 / n}%` }}
              >
                <div className="group relative h-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full origin-center object-cover transition-transform duration-700 ease-out will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    loading={slide.src === slides[0].src ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15"
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop (lg+): cinco imagens em fila */}
        <div className="hidden h-[450px] w-full grid-cols-5 gap-[20px] px-6 lg:grid xl:px-12 2xl:px-16">
          {slides.map((slide, i) => (
            <div key={slide.src} className="group relative h-full min-h-0 overflow-hidden">
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full origin-center object-cover transition-transform duration-700 ease-out will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15"
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
