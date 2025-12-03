/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  safelist: [
    'h-24', 'h-32', 'h-40', 'h-48','h-64','h-80','h-96',

  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeIn: 'fadeIn .5s ease-in-out'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

