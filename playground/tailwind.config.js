/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        // lg: '1rem',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    logs: false,
  },
}
