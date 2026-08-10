import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { products, Product, ProductCategory, categoryLabels } from '../data/products';

type FilterTab = 'all' | ProductCategory;

const tabs: { id: FilterTab; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'geleias', label: 'Geleias' },
  { id: 'geleias-diet', label: 'Geleias Diet' },
  { id: 'geleias-agridoces', label: 'Geleias Agridoces' },
  { id: 'mini-potes', label: 'Mini-Potes' },
  { id: 'conservas', label: 'Conservas' },
  { id: 'doces', label: 'Doces' },
  { id: 'institucional', label: 'Institucional' },
  { id: 'marca-propria', label: 'Marca Própria' },
];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeTab === 'all' ? products : products.filter((p) => p.category === activeTab);
  const countByCategory = (cat: FilterTab) =>
    cat === 'all' ? products.length : products.filter((p) => p.category === cat).length;

  return (
    <>
      {/* Header */}
      <section className="bg-espresso pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="section-label block mb-4">Linha Completa</span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-6">
              Nossos Produtos
            </h1>
            <p className="font-body text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Geleias, doces e conservas produzidas com esmero
              na Serra da Mantiqueira. Mais de 40 anos de tradição artesanal
              em cada pote.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-30 bg-cream/95 backdrop-blur-md border-b border-cream-darker shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-shrink-0 px-5 py-4 font-sans text-sm tracking-wide transition-colors duration-200 ${
                  activeTab === tab.id ? 'text-burgundy-800' : 'text-espresso/50 hover:text-espresso'
                }`}
              >
                {tab.label}
                <span className="ml-1.5 text-xs opacity-50">({countByCategory(tab.id)})</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy-800"
                    transition={{ duration: 0.3, ease }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 bg-cream-dark min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-sans text-sm text-espresso/40 mb-8">
            {filtered.length} produto{filtered.length !== 1 ? 's' : ''}
            {activeTab !== 'all' && ` em ${categoryLabels[activeTab as ProductCategory]}`}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Marca Propria */}
      <section className="py-20 bg-burgundy-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 border border-cream/20 flex items-center justify-center">
                <ShoppingBag size={24} className="text-amber-warm" />
              </div>
            </div>
            <span className="section-label block mb-4">Para Distribuidores</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-4">
              Interesse em Marca Propria?
            </h2>
            <p className="font-body text-cream/60 text-lg max-w-xl mx-auto mb-8">
              Produzimos geleias com a marca dos principais hipermercados
              brasileiros. Entre em contato.
            </p>
            <Link to="/contato" className="btn-primary inline-block">
              <span>Falar com a Equipe</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
