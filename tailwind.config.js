const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bluegray: colors.blueGray,
        lightblue: colors.lightBlue
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
