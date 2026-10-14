import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product, categoryLabels } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    setSelectedSize(null);
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = product ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  const image =
    (product && selectedSize && product.sizeImages?.[selectedSize]) || product?.image;

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] bg-espresso/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="pointer-events-none fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pointer-events-auto relative grid max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-cream shadow-2xl shadow-black/25 sm:grid-cols-2"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-espresso/85 text-cream transition-colors hover:bg-espresso"
                aria-label="Fechar"
              >
                <X size={20} strokeWidth={1.75} />
              </button>

              <div
                className="relative mx-auto aspect-[3/4] w-full max-w-[18rem] overflow-hidden bg-white sm:max-w-none"
                style={image ? undefined : { backgroundColor: `${product.color}22` }}
              >
                {image ? (
                  <img
                    key={image}
                    src={image}
                    alt={selectedSize ? `${product.name} ${selectedSize}` : product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    decoding="async"
                  />
                ) : (
                  <span
                    className="absolute inset-0 flex select-none items-center justify-center text-6xl"
                    aria-hidden
                  >
                    {product.emoji}
                  </span>
                )}
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <span className="section-label mb-3 block">{categoryLabels[product.category]}</span>
                <h2
                  id="product-modal-title"
                  className="font-display text-2xl font-bold leading-tight text-espresso sm:text-3xl"
                >
                  {product.name}
                </h2>

                {!product.available && (
                  <p className="mt-3 font-sans text-sm text-espresso/60">
                    Produto indisponível no momento.
                  </p>
                )}

                {product.sizes.length > 0 && (
                  <div className="mt-6">
                    <p className="mb-2 font-sans text-xs uppercase tracking-wider text-espresso/50">
                      Tamanhos
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => {
                        const hasImage = Boolean(product.sizeImages?.[size.label]);
                        const isSelected = selectedSize === size.label;
                        const chip = `border px-3 py-1.5 font-sans text-sm ${
                          size.available
                            ? isSelected
                              ? 'border-burgundy-800 bg-burgundy-800 text-cream'
                              : 'border-espresso/20 text-espresso'
                            : 'border-espresso/10 text-espresso/35 line-through'
                        }`;
                        return (
                          <li key={size.label}>
                            {hasImage ? (
                              <button
                                type="button"
                                onClick={() => setSelectedSize(size.label)}
                                aria-pressed={isSelected}
                                className={`${chip} transition-colors hover:border-burgundy-800`}
                              >
                                {size.label}
                              </button>
                            ) : (
                              <span className={chip}>
                                {size.label}
                                {!size.available && <span className="sr-only"> (indisponível)</span>}
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                    {product.sizes.some((s) => !s.available) && (
                      <p className="mt-2 font-sans text-xs text-espresso/45">
                        Tamanhos riscados estão indisponíveis.
                      </p>
                    )}
                  </div>
                )}

                {product.details && (
                  <p className="font-body mt-6 text-base leading-relaxed text-espresso/75">
                    {product.details}
                  </p>
                )}

                <div className="flex-1" />

                <Link
                  to="/contato"
                  onClick={onClose}
                  className="btn-primary mt-8 inline-flex w-full items-center justify-center"
                >
                  <span>Fale conosco</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
