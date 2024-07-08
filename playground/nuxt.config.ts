export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxtjs/tailwindcss',
  ],

  socialShare: {
    // styled: true,
    // label: false,
    // icon: false,
    baseUrl: 'https://stefanobartoletti.github.io/nuxt-social-share/',
  },

  devtools: { enabled: true },

  app: {
    baseURL: '/nuxt-social-share/',
  },

  compatibilityDate: '2024-07-05',
})
