import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, Award, Globe, Heart, Star, ArrowDown, ChevronRight, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FeaturedProductSpotlight from '../components/FeaturedProductSpotlight';
import ProductModal from '../components/ProductModal';
import HeroImageCarousel from '../components/HeroImageCarousel';
import MeetTheMakerSection from '../components/MeetTheMakerSection';
import { products, Product } from '../data/products';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate min-h-[100dvh] w-full min-w-0 overflow-hidden bg-espresso">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[position:52%_center] sm:bg-center"
            style={{ backgroundImage: "url('/hero-fachada.png')" }}
          />
          <div className="absolute inset-0 bg-espresso/50" />
        </div>

        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 pb-28 pt-28 text-center sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto min-w-0 max-w-4xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-cream/20 bg-cream/[0.12] px-4 py-2 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-warm shadow-[0_0_12px_rgba(200,133,26,0.65)]" aria-hidden />
                <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-cream/90">
                  Campos do Jordão · desde 1988
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease, delay: 0.2 }}
                className="font-display py-1.5 text-[clamp(3.06rem,9.1vw,5.25rem)] font-semibold leading-[1.08] tracking-tight text-cream sm:text-[clamp(2.35rem,7vw,5.25rem)]"
              >
                Da Serra da Mantiqueira
                <span className="mt-1 block pb-1.5 italic">
                  para a sua mesa
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.38 }}
                className="font-body mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cream/85 md:text-xl"
              >
                Geleias e doces artesanais na Serra da Mantiqueira, a 1.600 metros. Tradição,
                esmero e o carinho de quem faz no próprio ritmo da montanha.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
              >
                <Link to="/produtos" className="btn-primary shadow-lg shadow-black/25">
                  <span>Explorar produtos</span>
                </Link>
                <Link
                  to="/sobre"
                  className="group inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/[0.08] px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-cream/95 backdrop-blur-sm transition-colors hover:border-cream/40 hover:bg-cream/[0.14]"
                >
                  Nossa história
                  <ChevronRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-cream/50">Rolar</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} className="text-cream/55" strokeWidth={1.75} />
          </motion.div>
        </motion.div>
      </section>

      <HeroImageCarousel />

      <MeetTheMakerSection />

      {/* ===== BRAND STORY ===== */}
      <section className="relative isolate flex min-h-[100vh] w-full flex-col justify-center overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 45% at 0% 0%, rgba(114,28,55,0.08), transparent 50%), radial-gradient(ellipse 55% 40% at 100% 100%, rgba(200,133,26,0.1), transparent 50%)',
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:gap-20 xl:px-16">
          <div className="min-w-0">
            <AnimatedSection>
              <span className="section-label mb-4 inline-flex items-center gap-2 rounded-full border border-burgundy-800/10 bg-burgundy-800/[0.04] px-3 py-1.5 font-sans text-[10px] tracking-[0.28em]">
                Nossa essência
              </span>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
                Uma relação de <em className="italic text-burgundy-800">compromisso</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="mt-6">
              <p className="font-body max-w-xl text-lg leading-relaxed text-espresso/75 sm:text-xl">
                A Fruitland nasceu em 1988 na Serra da Mantiqueira com o claro objetivo de encantar pelo
                paladar. Inicialmente artesanal, onde o esmero e o capricho ditavam os caminhos.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15} className="mt-5">
              <p className="font-body max-w-xl text-lg leading-relaxed text-espresso/75 sm:text-xl">
                O tempo passou, novas tecnologias surgiram, novos produtos foram criados — mas o alicerce
                de tudo continua sendo a vontade de fazer bem feito, com carinho e perseverança.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-8">
              <Link
                to="/sobre"
                className="group inline-flex items-center gap-2 rounded-full border border-burgundy-800/20 bg-white/70 px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-burgundy-800 shadow-sm backdrop-blur-sm transition-all hover:border-burgundy-800/35 hover:bg-white"
              >
                Conheça nossa história
                <ChevronRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" className="relative min-w-0">
            <div className="relative overflow-hidden rounded-3xl border border-espresso/[0.08] bg-cream-dark shadow-[0_24px_80px_-32px_rgba(26,12,8,0.18)]">
              <div className="aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5]">
                <img
                  src="/vila-capivari-campos-do-jordao.png"
                  alt="Vista aérea da Vila Capivari, em Campos do Jordão"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-espresso/5"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80">
                  Vila Capivari
                </p>
                <p className="font-body mt-2 text-lg italic leading-snug text-cream sm:text-xl">
                  Campos do Jordão
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== POR QUE OS MONGES / NOSSOS VALORES ===== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-espresso via-[#100806] to-espresso py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 55% 45% at 15% 30%, rgba(114,28,55,0.35), transparent 55%), radial-gradient(ellipse 45% 40% at 85% 70%, rgba(200,133,26,0.08), transparent 50%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full bg-burgundy-800/25 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <AnimatedSection className="max-w-2xl text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.05] px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80">
                Nossos valores
              </span>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-cream sm:text-5xl lg:text-[3.25rem]">
                Por que os <em className="font-semibold italic text-amber-warm">Monges</em>?
              </h2>
              <p className="font-body mt-5 max-w-lg text-lg leading-relaxed text-cream/55">
                O que sustenta cada receita, cada pote e cada mesa onde a Fruitland chega.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="hidden shrink-0 lg:block">
              <p className="max-w-xs text-right font-sans text-xs uppercase leading-relaxed tracking-[0.25em] text-cream/35">
                Tradição · origem · exportação · afeto
              </p>
            </AnimatedSection>
          </div>

          <div className="divide-y divide-cream/[0.07]">
            {[
              {
                num: '01',
                icon: Mountain,
                title: 'Serra da Mantiqueira',
                text: 'Produzidos a 1.600 metros de altitude, onde o clima frio e o solo fértil garantem frutas de qualidade superior.',
              },
              {
                num: '02',
                icon: Award,
                title: 'Artesanal desde 1988',
                text: 'Mais de 35 anos de tradição e esmero. O compromisso com a qualidade artesanal nunca mudou.',
              },
              {
                num: '03',
                icon: Globe,
                title: 'Alcance Internacional',
                text: 'Nossos sabores cruzam fronteiras. Exportamos para França, EUA e Argentina, levando o Brasil ao mundo.',
              },
              {
                num: '04',
                icon: Heart,
                title: 'Feito com Carinho',
                text: 'O esmero e o capricho de sempre. Cada pote reflete o cuidado de quem faz com amor e perseverança.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 lg:gap-14 lg:py-10">
                  {/* Number */}
                  <span
                    className="shrink-0 font-display text-5xl font-bold leading-none tabular-nums text-cream/[0.10] transition-colors duration-300 group-hover:text-amber-warm/22 sm:w-16 sm:text-6xl lg:text-7xl"
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  {/* Icon + content */}
                  <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                    <div className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-burgundy-800/50 ring-1 ring-amber-warm/25 transition-all duration-300 group-hover:bg-burgundy-800/70 group-hover:ring-amber-warm/40">
                      <item.icon size={20} strokeWidth={1.75} className="text-amber-warm" aria-hidden />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl font-semibold leading-snug text-cream sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="font-body mt-2 max-w-xl text-base leading-relaxed text-cream/50 transition-colors duration-300 group-hover:text-cream/65">
                        {item.text}
                      </p>
                    </div>
                  </div>
                  {/* Right arrow — desktop only */}
                  <ChevronRight
                    size={20}
                    strokeWidth={1.5}
                    className="hidden shrink-0 self-center text-cream/12 transition-colors duration-300 group-hover:text-amber-warm/35 sm:block"
                    aria-hidden
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProductSpotlight products={featuredProducts} onSelect={setSelectedProduct} />

      {/* ===== MARQUEE ===== */}
      <div className="bg-burgundy-800 py-5 overflow-hidden">
        <div className="marquee-track whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-body italic text-2xl text-cream/70 px-8">
              Geleias &middot; Doces &middot; Conservas &middot; Compotas &middot; Marca Própria &middot;
            </span>
          ))}
        </div>
      </div>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="py-24 lg:py-36 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-14 lg:mb-16">
            <AnimatedSection>
              <span className="section-label block mb-4">Depoimentos</span>
              <h2 className="font-display text-4xl font-bold text-espresso md:text-5xl">
                O que nossos clientes dizem
              </h2>
            </AnimatedSection>
          </div>

          <div className="divide-y divide-espresso/[0.08]">
            {[
              {
                quote: 'A geleia de figo dos Monges é simplesmente incomparável. Desde que descobri, nunca mais quis outra.',
                name: 'Ana Paula M.',
                city: 'São Paulo, SP',
              },
              {
                quote: 'Compro há mais de 10 anos e a qualidade nunca decaiu. Um produto que realmente vale cada centavo.',
                name: 'Roberto S.',
                city: 'Rio de Janeiro, RJ',
              },
              {
                quote: 'Trouxe para os meus amigos franceses e eles adoraram. Um produto digno de exportação!',
                name: 'Carla T.',
                city: 'Campinas, SP',
              },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="grid grid-cols-[auto_1fr] gap-8 py-10 sm:gap-12 sm:py-12 lg:gap-16 lg:py-14">
                  {/* Stars — vertical column */}
                  <div className="flex flex-col gap-0.5 pt-1.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={11} className="text-amber-warm fill-amber-warm shrink-0" />
                    ))}
                  </div>
                  {/* Quote + reviewer */}
                  <div>
                    <p className="font-display text-2xl italic leading-relaxed text-espresso sm:text-3xl lg:text-[2rem]">
                      "{t.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <span className="h-px w-8 shrink-0 bg-espresso/20" aria-hidden />
                      <div>
                        <p className="font-sans text-sm font-semibold text-espresso">{t.name}</p>
                        <p className="font-sans text-xs text-espresso/45 mt-0.5">{t.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-forest via-forest-dark to-espresso" aria-hidden />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 55% at 20% 20%, rgba(232,168,50,0.12), transparent 50%), radial-gradient(ellipse 50% 45% at 90% 80%, rgba(74,138,45,0.25), transparent 55%)',
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-amber-warm/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="overflow-hidden rounded-[1.75rem] border border-cream/15 bg-cream/[0.07] p-8 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.55)] backdrop-blur-md sm:rounded-[2rem] sm:p-10 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-12 lg:p-12 xl:p-14">
              <div className="text-left">
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cream/20 bg-espresso/25 px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80">
                  Faça seu pedido
                </span>
                <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-[2.75rem] xl:text-5xl">
                  Leve o sabor da Mantiqueira{' '}
                  <span className="text-amber-warm">para casa</span>
                </h2>
                <p className="font-body mt-6 max-w-xl text-lg leading-relaxed text-cream/70 sm:text-xl">
                  Entre em contato para pedidos, informações sobre distribuição ou para conhecer nossa linha
                  de marca própria.
                </p>
              </div>

              <div className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:mt-0 lg:flex-col lg:items-stretch">
                <Link
                  to="/contato"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-espresso shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 sm:flex-1 lg:flex-none"
                >
                  Entrar em contato
                  <ChevronRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
                <a
                  href="tel:+551236621346"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cream/35 bg-cream/[0.04] px-8 py-4 font-sans text-sm font-medium tabular-nums text-cream backdrop-blur-sm transition-colors hover:border-cream/50 hover:bg-cream/[0.09] sm:flex-1 lg:flex-none"
                >
                  <Phone size={18} className="shrink-0 text-amber-warm" strokeWidth={1.75} aria-hidden />
                  (12) 3662-1346
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
