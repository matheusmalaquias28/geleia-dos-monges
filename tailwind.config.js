/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50:  '#fdf2f4',
          100: '#fbe8ec',
          200: '#f5c6d0',
          400: '#e07089',
          700: '#8c2240',
          800: '#721c37',
          900: '#5e1830',
          950: '#3f0a1c',
        },
        amber: {
          warm:  '#C8851A',
          light: '#E8A832',
          dark:  '#9B5E0A',
        },
        forest: {
          DEFAULT: '#2D5A1B',
          light:   '#4A8A2D',
          dark:    '#1A3A0E',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          dark:    '#EDE5D0',
          darker:  '#DDD2B8',
        },
        espresso: '#1A0C08',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      animation: {
        'marquee':         'marquee 30s linear infinite',
        /** Marquee do MeetTheMaker: linear + translate3d (keyframes maker-strip) para loop suave. */
        'maker-marquee':   'maker-strip 100s linear infinite',
        'float':           'float 6s ease-in-out infinite',
        'stats-scroll':    'stats-scroll 14s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        /** Metade da largura = cópia idêntica do strip; translate3d melhora composição na GPU. */
        'maker-strip': {
          from: { transform: 'translate3d(0, 0, 0)' },
          to:   { transform: 'translate3d(-50%, 0, 0)' },
        },
        'stats-scroll': {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      });
    },
  ],
}
