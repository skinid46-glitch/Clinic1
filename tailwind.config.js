/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#eef3fb',
          100: '#d6e2f4',
          200: '#adc4e8',
          300: '#7fa0db',
          400: '#4f7bc9',
          500: '#2f5db3',
          600: '#1f4a96',
          700: '#14306B',
          800: '#0f2754',
          900: '#0a1b3d',
        },
        gold: {
          50: '#fbf8ef',
          100: '#f5edcf',
          200: '#ecd79a',
          300: '#e0bd62',
          400: '#d2a845',
          500: '#C5A963',
          600: '#a98a3a',
          700: '#85682d',
          800: '#5f4a24',
          900: '#3e3018',
        },
        charcoal: {
          50: '#f5f6f7',
          100: '#e7e9ec',
          200: '#c4c9d1',
          300: '#9aa2af',
          400: '#6b7280',
          500: '#4a515c',
          600: '#363c45',
          700: '#2A2E35',
          800: '#1d2127',
          900: '#121519',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 60px -15px rgba(20, 48, 107, 0.25)',
        'gold-glow': '0 0 30px -5px rgba(197, 169, 99, 0.45)',
        'deep': '0 30px 80px -20px rgba(10, 27, 61, 0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-cta': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 45s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'float-cta': 'float-cta 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
