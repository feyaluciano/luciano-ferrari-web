/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}', // Esto le dice a Tailwind que busque clases en todos tus archivos HTML y TypeScript dentro de src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
