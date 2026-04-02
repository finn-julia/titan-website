/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8eef7',
          100: '#c5d3e8',
          200: '#9eb5d7',
          300: '#7797c6',
          400: '#5980ba',
          500: '#3b6aad',
          600: '#2c5490',
          700: '#1e3a6e',
          800: '#132650',
          900: '#0b1732',
          950: '#060e1f',
        },
        steel: {
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
