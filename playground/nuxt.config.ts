import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],

  css: [
    './assets/css/tailwind.css',
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  devtools: { enabled: true },

  app: {
    baseURL: '/nuxt-social-share/',
  },

  compatibilityDate: '2024-07-05',
})
