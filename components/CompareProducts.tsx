'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { gadgets, type Gadget } from '@/data/gadgets';

export function CompareProducts() {
  const [selectedProducts, setSelectedProducts] = useState<Gadget[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showSelector, setShowSelector] = useState(false);

  const addProduct = (product: Gadget) => {
    if (selectedProducts.length < 3 && !selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product]);
    }
    setShowSelector(false);
  };

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId));
  };

  const clearAll = () => {
    setSelectedProducts([]);
    setIsOpen(false);
  };

  return (
    <>
      {/* Compare Button - Fixed position */}
      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-gradient-to-r from-cyberPurple to-neonBlue px-6 py-4 text-sm font-semibold uppercase tracking-wider text-night shadow-[0_0_30px_rgba(181,55,242,0.4)]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-night/30 text-white">
              {selectedProducts.length}
            </span>
            Compare Products
          </motion.button>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-night/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 z-50 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-night/95 shadow-2xl lg:inset-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Compare Products</h2>
                  <p className="text-sm text-white/60">Compare up to 3 products side by side</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={clearAll}
                    className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Comparison Grid */}
              <div className="flex-1 overflow-auto p-6">
                <div className={`grid gap-6 ${
                  selectedProducts.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                  selectedProducts.length === 2 ? 'grid-cols-2 max-w-3xl mx-auto' :
                  'grid-cols-3'
                }`}>
                  {selectedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="relative rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="absolute -right-2 -top-2 rounded-full bg-red-500/80 p-1 text-white transition hover:bg-red-500"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h3 className="font-bold text-white mb-2">{product.name}</h3>

                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/60">Price</span>
                          <span className="font-semibold text-neonBlue">{product.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Hype Score</span>
                          <span className="text-limePulse">{product.score}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Category</span>
                          <span className="text-white/80">{product.category}</span>
                        </div>
                        <div>
                          <span className="text-white/60 block mb-2">Features</span>
                          <div className="flex flex-wrap gap-1">
                            {product.tags.map(tag => (
                              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block w-full rounded-full bg-gradient-to-r from-neonBlue to-cyberPurple py-2 text-center text-sm font-semibold uppercase tracking-wider text-night transition hover:shadow-neon"
                      >
                        Get on Amazon
                      </a>
                    </div>
                  ))}

                  {/* Add Product Slot */}
                  {selectedProducts.length < 3 && (
                    <button
                      onClick={() => setShowSelector(true)}
                      className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 p-8 transition hover:border-neonBlue/50 hover:bg-white/5"
                    >
                      <div className="rounded-full border border-white/20 bg-white/5 p-4 mb-3">
                        <svg className="h-8 w-8 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <span className="text-white/60">Add Product</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Selector Modal */}
      <AnimatePresence>
        {showSelector && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSelector(false)}
              className="fixed inset-0 z-[60] bg-night/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-x-4 bottom-4 top-20 z-[60] overflow-hidden rounded-3xl border border-white/10 bg-night/95 lg:inset-x-[20%]"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <h3 className="font-bold text-white">Select a Product to Compare</h3>
                <button
                  onClick={() => setShowSelector(false)}
                  className="rounded-full p-2 text-white/50 transition hover:bg-white/10"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="h-full overflow-auto p-4 pb-20">
                <div className="grid gap-3 sm:grid-cols-2">
                  {gadgets
                    .filter(g => !selectedProducts.find(p => p.id === g.id))
                    .map((product) => (
                      <button
                        key={product.id}
                        onClick={() => addProduct(product)}
                        className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 text-left transition hover:border-neonBlue/50 hover:bg-white/10"
                      >
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white">{product.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-neonBlue font-semibold">{product.price}</span>
                            <span className="text-xs text-white/50">{product.category}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Export helper for product cards to add compare button
export function CompareButton({ product, onAdd }: { product: Gadget; onAdd: (p: Gadget) => void }) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onAdd(product);
      }}
      className="absolute right-3 top-3 z-10 rounded-full bg-night/80 p-2 text-white/60 opacity-0 transition group-hover:opacity-100 hover:bg-neonBlue/20 hover:text-neonBlue"
      title="Add to compare"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    </button>
  );
}
