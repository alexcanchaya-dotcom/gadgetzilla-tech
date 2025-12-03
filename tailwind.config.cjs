/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#0a0e27',
        midnight: '#1a1d2e',
        neonBlue: '#00d9ff',
        cyberPurple: '#b537f2',
        hotPink: '#ff006e',
        limePulse: '#39ff14',
        blazeOrange: '#ff6b35',
      },
      fontFamily: {
        display: ['var(--font-rajdhani)'],
        body: ['var(--font-rajdhani)'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(0, 217, 255, 0.35)',
        neon: '0 0 35px rgba(181, 55, 242, 0.45)',
      },
      backgroundImage: {
        'grid-glow': 'radial-gradient(circle at 1px 1px, rgba(0, 217, 255, 0.14) 1px, transparent 0)',
      },
      animation: {
        pulseGlow: 'pulseGlow 2.8s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(57, 255, 20, 0.35)' },
          '50%': { boxShadow: '0 0 0 10px rgba(57, 255, 20, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
