import AnimatedSection from './AnimatedSection';
import { Product, categoryLabels } from '../data/products';

const featuredProductImages: Record<string, string> = {
  'geleia-morango': '/geleia-morango-monges.png',
  'geleia-amora': '/geleia-amora-monges.png',
  'geleia-framboesa': '/geleia-framboesa-monges.png',
};

interface FeaturedProductSpotlightProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export default function FeaturedProductSpotlight({ products, onSelect }: FeaturedProductSpotlightProps) {
  return (
    <section className="w-full min-w-0 overflow-x-clip bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <span className="section-label mb-4 block">Destaques</span>
          <h2 className="font-display text-4xl font-bold text-espresso md:text-5xl">Produtos em destaque</h2>
        </AnimatedSection>

        <div className="flex flex-col gap-10 lg:gap-14">
          {products.map((product, index) => {
            const imageSrc = featuredProductImages[product.id];
            const imageFirst = index % 2 === 1;

            return (
              <div
                key={product.id}
                className={`grid min-h-[22rem] items-stretch gap-6 lg:min-h-[26rem] lg:grid-cols-2 lg:gap-8 ${
                  imageFirst ? '[&>*:first-child]:lg:order-2 [&>*:last-child]:lg:order-1' : ''
                }`}
              >
                <AnimatedSection delay={0.05} direction={imageFirst ? 'right' : 'left'}>
                  <div className="flex h-full flex-col justify-center rounded-3xl bg-cream-dark px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
                    <span className="mb-5 inline-flex w-fit rounded-full border border-espresso/10 bg-cream px-3.5 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-burgundy-800">
                      {categoryLabels[product.category]}
                    </span>

                    <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold uppercase leading-[1.08] tracking-tight text-espresso">
                      {product.name}
                    </h3>

                    <p className="font-body mt-5 max-w-xl text-pretty text-lg leading-relaxed text-espresso/75 md:text-xl">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      onClick={() => onSelect(product)}
                      className="btn-primary mt-8 self-start shadow-md shadow-burgundy-950/10"
                    >
                      <span>Ver produto</span>
                    </button>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.12} direction={imageFirst ? 'left' : 'right'}>
                  <div className="h-full min-h-[18rem] overflow-hidden rounded-3xl bg-cream-dark sm:min-h-[22rem]">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    ) : (
                      <div
                        className="flex h-full min-h-[18rem] items-center justify-center sm:min-h-[22rem]"
                        style={{ backgroundColor: `${product.color}22` }}
                      >
                        <span className="select-none text-7xl" aria-hidden>
                          {product.emoji}
                        </span>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
