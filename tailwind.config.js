module.exports = {
  purge: [`_site/**/*.html`],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Monoton'],
        'body': ['Avenir Next']
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
