const { colors } = require('@material-ui/core');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      redHatDisplay: ['Red Hat Display', 'sans-serif']
    },
    backgroundColor: (theme) => ({
      white: '#FFF',
      primary: '#0F273E',
      secondary: '#80B7C8',
      third: '#C4CBCA',
      fourth: '#FFFFFF',
      fifth: '#0A0F0D'
    }),
    textColor: {
      black: '#000',
      primary: '#0F273E',
      secondary: '#80B7C8',
      third: '#C4CBCA',
      fourth: '#FFFFFF',
      fifth: '#0A0F0D'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
};
