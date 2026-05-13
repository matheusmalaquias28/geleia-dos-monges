import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/geleia-framboesa-monges.png', alt: 'Geleia de Framboesa Monges — Campos do Jordão' },
  { src: '/geleia-goiaba-diet-monges.png', alt: 'Geleia de Goiaba Diet — Geleia dos Monges' },
  { src: '/geleia-morango-monges.png', alt: 'Geleia de Morango Monges — Campos do Jordão' },
  { src: '/geleia-amora-monges.png', alt: 'Geleia de Amora — Campos do Jordão' },
  { src: '/geleia-damasco-monges.png', alt: 'Geleia de Damasco Monges — Campos do Jordão' },
] as const;

const n = slides.length;

export default function HeroImageCarousel() {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + n) % n);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % n);
  }, []);

  return (
    <section
      className="relative z-20 -mt-[20dvh] w-full min-w-0 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Destaques em imagens"
    >
      <div className="relative h-[450px] w-full lg:h-[450px]">
        {/* Controles — só mobile (um slide por vez) */}
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
            {String(index + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
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

        {/* Mobile: carrossel 1 slide */}
        <div className="h-full w-full overflow-hidden lg:hidden">
          <motion.div
            className="flex h-full"
            style={{ width: `${n * 100}%` }}
            animate={{ x: `${-(index / n) * 100}%` }}
            transition={{ type: 'spring', stiffness: 320, damping: 36 }}
          >
            {slides.map((slide) => (
              <div
                key={slide.src}
                className="group relative h-[450px] shrink-0 overflow-hidden"
                style={{ width: `${100 / n}%` }}
              >
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
