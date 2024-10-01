// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  uiPro: {
    license: 'oss',
  },

  modules: [
    '../src/module',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@nuxtjs/seo',
  ],

  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },
  },

  site: {
    // process.env.URL provided by Netlify
    url: process.env.URL || 'http://localhost:3000',
    name: 'Nuxt Social Share',
  },

  app: {
    head: {
      meta: [
        process.env.GOOGLE_VERIFICATION ? { name: 'google-site-verification', content: process.env.GOOGLE_VERIFICATION } : false,
      ],
    },
  },

  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
  },

  colorMode: {
    disableTransition: true,
  },

  socialShare: {
    baseUrl: process.env.URL || 'http://localhost:3000',
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true },
    '/api/search.json': { prerender: true },
  },

  devtools: {
    enabled: true,
  },

  typescript: {
    strict: false,
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-11',
})
