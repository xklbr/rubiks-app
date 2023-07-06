/* eslint-disable global-require */
/* eslint-disable unicorn/prefer-module */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
