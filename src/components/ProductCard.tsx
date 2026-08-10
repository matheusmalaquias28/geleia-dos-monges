import { motion } from 'framer-motion';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative cursor-pointer overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
      onClick={() => onClick(product)}
    >
      {product.image ? (
        <div className="relative h-52 overflow-hidden">
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
          className="flex h-40 items-center justify-center"
          style={{ backgroundColor: `${product.color}22` }}
        >
          <span className="select-none text-5xl" aria-hidden>
            {product.emoji}
          </span>
        </div>
      )}

      <div className="p-5">
        <h3 className="mb-1.5 font-display text-lg font-semibold leading-tight text-espresso">
          {product.name}
        </h3>
        <p className="font-body text-sm leading-relaxed text-espresso/60">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
