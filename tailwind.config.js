/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#050b14',
          900: '#0a1220',
          800: '#0f1b2e',
          700: '#152540',
          600: '#1b2f4d',
        },
        signal: {
          300: '#7fe8e0',
          400: '#3fd6c9',
          500: '#14b8a6',
          600: '#0d9488',
        },
        volt: {
          400: '#5eb4ff',
          500: '#2f8fff',
          600: '#1f6fe0',
        },
        amber: {
          400: '#f5b942',
          500: '#eea022',
        },
      },
      boxShadow: {
        signal: '0 0 0 1px rgba(63,214,201,0.25), 0 12px 40px -12px rgba(63,214,201,0.35)',
        volt: '0 0 0 1px rgba(47,143,255,0.25), 0 12px 40px -12px rgba(47,143,255,0.45)',
        soft: '0 8px 30px -10px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        dash: {
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        scanline: 'scanline 3s linear infinite',
        dash: 'dash 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
