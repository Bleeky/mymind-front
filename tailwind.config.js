module.exports = {
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
    },
    extend: {
      colors: {
        'green-main': '#9AE6B4',
        'green-secondary': '#CEFEE1',
        'transparent-white': 'rgba(255, 255, 255, 0.7)',
      },
    },
    gradients: (theme) => ({
      'login-gradient': ['180deg', theme('colors.green-secondary'), '#EDF2F7'],
    }),
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus', 'dark-hover', 'dark-focus-within'],
    textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active'],
    gradients: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active'],
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
    require('tailwindcss-dark-mode')(),
  ],
};
