module.exports = {
  theme: {},
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-hover', 'dark-focus-within'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
  ],
};
