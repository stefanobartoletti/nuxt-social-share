// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  uiPro: {
    license: 'oss',
    content: true,
  },

  modules: [
    '../src/module',
    '@nuxt/content',
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
    // environment variables provided by Netlify
    url: process.env.BRANCH === 'release' ? process.env.URL : process.env.DEPLOY_PRIME_URL || 'http://localhost:3000',
    name: 'Nuxt Social Share',
    indexable: process.env.BRANCH === 'release' || false, // set indexable only on production, not on branch deploys
    trailingSlash: true,
    defaultLocale: 'en',
  },

  app: {
    head: {
      meta: [
        process.env.GOOGLE_VERIFICATION ? { name: 'google-site-verification', content: process.env.GOOGLE_VERIFICATION } : null,
      ],
      script: [
        process.env.AHREFS_ANALYTICS_KEY ? { 'src': 'https://analytics.ahrefs.com/analytics.js', 'data-key': process.env.AHREFS_ANALYTICS_KEY } : null,
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

  plugins: [
    './plugins/posthog.client.js',
  ],

  runtimeConfig: {
    public: {
      posthogPublicKey: process.env.POSTHOG_API_KEY,
      posthogHost: process.env.POSTHOG_API_HOST,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-11',
})
