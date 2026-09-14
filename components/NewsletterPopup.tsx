'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewsletterForm } from '@/components/NewsletterForm';

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem('gadgetzilla-subscribed');
    const hasDismissed = localStorage.getItem('gadgetzilla-popup-dismissed');

    if (hasSubscribed || hasDismissed) return;

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

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('gadgetzilla-popup-dismissed', Date.now().toString());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-50 bg-night/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 px-4"
          >
            <div className="relative overflow-hidden rounded-3xl border border-neonBlue/40 bg-gradient-to-br from-night via-midnight to-night p-8 shadow-[0_0_60px_rgba(0,217,255,0.25)]">
              <button
                onClick={handleDismiss}
                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
                aria-label="Close newsletter popup"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyberPurple/30 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-neonBlue/30 blur-3xl" />

              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-hotPink/40 bg-hotPink/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-hotPink mb-4">
                    Deal alerts
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Get the catalog refresh in your inbox
                  </h3>
                  <p className="text-white/70">
                    No fake 10% code. If the list is live, you join it. If not, we open email to hello@gadgetzilla.tech.
                  </p>
                </div>

                <NewsletterForm source="popup" submitLabel="Send me drops" className="[&_input]:sm:w-full" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
