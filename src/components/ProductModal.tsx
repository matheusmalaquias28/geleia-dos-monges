import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Product } from '../data/products';

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

          <div className="pointer-events-none fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="pointer-events-auto w-full max-w-md overflow-hidden rounded-2xl bg-cream shadow-2xl shadow-black/25"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="relative flex min-h-[12rem] items-center justify-center overflow-hidden sm:min-h-[14rem]"
                style={product.image ? undefined : { backgroundColor: `${product.color}22` }}
              >
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover"
                    decoding="async"
                  />
                ) : (
                  <span className="relative z-10 select-none text-6xl" aria-hidden>
                    {product.emoji}
                  </span>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-espresso/85 text-cream transition-colors hover:bg-espresso"
                  aria-label="Fechar"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <div className="p-6 text-center sm:p-8">
                <h2
                  id="product-modal-title"
                  className="font-display text-2xl font-bold leading-tight text-espresso sm:text-3xl"
                >
                  {product.name}
                </h2>

                <Link
                  to="/contato"
                  onClick={onClose}
                  className="btn-primary mt-8 inline-flex w-full items-center justify-center"
                >
                  <span>Ver detalhes</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
