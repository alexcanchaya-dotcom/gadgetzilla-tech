/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com'
      }
    ]
  },
  async redirects() {
    // www → apex only. Do not add an apex → www rule; that loops with Vercel.
    return [
      {
        source: '/',
        has: [{ type: 'host', value: 'www.gadgetzilla.tech' }],
        destination: 'https://gadgetzilla.tech/',
        permanent: true
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.gadgetzilla.tech' }],
        destination: 'https://gadgetzilla.tech/:path*',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      { source: '/og-image.jpg', destination: '/opengraph-image' },
      { source: '/og-image.png', destination: '/opengraph-image' },
      { source: '/logo.png', destination: '/icon' }
    ];
  }
};

export default nextConfig;
