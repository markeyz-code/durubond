/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1B2A4A',
          'navy-dark': '#14213D',
          gold: '#C9A227',
          'gold-dark': '#B8860B',
          bg: '#FAF7F0',
          text: '#2E2E2E',
        },
        primary: {
          DEFAULT: '#1B2A4A',
          700: '#14213D',
        }
      },
    },
  },
  plugins: [],
}
