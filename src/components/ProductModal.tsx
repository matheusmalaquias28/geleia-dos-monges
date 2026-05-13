import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Package, Phone } from 'lucide-react';
import { Product, categoryLabels } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
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

          <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pointer-events-auto flex max-h-[min(92vh,860px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-cream shadow-2xl shadow-black/25"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative flex min-h-[15rem] shrink-0 items-center justify-center overflow-hidden sm:min-h-[17rem] md:min-h-[21rem]"
                style={product.image ? undefined : { backgroundColor: `${product.color}33` }}
              >
                {product.image ? (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 h-full w-full object-cover"
                      decoding="async"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-espresso/10"
                      aria-hidden
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{ backgroundColor: product.color }}
                    />
                    <span
                      className="relative z-10 select-none text-[5.5rem] leading-none sm:text-[6.5rem] md:text-[8.5rem]"
                      aria-hidden
                    >
                      {product.emoji}
                    </span>
                  </>
                )}

                <span
                  className="absolute bottom-4 left-4 z-10 font-sans text-[10px] tracking-[0.2em] uppercase text-white px-3 py-1.5 sm:bottom-5 sm:left-5"
                  style={{ backgroundColor: product.image ? 'rgba(26,12,8,0.72)' : product.color }}
                >
                  {categoryLabels[product.category]}
                </span>

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-espresso/85 text-cream transition-colors hover:bg-espresso sm:right-4 sm:top-4 rounded-full"
                  aria-label="Fechar"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
                <h2
                  id="product-modal-title"
                  className="font-display text-2xl font-bold text-espresso sm:text-3xl md:text-[2rem] mb-3"
                >
                  {product.name}
                </h2>
                <p className="font-body text-base leading-relaxed text-espresso/70 md:text-lg mb-6">
                  {product.details}
                </p>

                <div className="mb-6 space-y-3 border-t border-cream-darker pt-5">
                  {product.weight && (
                    <div className="flex items-center gap-3">
                      <Package size={18} className="shrink-0 text-amber-warm" strokeWidth={1.75} />
                      <span className="font-sans text-sm text-espresso/60">
                        Peso: <strong className="text-espresso">{product.weight}</strong>
                      </span>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-amber-warm" strokeWidth={1.75} />
                    <span className="font-sans text-sm text-espresso/60 leading-relaxed">
                      Origem:{' '}
                      <strong className="text-espresso">Serra da Mantiqueira, Campos do Jordão - SP</strong>
                    </span>
                  </div>
                </div>

                <a
                  href="tel:+551236621346"
                  className="btn-primary flex w-full items-center justify-center gap-3"
                >
                  <Phone size={18} strokeWidth={1.75} />
                  <span>Solicitar Informacoes</span>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
