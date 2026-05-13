import { useId, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Ícones do anel externo (PNG em `public/orbit/`).
 * Ordem: sentido horário a partir do topo.
 */
export const INGREDIENT_ORBIT_IMAGES: { src: string; alt: string }[] = [
  { src: '/orbit/damasco.png', alt: 'Damasco' },
  { src: '/orbit/mirtilos.png', alt: 'Mirtilos' },
  { src: '/orbit/banana.png', alt: 'Banana' },
  { src: '/orbit/morango.png', alt: 'Morango' },
  { src: '/orbit/abacaxi.png', alt: 'Abacaxi' },
  { src: '/orbit/jambo.png', alt: 'Jambo' },
  { src: '/orbit/laranja.png', alt: 'Laranja' },
  { src: '/orbit/framboesa.png', alt: 'Framboesa' },
];

const innerRingText =
  'Sem ingredientes artificiais  ·  Da fruta para a mesa  ·  Sem ingredientes artificiais  ·  Da fruta para a mesa  ·  Sem ingredientes artificiais  ·  Da fruta para a mesa  ·  ';

/** Raio do círculo do texto (viewBox 400×400, centro 200,200).
 * Aumentado para o anel amarelo não invadir o texto central.
 */
const TEXT_RING_R = 198;

const TEXT_PATH_LENGTH = 2 * Math.PI * TEXT_RING_R;

function textRingPathD(): string {
  const y0 = 200 - TEXT_RING_R;
  return `M 200 ${y0} A ${TEXT_RING_R} ${TEXT_RING_R} 0 1 1 199.9 ${400 - y0} A ${TEXT_RING_R} ${TEXT_RING_R} 0 1 1 200 ${y0}`;
}

/** Espaço fixo entre o círculo do texto e o centro dos ícones das frutas */
const GAP_ORBITS_PX = 40;

export default function IngredientsOrbitSection() {
  const scrollRef = useRef<HTMLElement>(null);
  const orbitBoxRef = useRef<HTMLDivElement>(null);
  const pathId = useId().replace(/:/g, '');
  const [fruitRadiusPx, setFruitRadiusPx] = useState(0);
  /** Espaço extra à volta do quadrado para ícones / texto do anel não serem cortados pelo clip. */
  const [orbitPadPx, setOrbitPadPx] = useState(0);

  /** Progresso 0→1 enquanto a secção atravessa o viewport (entra por baixo, sai por cima) — sem trilho extra de altura. */
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 18,
    restDelta: 0.001,
  });

  const rotateTextRing = useTransform(smoothProgress, [0, 1], [0, 480]);
  const rotateIconRing = useTransform(smoothProgress, [0, 1], [0, -360]);

  const images = INGREDIENT_ORBIT_IMAGES;

  useLayoutEffect(() => {
    const el = orbitBoxRef.current;
    if (!el) return;

    const iconHalfPx = () => (window.matchMedia('(min-width: 640px)').matches ? 32 : 28);

    const measure = () => {
      const w = el.offsetWidth;
      if (!w) return;
      const half = iconHalfPx();
      const yellowRadiusPx = (TEXT_RING_R / 400) * w;
      const fruitR = yellowRadiusPx + GAP_ORBITS_PX + half;
      setFruitRadiusPx(fruitR);
      // Metade do quadrado = w/2; ícone + raio não podem ultrapassar sem padding extra.
      const pad = Math.max(0, Math.ceil(fruitR + half - w / 2 + 16));
      setOrbitPadPx(pad);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const mql = window.matchMedia('(min-width: 640px)');
    mql.addEventListener('change', measure);
    return () => {
      ro.disconnect();
      mql.removeEventListener('change', measure);
    };
  }, []);

  return (
    <section
      ref={scrollRef}
      className="relative flex min-h-[100svh] w-full max-w-[100vw] items-center justify-center overflow-x-clip overflow-y-visible bg-[#4b2e3d] px-4 py-12 sm:px-6 sm:py-16"
      aria-labelledby="ingredients-orbit-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_58%_at_50%_48%,rgba(114,28,55,0.28),transparent_68%)]" />

      <div
        className="relative mx-auto box-content overflow-visible"
        style={{ padding: orbitPadPx }}
      >
        <div
          ref={orbitBoxRef}
          className="relative aspect-square w-[min(88vw,480px)] overflow-visible sm:w-[min(86vw,540px)] md:w-[min(78vw,600px)]"
        >
          <motion.div
            className={`absolute inset-0 ${images.length === 0 ? 'pointer-events-none' : ''}`}
            style={{ rotate: rotateIconRing }}
          >
            {images.length > 0 &&
              fruitRadiusPx > 0 &&
              images.map((item, i) => {
                const angle = (360 / images.length) * i;
                return (
                  <div
                    key={`${item.src}-${i}`}
                    className="absolute left-1/2 top-1/2 h-14 w-14 sm:h-16 sm:w-16"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${fruitRadiusPx}px) rotate(${-angle}deg)`,
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-contain drop-shadow-md"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                );
              })}
          </motion.div>

          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-visible">
            <motion.div className="relative h-full w-full overflow-visible" style={{ rotate: rotateTextRing }}>
              <svg viewBox="0 0 400 400" className="h-full w-full overflow-visible" aria-hidden>
                <defs>
                  <path id={pathId} d={textRingPathD()} fill="none" />
                </defs>
                <text
                  className="font-sans text-[12px] font-black uppercase tracking-[0.22em] sm:text-[13px] sm:tracking-[0.24em]"
                  fill="#F5D547"
                  textLength={TEXT_PATH_LENGTH}
                  lengthAdjust="spacing"
                >
                  <textPath href={`#${pathId}`} startOffset="0%">
                    {innerRingText}
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-10 text-center sm:px-14">
            <h2
              id="ingredients-orbit-heading"
              className="max-w-[11ch] font-sans text-[clamp(2.5rem,9.5vw,5.25rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-[#F7F2E8] antialiased sm:max-w-[13ch] sm:leading-[0.9] md:text-[clamp(3rem,8.5vw,5.5rem)]"
            >
              Apenas
              <br />
              ingredientes
              <br />
              reais
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
