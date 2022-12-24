/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        '5.5' : '1.375rem',
        '18' : '4.625rem',
        '76' : '18.75rem',
      },
    },
  },
  plugins: [],
}