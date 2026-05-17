import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark:       '#080E1A',
        'dark-2':   '#0D1825',
        'dark-3':   '#111F2E',
        teal:       '#0B6860',
        'teal-mid': '#1A9088',
        'teal-glow':'#00C9B8',
        'teal-light':'#E5F3F1',
        cream:      '#F9F7F3',
        'warm-white':'#FFFEFB',
        ink:        '#1A1917',
        'ink-soft': '#3D3A36',
        'ink-muted':'#7A756F',
        border:     '#E5E1D9',
        'border-dark':'#1E2D3A',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1' }],
        '8xl': ['6rem',    { lineHeight: '1' }],
        '9xl': ['8rem',    { lineHeight: '1' }],
      },
      animation: {
        aurora:   'aurora 12s ease-in-out infinite alternate',
        'fade-up':'fadeUp 0.7s ease forwards',
        float:    'float 6s ease-in-out infinite',
        pulse2:   'pulse2 3s ease-in-out infinite',
        'spin-slow':'spin 20s linear infinite',
        shimmer:  'shimmer 2s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%':   { transform: 'scale(1) rotate(0deg) translate(0, 0)' },
          '33%':  { transform: 'scale(1.08) rotate(2deg) translate(2%, -1%)' },
          '66%':  { transform: 'scale(0.95) rotate(-2deg) translate(-1%, 2%)' },
          '100%': { transform: 'scale(1.05) rotate(1deg) translate(1%, 1%)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'teal-glow': '0 0 40px rgba(0, 201, 184, 0.15)',
        'teal-glow-lg': '0 0 80px rgba(0, 201, 184, 0.2)',
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
export default config
