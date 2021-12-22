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
      hero: '#FFFFFF',
      background: 'var(--background-color)',
      primary: 'var(--primary-color)',
      secondary: '#80B7C8',
      third: '#C4CBCA',
      fourth: 'var(--fourth-color)',
      fifth: 'var(--fifth-color)',
      sixth: '#0F273E'
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      custom: '#80B7C8'
    }),
    textColor: theme => theme('colors'),
      textColor: {
        primary: 'var(--primary-text-color)',
        secondary: '#80B7C8',
        third: 'var(--third-text-color)',
        fourth: '#0A0F0D',
        fifth: '#C4CBCA',
        sixth: '#FFFFFF',
        seventh: 'var(--seventh-text-color)',
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
