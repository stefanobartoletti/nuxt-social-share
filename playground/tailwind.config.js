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
  content: [
    'storyblok/**/*.{vue,js}',
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    logs: false,
  },
}
