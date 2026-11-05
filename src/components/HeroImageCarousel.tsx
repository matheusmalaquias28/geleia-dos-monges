import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { src: '/carrossel/geleia-framboesa.webp', alt: 'Geleia de Framboesa Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-goiaba.webp', alt: 'Geleia de Goiaba Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-morango.webp', alt: 'Geleia de Morango Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-amora.webp', alt: 'Geleia de Amora Monges — Campos do Jordão' },
  { src: '/carrossel/geleia-damasco.webp', alt: 'Geleia de Damasco Monges — Campos do Jordão' },
] as const;

const n = slides.length;

/** Tempo que cada posição fica parada antes de avançar sozinha. */
const AUTOPLAY_MS = 4000;
/** Distância mínima (px) de um arraste para trocar de imagem. */
const SWIPE_PX = 40;

const tabletQuery = '(min-width: 768px)';
const desktopQuery = '(min-width: 1024px)';

/** Celular mostra 1 imagem por vez; tablet, 2; desktop, 3. */
function usePerView() {
  const read = () => {
    if (typeof window === 'undefined') return 1;
    if (window.matchMedia(desktopQuery).matches) return 3;
    if (window.matchMedia(tabletQuery).matches) return 2;
    return 1;
  };
  const [perView, setPerView] = useState(read);

  useEffect(() => {
    const queries = [window.matchMedia(tabletQuery), window.matchMedia(desktopQuery)];
    const update = () => setPerView(read());
    queries.forEach((q) => q.addEventListener('change', update));
    return () => queries.forEach((q) => q.removeEventListener('change', update));
  }, []);

  return perView;
}

type Position = { index: number; animate: boolean };

export default function HeroImageCarousel() {
  const perView = usePerView();
  // Cópias das primeiras imagens no fim: o loop continua sem "voltar rebobinando".
  const track = [...slides, ...slides.slice(0, perView)];

  const [pos, setPos] = useState<Position>({ index: 0, animate: true });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const frame = useRef(0);
  const posRef = useRef(pos);
  posRef.current = pos;

  const go = useCallback((dir: 1 | -1) => {
    const { index } = posRef.current;
    const edge = dir === 1 ? index >= n : index <= 0;
    if (!edge) {
      setPos({ index: index + dir, animate: true });
      return;
    }
    // Nas pontas, salta sem animação para a posição equivalente e só então anima.
    const jump = dir === 1 ? 0 : n;
    setPos({ index: jump, animate: false });
    posRef.current = { index: jump, animate: false };
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      frame.current = requestAnimationFrame(() => setPos({ index: jump + dir, animate: true }));
    });
  }, []);

  const next = useCallback(() => go(1), [go]);
  const prev = useCallback(() => go(-1), [go]);

  // Ao chegar às cópias do fim, volta em silêncio para o início real.
  const onSettled = useCallback(() => {
    setPos((p) => (p.index >= n ? { index: 0, animate: false } : p));
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  useEffect(() => {
    const onVisibility = () => setPageHidden(document.visibilityState === 'hidden');
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Avanço automático (pausa com o mouse em cima, com foco no teclado ou com a aba oculta).
  const paused = hovered || focused || pageHidden;
  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [paused, pos.index, next]);

  const onPanEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) < SWIPE_PX || Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
    if (info.offset.x < 0) next();
    else prev();
  };

  const shown = pos.index % n;
  const pad = (v: number) => String(v).padStart(2, '0');
  const visible =
    perView === 1
      ? pad(shown + 1)
      : `${pad(shown + 1)}–${pad(((shown + perView - 1) % n) + 1)}`;
  const counter = `${visible} / ${pad(n)}`;

  return (
    <section
      className="relative z-20 -mt-[20dvh] w-full min-w-0 overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Destaques em imagens"
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHovered(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="relative h-[450px] w-full">
        <div className="absolute right-4 top-4 z-30 flex items-center gap-1 sm:right-6 sm:top-5 lg:right-10 xl:right-14">
          <button
            type="button"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-espresso/70 text-cream backdrop-blur-md transition-colors hover:border-white/40 hover:bg-espresso"
            aria-label="Imagem anterior"
          >
            <ChevronLeft size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <span
            className="min-w-[3.25rem] select-none text-center font-sans text-xs font-medium tabular-nums tracking-wide text-cream/90 drop-shadow-md"
            aria-live={paused ? 'polite' : 'off'}
          >
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

        <motion.div
          className="h-full w-full overflow-hidden md:px-[5px] lg:px-[14px] xl:px-[38px] 2xl:px-[54px]"
          style={{ touchAction: 'pan-y' }}
          onPanEnd={onPanEnd}
        >
          <motion.div
            className="flex h-full"
            style={{ width: `${(track.length * 100) / perView}%` }}
            initial={false}
            animate={{ x: `${-(pos.index / track.length) * 100}%` }}
            transition={pos.animate ? { type: 'spring', stiffness: 260, damping: 34 } : { duration: 0 }}
            onAnimationComplete={onSettled}
          >
            {track.map((slide, i) => (
              <div
                key={`${slide.src}-${i}`}
                className="h-[450px] shrink-0 md:px-[5px] lg:px-[10px]"
                style={{ width: `${100 / track.length}%` }}
                aria-hidden={i >= n || undefined}
              >
                <div className="group relative h-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={i >= n ? '' : slide.alt}
                    draggable={false}
                    className="h-full w-full origin-center select-none object-cover transition-transform duration-700 ease-out will-change-transform motion-safe:group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    loading={i < perView ? 'eager' : 'lazy'}
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
        </motion.div>
      </div>
    </section>
  );
}
