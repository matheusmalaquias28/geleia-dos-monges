import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import AboutImagePlaceholder from '../components/AboutImagePlaceholder';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const timelineItems = [
  {
    year: '1988',
    title: 'O Início',
    text: 'A Fruitland nasce na Serra da Mantiqueira com atividades extremamente artesanais. O esmero e o capricho dão os primeiros caminhos. O cliente é o visitante de Campos do Jordão.',
  },
  {
    year: '1995',
    title: 'Expansão Artesanal',
    text: 'A empresa cresce mantendo a essência artesanal. Novos sabores são incorporados à linha de geleias. A qualidade começa a ser reconhecida além de Campos do Jordão.',
  },
  {
    year: '2000',
    title: 'Linha Diet',
    text: 'É criada a linha de produtos Sem Adição de Açúcares. A Fruitland atende a um novo nicho com a mesma qualidade de sempre.',
  },
  {
    year: '2005',
    title: 'Escala e Inovação',
    text: 'Novas tecnologias e produção em larga escala são incorporadas sem perder a essência artesanal. A linha de geleias atinge 11 sabores. Surgem linhas de conservas, doces e compotas.',
  },
  {
    year: '2010',
    title: 'Marca Própria',
    text: 'A qualidade é referendada pelos maiores hipermercados brasileiros. A Fruitland passa a produzir com a marca própria dos principais varejistas do país.',
  },
  {
    year: '2015+',
    title: 'Exportação Internacional',
    text: 'Os sabores da Mantiqueira cruzam fronteiras. A Fruitland exporta para França, Estados Unidos e Argentina, levando o artesanato brasileiro ao mundo.',
  },
];

const stats = [
  { value: '35+', label: 'Anos de história' },
  { value: '+11', label: 'Sabores de geleia' },
  { value: '3', label: 'Países de exportação' },
  { value: '5', label: 'Linhas de produto' },
] as const;

const statContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate min-h-[100dvh] w-full min-w-0 overflow-hidden bg-espresso">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 bg-cover bg-no-repeat bg-[position:52%_center] sm:bg-center"
            style={{ backgroundImage: "url('/hero-fachada.png')" }}
          />
          <div className="absolute inset-0 bg-espresso/50" />
        </div>

        <div className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 py-28 text-center sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-3xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-cream/80 backdrop-blur-sm"
            >
              Desde 1988
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl"
            >
              Uma história de <span className="text-amber-warm italic">esmero</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease }}
              className="font-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/65 sm:text-xl"
            >
              Nascemos em 1988 na Serra da Mantiqueira com um objetivo simples e poderoso: encantar pelo paladar.
              Mais de 35 anos depois, esse compromisso continua vivo em cada pote.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48, ease }}
            >
              <Link
                to="/contato"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/[0.06] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm transition-colors hover:border-cream/40 hover:bg-cream/[0.1]"
              >
                Fale conosco
                <ChevronRight size={16} className="opacity-70" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-cream via-cream to-cream-dark py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 70% 45% at 0% 0%, rgba(114,28,55,0.08), transparent 50%), radial-gradient(ellipse 55% 40% at 100% 100%, rgba(200,133,26,0.1), transparent 50%)',
          }}
          aria-hidden
        />

        <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
          <AnimatedSection direction="left" className="order-2 min-w-0 lg:order-1">
            <span className="section-label mb-4 inline-flex items-center gap-2 rounded-full border border-burgundy-800/10 bg-burgundy-800/[0.04] px-3 py-1.5 font-sans text-[10px] tracking-[0.28em]">
              A empresa
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-espresso sm:text-4xl lg:text-[2.75rem]">
              A Fruitland: <em className="italic text-burgundy-800">nossa empresa</em>
            </h2>
            <div className="mt-6 space-y-5 font-body text-lg leading-relaxed text-espresso/70 sm:text-xl">
              <p>
                A Fruitland Com. e Ind. de Alimentos está localizada na Serra da Mantiqueira, a 1.600 metros de
                altitude, na cidade de Campos do Jordão — um dos destinos mais charmosos do estado de São Paulo.
              </p>
              <p>
                O que começou como uma pequena produção artesanal voltada ao turismo local se transformou em uma
                empresa reconhecida nacional e internacionalmente, sem perder a alma artesanal que a define.
              </p>
              <p>
                Hoje, produzimos mais de 11 sabores de geleias, além de doces, conservas e compotas. Exportamos para
                França, EUA e Argentina, e produzimos marca própria para os maiores hipermercados do Brasil.
              </p>
            </div>

            <motion.div
              variants={statContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statItem}
                  className="min-w-[7.5rem] flex-1 rounded-2xl border border-espresso/[0.08] bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur-sm sm:min-w-0 sm:flex-none sm:text-left"
                >
                  <div className="font-display text-2xl font-bold tabular-nums text-burgundy-800 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.16em] text-espresso/45">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="order-1 min-w-0 lg:order-2">
            <AboutImagePlaceholder
              label="Serra da Mantiqueira"
              caption="Espaço reservado para fotografia da região e da fábrica."
              aspect="aspect-[4/5] sm:aspect-[5/6]"
            />
          </AnimatedSection>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <AnimatedSection className="mb-10 max-w-2xl lg:mb-12">
            <span className="section-label mb-4 block">Nosso olhar</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso sm:text-4xl">
              O lugar e o processo
            </h2>
            <p className="font-body mt-4 text-lg leading-relaxed text-espresso/65">
              Três imagens para contar a origem, o cuidado e o resultado do trabalho artesanal.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
            <AnimatedSection delay={0.05} className="lg:col-span-7">
              <AboutImagePlaceholder
                label="Fachada histórica"
                caption="Espaço reservado para a fachada da Fruitland em Campos do Jordão."
                aspect="aspect-[16/10] lg:aspect-[16/9]"
              />
            </AnimatedSection>
            <div className="grid gap-6 lg:col-span-5">
              <AnimatedSection delay={0.1}>
                <AboutImagePlaceholder
                  label="Produção artesanal"
                  caption="Espaço reservado para o preparo das geleias."
                  aspect="aspect-[4/3]"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.16}>
                <AboutImagePlaceholder
                  label="Seleção de frutas"
                  caption="Espaço reservado para frutas da Mantiqueira."
                  aspect="aspect-[4/3]"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-cream-dark py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(114,28,55,0.08), transparent 60%)',
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <AnimatedSection className="mb-12 text-center lg:mb-16">
            <span className="section-label mb-3 inline-block rounded-full border border-burgundy-800/10 bg-white/50 px-3 py-1 text-[10px]">
              Trajetória
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso sm:text-5xl">
              Nossa história
            </h2>
            <p className="font-body mx-auto mt-4 max-w-xl text-espresso/60">
              Marcos que moldaram a Fruitland — do ateliê à exportação, sem perder o capricho.
            </p>
          </AnimatedSection>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
            <div className="relative ml-2 border-l border-espresso/10 pl-8 sm:ml-3 sm:pl-10">
              <ul className="space-y-10 sm:space-y-12">
                {timelineItems.map((item, i) => (
                  <AnimatedSection key={item.year} delay={i * 0.06}>
                    <li className="relative">
                      <span className="absolute -left-[2.125rem] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[2.875rem]">
                        <span className="h-2.5 w-2.5 rounded-full border-2 border-cream-dark bg-burgundy-800 shadow-[0_0_0_3px_rgba(237,229,208,0.95)] ring-2 ring-amber-warm/35" />
                      </span>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-amber-warm">
                        {item.year}
                      </span>
                      <div className="mt-3 rounded-2xl border border-espresso/[0.06] bg-white/90 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                        <h3 className="font-display text-xl font-semibold text-espresso">{item.title}</h3>
                        <p className="font-body mt-3 text-base leading-relaxed text-espresso/65">{item.text}</p>
                      </div>
                    </li>
                  </AnimatedSection>
                ))}
              </ul>
            </div>

            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <AboutImagePlaceholder
                  label="Arquivo histórico"
                  caption="Espaço reservado para fotografias da trajetória da empresa."
                  aspect="aspect-[4/5]"
                />
                <AboutImagePlaceholder
                  label="Linha de produção"
                  caption="Espaço reservado para imagens do processo ao longo dos anos."
                  aspect="aspect-[16/10]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-espresso via-[#0f0806] to-espresso py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 55% 45% at 10% 20%, rgba(114,28,55,0.35), transparent 50%), radial-gradient(ellipse 45% 40% at 90% 80%, rgba(200,133,26,0.08), transparent 50%)',
          }}
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <AnimatedSection className="mb-12 max-w-2xl text-left lg:mb-14">
            <span className="mb-4 inline-flex rounded-full border border-cream/15 bg-cream/[0.06] px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-cream/75">
              Propósito
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
              Missão, visão e valores
            </h2>
          </AnimatedSection>

          <div className="divide-y divide-cream/[0.07]">
            {[
              {
                num: '01',
                title: 'Missão',
                icon: Target,
                text: 'Encantar pelo paladar, levando o sabor da Serra da Mantiqueira às mesas do Brasil e do mundo, com esmero, carinho e comprometimento com a qualidade.',
              },
              {
                num: '02',
                title: 'Visão',
                icon: Eye,
                text: 'Ser referência nacional em geleias e conservas artesanais de alta qualidade, reconhecida pela excelência do produto e pela tradição que nos define.',
              },
              {
                num: '03',
                title: 'Valores',
                icon: Heart,
                text: 'Esmero artesanal, qualidade sem compromisso, respeito ao cliente, inovação com tradição, e o carinho em cada detalhe de cada produto que sai de nossas mãos.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 lg:gap-14 lg:py-10">
                  <span
                    className="shrink-0 font-display text-5xl font-bold leading-none tabular-nums text-cream/[0.10] transition-colors duration-300 group-hover:text-amber-warm/22 sm:w-16 sm:text-6xl lg:text-7xl"
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-burgundy-800/50 ring-1 ring-amber-warm/25 transition-all duration-300 group-hover:bg-burgundy-800/70 group-hover:ring-amber-warm/40">
                      <item.icon size={20} strokeWidth={1.75} className="text-amber-warm" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-cream/45">
                        {item.title}
                      </p>
                      <p className="font-body mt-3 max-w-xl text-lg leading-relaxed text-cream/65 transition-colors duration-300 group-hover:text-cream/78 sm:text-xl">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-cream py-20 sm:py-24 lg:py-28">
        <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-8 lg:px-12 xl:px-16">
          <AnimatedSection className="mx-auto mb-12 max-w-2xl text-center lg:mb-14">
            <span className="section-label mb-3 inline-block">Presença global</span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-espresso sm:text-5xl">
              Sabores que cruzam fronteiras
            </h2>
            <p className="font-body mt-4 text-lg leading-relaxed text-espresso/65">
              A qualidade dos produtos Monges foi reconhecida além das fronteiras brasileiras. Exportamos para três
              países, levando o melhor da Serra da Mantiqueira ao paladar internacional.
            </p>
          </AnimatedSection>

          <AnimatedSection className="mb-12">
            <AboutImagePlaceholder
              label="Exportação internacional"
              caption="Espaço reservado para imagens de mercados e parceiros no exterior."
              aspect="aspect-[21/9] sm:aspect-[16/7]"
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 divide-y divide-espresso/[0.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { country: 'França', flag: '🇫🇷', desc: 'Mercado gourmet europeu' },
              { country: 'Estados Unidos', flag: '🇺🇸', desc: 'Comunidade brasileira e mercado especializado' },
              { country: 'Argentina', flag: '🇦🇷', desc: 'Parceiro regional sul-americano' },
            ].map((c, i) => (
              <AnimatedSection key={c.country} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.35, ease }}
                  className="flex flex-col gap-3 py-8 sm:px-10 first:sm:pl-0 last:sm:pr-0"
                >
                  <span className="text-4xl" aria-hidden>
                    {c.flag}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-espresso sm:text-3xl">{c.country}</h3>
                  <p className="font-body text-base leading-relaxed text-espresso/60">{c.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
