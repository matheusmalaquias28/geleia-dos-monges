import { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicUrl } from '../lib/publicUrl';

/** Vídeo em loop (`public/maker/maker-loop.mp4`). */
const MAKER_VIDEO_FILE = 'maker/maker-loop.mp4';
const VIDEO_POSTER_FILE = 'img-hero-bg.jpg';

const STRIP_IMAGES: { file: string; alt: string }[] = [
  { file: 'maker/frame-07.png', alt: 'Processo artesanal' },
  { file: 'maker/frame-08.png', alt: 'Cozinha e preparo' },
  { file: 'maker/frame-09.png', alt: 'Seleção de frutas' },
  { file: 'maker/frame-10.png', alt: 'Produção' },
  { file: 'maker/frame-11.png', alt: 'Controle de qualidade' },
  { file: 'img-hero-bg.jpg', alt: 'Serra da Mantiqueira' },
  { file: 'geleia-21.png', alt: 'Linha de geleias artesanais' },
  { file: 'Slide 16_9 - 2.jpg', alt: 'Fruitland' },
  { file: 'img-hero-bg-mobile.png', alt: 'Geleias e produtos' },
  { file: 'orbit/morango.png', alt: 'Morango' },
  { file: 'orbit/banana.png', alt: 'Banana' },
  { file: 'orbit/abacaxi.png', alt: 'Abacaxi' },
  { file: 'orbit/framboesa.png', alt: 'Framboesa' },
  { file: 'orbit/damasco.png', alt: 'Damasco' },
  { file: 'orbit/laranja.png', alt: 'Laranja' },
];

export default function MeetTheMakerSection() {
  const [videoOk, setVideoOk] = useState(true);

  const makerVideoSrc = useMemo(() => publicUrl(MAKER_VIDEO_FILE), []);
  const videoPosterSrc = useMemo(() => publicUrl(VIDEO_POSTER_FILE), []);
  const stripResolved = useMemo(
    () => STRIP_IMAGES.map((item) => ({ ...item, src: publicUrl(item.file) })),
    [],
  );

  const onVideoError = useCallback(() => {
    setVideoOk(false);
  }, []);

  return (
    <section className="relative isolate w-full min-w-0 overflow-x-clip bg-white text-espresso" aria-labelledby="meet-maker-heading">
      <div className="relative mx-auto w-full max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="relative min-h-0 w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-espresso/[0.04] shadow-[0_24px_80px_-32px_rgba(26,12,8,0.18)] sm:rounded-3xl">
              {videoOk ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={videoPosterSrc}
                  onError={onVideoError}
                >
                  <source src={makerVideoSrc} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={videoPosterSrc}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-espresso/10"
                aria-hidden
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col justify-center lg:py-4">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-espresso/10 bg-cream-dark shadow-sm ring-2 ring-white">
                <img
                  src={publicUrl('logo-geleia-dos-monges.svg')}
                  alt=""
                  className="h-full w-full scale-90 object-contain p-1.5"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-espresso/55">
                Campos do Jordão
              </span>
            </div>

            <h2
              id="meet-maker-heading"
              className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-espresso"
            >
              Quem está por trás do sabor
            </h2>

            <p className="font-body mt-6 max-w-lg text-pretty text-lg leading-relaxed text-espresso/75 sm:text-xl">
              Há décadas transformamos frutas da Mantiqueira em geleias e doces com o mesmo cuidado de
              sempre. Conheça o nosso processo, a nossa gente e o ritmo calmo da montanha que faz a
              diferença em cada frasco.
            </p>

            <div className="mt-10">
              <Link
                to="/sobre"
                className="inline-flex items-center justify-center rounded-full bg-espresso px-9 py-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-cream transition-colors hover:bg-burgundy-900"
              >
                Ver nossa história
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full pb-16 pt-2 sm:pb-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-espresso/10 to-transparent" aria-hidden />

        <div
          className="relative w-full overflow-hidden"
          role="img"
          aria-label="Galeria de imagens em movimento continuo"
        >
          <div className="flex w-max will-change-transform motion-safe:animate-maker-marquee motion-reduce:animate-none [backface-visibility:hidden]">
            <ul className="flex shrink-0 items-stretch gap-3 pr-3 sm:gap-4 sm:pr-4 md:gap-5 md:pr-5">
              {stripResolved.map((item, i) => (
                <li key={`a-${item.file}-${i}`} className="h-[180px] w-[280px] shrink-0 sm:h-[210px] sm:w-[330px] md:h-[250px] md:w-[400px] lg:h-[280px] lg:w-[440px]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full rounded-xl object-cover shadow-sm ring-1 ring-espresso/[0.06] sm:rounded-2xl"
                    loading="eager"
                    decoding="async"
                    fetchPriority={i < 8 ? 'high' : 'low'}
                  />
                </li>
              ))}
            </ul>
            <ul className="flex shrink-0 items-stretch gap-3 pr-3 sm:gap-4 sm:pr-4 md:gap-5 md:pr-5" aria-hidden>
              {stripResolved.map((item, i) => (
                <li key={`b-${item.file}-${i}`} className="h-[180px] w-[280px] shrink-0 sm:h-[210px] sm:w-[330px] md:h-[250px] md:w-[400px] lg:h-[280px] lg:w-[440px]">
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full rounded-xl object-cover shadow-sm ring-1 ring-espresso/[0.06] sm:rounded-2xl"
                    loading="eager"
                    decoding="async"
                    fetchPriority="low"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
