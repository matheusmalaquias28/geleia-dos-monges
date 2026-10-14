import { motion } from 'framer-motion';
import { Product, categoryLabels } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const availableSizes = product.sizes.filter((s) => s.available);

  return (
    <motion.button
      type="button"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative flex w-full flex-col overflow-hidden bg-white text-left shadow-sm transition-shadow duration-300 hover:shadow-xl ${
        product.available ? '' : 'opacity-60'
      }`}
      onClick={() => onClick(product)}
    >
      {product.image ? (
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div
          className="flex aspect-[3/4] w-full items-center justify-center"
          style={{ backgroundColor: `${product.color}22` }}
        >
          <span className="select-none text-5xl" aria-hidden>
            {product.emoji}
          </span>
        </div>
      )}

      {!product.available && (
        <span className="absolute left-3 top-3 bg-espresso/85 px-2.5 py-1 font-sans text-[11px] uppercase tracking-wider text-cream">
          Indisponível
        </span>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-1.5 font-sans text-[11px] uppercase tracking-wider text-burgundy-800/70">
          {categoryLabels[product.category]}
        </span>
        <h3 className="font-display text-lg font-semibold leading-tight text-espresso">
          {product.name}
        </h3>

        {availableSizes.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tamanhos disponíveis">
            {availableSizes.map((size) => (
              <li
                key={size.label}
                className="border border-espresso/15 px-2 py-0.5 font-sans text-xs text-espresso/70"
              >
                {size.label}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto pt-4 font-sans text-xs uppercase tracking-wider text-burgundy-800 transition-colors group-hover:text-burgundy-950">
          Ver detalhes →
        </span>
      </div>
    </motion.button>
  );
}
