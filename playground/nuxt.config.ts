export default defineNuxtConfig({
  modules: [
    '../src/module',
  ],

  socialShare: {
    baseUrl: 'https://www.example.com',

  },

  devtools: { enabled: true },

  typescript: {
    tsConfig: {
      // Paths here are resolved relative to the generated .nuxt/tsconfig.json, not this file.
      exclude: ['../../docs'],
    },
  },

})
