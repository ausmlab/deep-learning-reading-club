module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Monoton'],
        'body': ['Lato']
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
