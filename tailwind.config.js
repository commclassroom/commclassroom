module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      redHatDisplay: ['Red Hat Display', 'sans-serif']
    },
    boxShadow: {
      secondary:
        ' 0 4px 4px 0 rgba(128, 183, 200, 0.4),  0 6px 10px 0 rgba(128, 183, 200, 0.4)'
    },
    backgroundColor: (theme) => ({
      primary: '#0F273E',
      secondary: '#80B7C8',
      third: '#C4CBCA',
      fourth: '#FFFFFF',
      fifth: '#0A0F0D'
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      custom: '#80B7C8'
    }),
    textColor: {
      primary: '#0F273E',
      secondary: '#80B7C8',
      third: '#C4CBCA',
      fourth: '#FFFFFF',
      fifth: '#0A0F0D'
    },
    extend: {}
  },
  variants: {
    extend: {
      border: ['hover', 'focus'],
      cursor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active']
    }
  },
  plugins: []
};
