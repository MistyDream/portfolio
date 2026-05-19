import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: '#0b1224',
        surface: '#171c31',
        panel: '#141b2e',
        'panel-deep': '#081020',
        'panel-raised': '#161c31',
        border: '#1e293b',
        'text-primary': '#f1f5f9',
        'text-secondary': '#b8c6df',
        'text-muted': '#8d9bb4',
        accent: '#38bdf8',
        'accent-hover': '#7dd3fc',
        'accent-focus': '#38bdf830',
      },
      animation: {
        orbit: 'orbit 20s linear infinite',
        orbitReverse: 'orbit 20s linear infinite reverse',
        glow: 'glow 4s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        glow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.25' },
          '50%': { transform: 'scale(1.12)', opacity: '0.45' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
