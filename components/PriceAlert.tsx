'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Gadget } from '@/data/gadgets';

type PriceAlertProps = {
  product: Gadget;
};

export function PriceAlertButton({ product }: PriceAlertProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const currentPrice = parseInt(product.price.replace('$', '').replace(',', ''));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Here you would integrate with your backend/email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');

      // Store locally for now
      const alerts = JSON.parse(localStorage.getItem('gadgetzilla-price-alerts') || '[]');
      alerts.push({
        productId: product.id,
        productName: product.name,
        email,
        targetPrice: parseInt(targetPrice),
        currentPrice,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('gadgetzilla-price-alerts', JSON.stringify(alerts));

      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setEmail('');
        setTargetPrice('');
      }, 2000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 rounded-full border border-cyberPurple/40 bg-cyberPurple/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyberPurple transition hover:bg-cyberPurple/20"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        Price Alert
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-night/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 px-4"
            >
              <div className="relative overflow-hidden rounded-2xl border border-cyberPurple/30 bg-night/95 p-6 shadow-[0_0_40px_rgba(181,55,242,0.2)]">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {status === 'success' ? (
                  <div className="text-center py-8">
                    <div className="text-5xl mb-4">🔔</div>
                    <h3 className="text-xl font-bold text-white mb-2">Alert Set!</h3>
                    <p className="text-white/70">
                      We'll email you when {product.name} drops to ${targetPrice}.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="rounded-full bg-cyberPurple/20 p-2">
                          <svg className="h-5 w-5 text-cyberPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </span>
                        <h3 className="text-xl font-bold text-white">Set Price Alert</h3>
                      </div>
                      <p className="text-sm text-white/70">{product.name}</p>
                      <p className="text-2xl font-bold text-neonBlue mt-2">Current: {product.price}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Target Price
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">$</span>
                          <input
                            type="number"
                            value={targetPrice}
                            onChange={(e) => setTargetPrice(e.target.value)}
                            placeholder={String(Math.floor(currentPrice * 0.8))}
                            required
                            min="1"
                            max={currentPrice - 1}
                            className="w-full rounded-xl border border-white/20 bg-white/5 py-3 pl-8 pr-4 text-white placeholder:text-white/40 outline-none transition focus:border-cyberPurple"
                          />
                        </div>
                        <p className="mt-1 text-xs text-white/50">
                          Suggested: ${Math.floor(currentPrice * 0.8)} (20% off)
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="w-full rounded-xl border border-white/20 bg-white/5 py-3 px-4 text-white placeholder:text-white/40 outline-none transition focus:border-cyberPurple"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-xl bg-gradient-to-r from-cyberPurple to-neonBlue py-3 text-sm font-semibold uppercase tracking-wider text-night transition"
                      >
                        Create Alert
                      </motion.button>

                      {status === 'error' && (
                        <p className="text-center text-sm text-red-400">
                          Something went wrong. Please try again.
                        </p>
                      )}
                    </form>

                    <p className="mt-4 text-center text-xs text-white/40">
                      We'll only email you about this price alert. No spam ever.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
