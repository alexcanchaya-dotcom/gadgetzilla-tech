'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const hasSubscribed = localStorage.getItem('gadgetzilla-subscribed');
    const hasDismissed = localStorage.getItem('gadgetzilla-popup-dismissed');

    if (hasSubscribed || hasDismissed) return;

    // Show popup after 15 seconds or on scroll
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 50) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would integrate with your email service (Mailchimp, ConvertKit, etc.)
    // For now, we'll simulate success
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      localStorage.setItem('gadgetzilla-subscribed', 'true');

      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch {
      setStatus('error');
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('gadgetzilla-popup-dismissed', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-50 bg-night/80 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-neonBlue/40 bg-gradient-to-br from-night via-midnight to-night p-8 shadow-[0_0_60px_rgba(0,217,255,0.25)]">
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Decorative elements */}
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyberPurple/30 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-neonBlue/30 blur-3xl" />

              <div className="relative">
                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-white mb-2">You're In!</h3>
                    <p className="text-white/70">Get ready for epic deals and legendary drops.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-hotPink/40 bg-hotPink/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-hotPink mb-4">
                        <span className="h-2 w-2 rounded-full bg-hotPink animate-pulse" />
                        Exclusive Access
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        🔥 Get 10% Off Your First Purchase
                      </h3>
                      <p className="text-white/70">
                        Join 50,000+ gamers getting exclusive deals, new releases, and legendary gadget drops.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email for epic drops..."
                        required
                        className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-white placeholder:text-white/40 outline-none transition focus:border-neonBlue focus:shadow-[0_0_20px_rgba(0,217,255,0.3)]"
                      />
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-full bg-gradient-to-r from-neonBlue via-cyberPurple to-hotPink py-4 text-sm font-semibold uppercase tracking-wider text-night transition"
                      >
                        Unlock My 10% Off
                      </motion.button>
                    </form>

                    {status === 'error' && (
                      <p className="mt-3 text-center text-sm text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <div className="mt-6 flex items-center justify-center gap-6 text-xs text-white/50">
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        No spam ever
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Unsubscribe anytime
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
