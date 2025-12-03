'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const heroVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-night/80 via-midnight/80 to-night/60 px-6 py-16 shadow-neon sm:px-10 lg:px-16">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -left-10 -top-10 h-56 w-56 rounded-full bg-cyberPurple blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-neonBlue blur-3xl" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={heroVariants}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-neonBlue/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-neonBlue shadow-glow">
            Daily updated ⚡ Boss-level picks
          </div>
          <h1 className="text-3xl font-bold uppercase leading-tight text-white drop-shadow-[0_0_25px_rgba(0,217,255,0.35)] sm:text-4xl lg:text-5xl">
            🔥 Discover the hottest gadgets
          </h1>
          <p className="text-lg text-slate-200/80 sm:text-xl">
            Level up your tech game with trending gear, RGB-loaded setups, and legendary deals engineered for gamers and gadget hunters.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 217, 255, 0.65)' }}
              whileTap={{ scale: 0.98 }}
              href="#trending"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-cyberPurple to-neonBlue px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night shadow-glow transition"
            >
              <span className="absolute inset-0 bg-white/15 mix-blend-screen" aria-hidden />
              <span className="relative">Level Up Now</span>
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 rounded-full border border-limePulse/50 bg-white/5 px-4 py-2 text-limePulse"
            >
              <span className="h-2 w-2 rounded-full bg-limePulse animate-pulseGlow" aria-hidden />
              Trending now
            </motion.div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-white/80">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2">Gaming Gear</span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2">Smart Home</span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-2">Audio</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.1, duration: 0.8 } }}
          className="relative"
        >
          <div className="neon-border rounded-2xl">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <motion.div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-hotPink/30 blur-3xl"
                animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-neonBlue/30 blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <div className="relative grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5 bg-night/80">
                  <Image
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
                    alt="Featured gaming headset"
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-limePulse/20 px-3 py-1 text-xs font-bold uppercase text-limePulse">
                    🔥 Trending Now
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-night/70 px-3 py-1 text-sm font-semibold text-white/80">
                    95% hype score
                  </div>
                </div>
                <div className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 shadow-inner">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/60">Featured Gear</p>
                    <h3 className="mt-2 text-xl font-bold text-white">Aurora RGB Gaming Headset</h3>
                    <p className="mt-1 text-sm text-white/70">
                      7.1 surround | AI mic | Carbon fiber. Built for clutch comms and neon setups.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    <span className="rounded-full border border-limePulse/50 bg-limePulse/20 px-3 py-1 text-limePulse">Limited</span>
                    <span className="rounded-full border border-neonBlue/50 bg-neonBlue/20 px-3 py-1 text-neonBlue">RGB</span>
                    <span className="rounded-full border border-hotPink/50 bg-hotPink/20 px-3 py-1 text-hotPink">Wireless</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-white/60">Amazon Prime</p>
                      <p className="text-2xl font-bold text-white">$129</p>
                    </div>
                    <motion.a
                      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 107, 53, 0.55)' }}
                      whileTap={{ scale: 0.95 }}
                      href="#trending"
                      className="rounded-full border border-blazeOrange/60 bg-blazeOrange px-4 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-night"
                    >
                      Get Yours
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
