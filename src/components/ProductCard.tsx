import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Product, categoryLabels } from '../data/products';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="bg-white cursor-pointer group relative overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
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
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-espresso/10"
            aria-hidden
          />
          <span className="absolute top-3 left-3 bg-espresso/55 px-2.5 py-1 font-sans text-[9px] tracking-[0.22em] uppercase text-cream/90 backdrop-blur-sm">
            {categoryLabels[product.category]}
          </span>
          <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-cream/15 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
            <ArrowUpRight size={15} className="text-cream" aria-hidden />
          </div>
        </div>
      ) : (
        <div
          className="relative flex h-52 flex-col items-center justify-center overflow-hidden px-5 pb-5 pt-4"
          style={{ backgroundColor: product.color }}
        >
        {/* Subtle diagonal line texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 11px)',
          }}
          aria-hidden
        />

        {/* Category badge */}
        <span
          className="absolute top-3 left-3 bg-white/15 px-2.5 py-1 font-sans text-[9px] tracking-[0.22em] uppercase text-white/85 backdrop-blur-sm"
        >
          {categoryLabels[product.category]}
        </span>

        {/* Arrow on hover */}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center bg-cream/15 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <ArrowUpRight size={15} className="text-cream" aria-hidden />
        </div>

        {/* Label content */}
        <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
          <span className="font-sans text-[9px] font-medium uppercase tracking-[0.25em] text-white/55">
            Geleia dos Monges
          </span>
          <div className="flex items-center gap-2" aria-hidden>
            <span className="h-px w-5 bg-white/30" />
            <span className="h-1 w-1 rounded-full bg-white/45" />
            <span className="h-px w-5 bg-white/30" />
          </div>
          <p className="font-display text-xl font-bold italic leading-snug text-white" style={{ textWrap: 'balance' } as React.CSSProperties}>
            {product.name}
          </p>
        </div>

        {/* Bottom decorative rule */}
        <div className="absolute bottom-3 flex items-center gap-2" aria-hidden>
          <span className="h-px w-10 bg-white/22" />
          <span className="h-0.5 w-0.5 rounded-full bg-white/40" />
          <span className="h-px w-10 bg-white/22" />
        </div>
      </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-espresso mb-1.5 leading-tight">
          {product.name}
        </h3>
        <p className="font-body text-espresso/60 text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          {product.weight && (
            <span className="font-sans text-xs text-espresso/40 tracking-wide">{product.weight}</span>
          )}
          <span
            className="font-sans text-xs tracking-[0.15em] uppercase ml-auto opacity-60 transition-opacity duration-200 group-hover:opacity-100"
            style={{ color: product.color }}
          >
            Ver detalhes
          </span>
        </div>

        {/* Bottom accent bar — uses transform instead of width for perf */}
        <div
          className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ backgroundColor: product.color }}
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
