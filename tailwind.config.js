const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      'monochrome': {
        50: '#FFFFFF',
        100: '#FCFCFC',
        200: '#F7F7FC',
        300: '#EFF0F6',
        400: '#D9DBE9',
        500: '#A0A3BD',
        600: '#6E7191',
        700: '#4E4B66',
        800: '#262338',
        900: '#14142B',
      },
      'primary': {
        50: '#FFEDE6',
        100: '#EFBAA7',
        200: '#F79977',
        300: '#F36633',
        400: '#D23E01',
      },
      'secondary': {
        50: '#F7FDFF',
        100: '#A6DEF3',
        200: '#58B6D9',
        300: '#007099',
        400: '#004A66',
      },
      'success': {
        50: '#F2FFF9',
        100: '#E5FFF2',
        200: '#4CFFA6',
        300: '#00CC67',
        400: '#038444',
      },
      'warning': {
        50: '#FFFCF6',
        100: '#FFEFCD',
        200: '#FFD172',
        300: '#FDB928',
        400: '#C58D16',
      },
      'error': {
        50: '#FFF2F9',
        100: '#FFE5F2',
        200: '#FF5DA1',
        300: '#E40173',
        400: '#98014C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
