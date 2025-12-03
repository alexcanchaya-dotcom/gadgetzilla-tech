import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="mt-16 rounded-3xl border border-white/10 bg-night/80 p-8 shadow-neon">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h4 className="text-2xl font-bold text-white">GadgetZilla</h4>
          <p className="mt-2 text-sm text-white/70">
            Amazon Affiliate Disclosure: As an Amazon Associate we earn from qualifying purchases.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email for epic drops"
            className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-neonBlue focus:shadow-glow sm:w-72"
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 18px rgba(0, 217, 255, 0.6)' }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-neonBlue/60 bg-gradient-to-r from-neonBlue to-cyberPurple px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night"
          >
            Join the Squad
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
