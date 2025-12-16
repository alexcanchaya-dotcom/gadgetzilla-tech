'use client';

import { featuredVideos } from '@/data/videos';

// Simple Play Icon SVG Component
const PlayIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3"></polygon>
  </svg>
export default function VideoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
            <span className="text-sm font-semibold text-purple-300">🎥 EXPERT REVIEWS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Watch Before You Buy
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See the pros test and review the hottest gadgets. Real unboxings, honest opinions, zero BS.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white font-semibold">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span className="font-medium">{video.channel}</span>
                  <span>{video.views} views</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs text-gray-500">{video.subscribers}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/results?search_query=best+gaming+gadgets+2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-full transition-all hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Watch More Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
