export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss',
  ],

  socialShare: {
    // styled: true,
    // label: false,
  },

  devtools: { enabled: true },

  app: {
    baseURL: '/nuxt-social-share/',
  },

  compatibilityDate: '2024-07-05',
})
