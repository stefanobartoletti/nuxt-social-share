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
    '../node_modules/@nuxt/ui-pro/modules/pro/runtime/components/global/**/*.vue',
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    logs: false,
  },
}
