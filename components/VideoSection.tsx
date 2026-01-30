'use client';

import { motion } from 'framer-motion';
import { featuredVideos } from '@/data/videos';

const PlayIcon = () => (
  <svg className="w-8 h-8 text-night" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 }
  })
};

export default function VideoSection() {
  return (
    <section className="py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hotPink/40 bg-hotPink/10 mb-4"
        >
          <span className="h-2 w-2 rounded-full bg-hotPink animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-hotPink">Expert Reviews</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neonBlue via-cyberPurple to-hotPink bg-clip-text text-transparent"
        >
          Watch Before You Buy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-lg max-w-2xl mx-auto"
        >
          See the pros test and review the hottest gadgets. Real unboxings, honest opinions, zero BS.
        </motion.p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredVideos.map((video, index) => (
          <motion.a
            key={video.id}
            href={`https://www.youtube.com/watch?v=${video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-hotPink/50 hover:shadow-[0_0_30px_rgba(255,0,110,0.2)]"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-neonBlue via-cyberPurple to-hotPink flex items-center justify-center shadow-[0_0_30px_rgba(181,55,242,0.5)] opacity-90 group-hover:opacity-100 transition-opacity"
                >
                  <PlayIcon />
                </motion.div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-night/90 border border-white/10 px-2 py-1 rounded-md text-xs text-white font-semibold">
                {video.duration}
              </div>

              {/* Video Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-red-500/90 px-2 py-1 rounded-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">Video</span>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-4 relative">
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-hotPink/10 via-transparent to-cyberPurple/10" />
              </div>

              <div className="relative">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-hotPink transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neonBlue font-medium">{video.channel}</span>
                  <span className="text-white/50">{video.views} views</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-limePulse animate-pulse" />
                    <span className="text-xs text-white/50">{video.subscribers}</span>
                  </div>
                  <span className="text-white/30">|</span>
                  <span className="text-xs text-white/50">YouTube</span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <motion.a
          href="https://www.youtube.com/results?search_query=best+gaming+gadgets+2026"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-hotPink via-cyberPurple to-neonBlue text-night font-bold rounded-full transition-all uppercase tracking-wider text-sm"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Watch More Reviews
        </motion.a>
      </motion.div>
    </section>
  );
}
