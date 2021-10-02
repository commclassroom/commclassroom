module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'redHatDisplay': ['Red Hat Display', 'sans-serif']
     },
    backgroundColor: theme => ({
       'primary': '#0F273E',
       'secondary': '#80B7C8',
       'third': '#C4CBCA',
       'fourth': '#FFFFFF',
       'fifth': '#0A0F0D',
     }),
     textColor: {
      'primary': '#0F273E',
       'secondary': '#80B7C8',
       'third': '#C4CBCA',
       'fourth': '#FFFFFF',
       'fifth': '#0A0F0D',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
