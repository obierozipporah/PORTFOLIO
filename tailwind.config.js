/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-green': '#4EE1A0',
        'portfolio-black': '#151515',
        'portfolio-bg-grey': '#242424',
        'portfolio-grey': '#D9D9D9',
        'portfolio-error': '#FF6F5B',
      },
      keyframes: {
        shake: {
          '0%': {transform: 'translateX(0)'},
          '25%': {transform: 'translateX(5px)'},
          '50%': {transform: 'translateX(-5px)'},
          '75%': {transform: 'translateX(5px)'},
          '100%': {transform: 'translateX(0)'},
        },
      },
      animation: {
        'error-shake': 'shake 2s linear infinte',
      },
      width: {
        'big-screen': '69.375rem',
      },
    },
  },
  plugins: [],
};
