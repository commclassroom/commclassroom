module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'redHatDisplay': ['Red Hat Display', 'sans-serif']
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
