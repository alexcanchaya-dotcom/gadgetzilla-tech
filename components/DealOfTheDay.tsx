'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getDealProducts, type Gadget } from '@/data/gadgets';

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

export function DealOfTheDay() {
  const [currentDeal, setCurrentDeal] = useState<Gadget | null>(null);
  const deals = getDealProducts();

  // Get tomorrow midnight for countdown
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const { hours, minutes, seconds } = useCountdown(tomorrow.toISOString());

  useEffect(() => {
    // Rotate through deals daily based on date
    const dayIndex = new Date().getDate() % deals.length;
    setCurrentDeal(deals[dayIndex]);
  }, [deals]);

  if (!currentDeal) return null;

  const savings = currentDeal.originalPrice
    ? parseInt(currentDeal.originalPrice.replace('$', '')) - parseInt(currentDeal.price.replace('$', ''))
    : 0;

  return (
    <section className="relative overflow-hidden rounded-3xl border-2 border-blazeOrange/50 bg-gradient-to-br from-night/90 via-blazeOrange/10 to-hotPink/10 p-6 shadow-[0_0_40px_rgba(255,107,53,0.25)] sm:p-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blazeOrange/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-hotPink/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-3xl"
            >
              🔥
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blazeOrange">Limited Time</p>
              <h2 className="text-2xl font-bold text-white">Deal of the Day</h2>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-white/60">Ends in:</span>
            <div className="flex gap-1">
              {[
                { value: hours, label: 'H' },
                { value: minutes, label: 'M' },
                { value: seconds, label: 'S' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="rounded-lg bg-night/80 border border-blazeOrange/40 px-3 py-2 text-xl font-bold text-blazeOrange tabular-nums">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] text-white/50">{item.label}</span>
                  {i < 2 && <span className="text-blazeOrange font-bold mx-1">:</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deal Content */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-night/60">
            <Image
              src={currentDeal.image}
              alt={currentDeal.name}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="rounded-full bg-blazeOrange px-4 py-2 text-sm font-bold uppercase text-night animate-pulse">
                Save ${savings}
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="rounded-full bg-night/80 border border-limePulse/50 px-3 py-1 text-sm font-semibold text-limePulse">
                {currentDeal.score}% Hype
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{currentDeal.category}</p>
              <h3 className="text-2xl font-bold text-white lg:text-3xl">{currentDeal.name}</h3>
            </div>

            <p className="text-white/70">{currentDeal.description}</p>

            <div className="flex flex-wrap gap-2">
              {currentDeal.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div>
                <p className="text-sm text-white/50 line-through">{currentDeal.originalPrice}</p>
                <p className="text-4xl font-bold text-blazeOrange">{currentDeal.price}</p>
              </div>
              <div className="rounded-lg bg-limePulse/20 border border-limePulse/40 px-3 py-1">
                <p className="text-xs text-limePulse font-semibold">
                  {Math.round((savings / parseInt(currentDeal.originalPrice?.replace('$', '') || '0')) * 100)}% OFF
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href={currentDeal.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blazeOrange to-hotPink px-8 py-3 text-sm font-semibold uppercase tracking-wider text-night"
              >
                <span className="h-2 w-2 rounded-full bg-night animate-ping" />
                Grab This Deal
              </motion.a>
              <motion.a
                href="#trending"
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/40"
              >
                See All Deals
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
