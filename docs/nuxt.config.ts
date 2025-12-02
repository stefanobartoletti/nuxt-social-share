// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-llms',
    ...(process.env.POSTHOG_API_KEY ? ['@posthog/nuxt'] : []), // Only load Posthog in production (where API key is set)
    '../src/module.ts',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  site: {
    // environment variables provided by Netlify
    url: process.env.BRANCH === 'release' ? process.env.URL : process.env.DEPLOY_PRIME_URL || 'http://localhost:3000',
    name: 'Nuxt Social Share',
    indexable: process.env.BRANCH === 'release' || false, // set indexable only on production, not on branch deploys
    trailingSlash: false,
    defaultLocale: 'en',
  },

  app: {
    head: {
      meta: [
        process.env.GOOGLE_VERIFICATION ? { name: 'google-site-verification', content: process.env.GOOGLE_VERIFICATION } : false,
      ],
      script: [
        process.env.AHREFS_ANALYTICS_KEY ? { 'src': 'https://analytics.ahrefs.com/analytics.js', 'data-key': process.env.AHREFS_ANALYTICS_KEY } : false,
      ],
    },
  },

  // Only load Posthog in production (where API key is set)
  posthogConfig: process.env.POSTHOG_API_KEY
    ? {
        publicKey: process.env.POSTHOG_API_KEY,
        host: 'https://eu.i.posthog.com',
        clientConfig: {
          persistence: 'memory',
        },
      }
    : undefined,

  socialShare: {
    baseUrl: process.env.URL || 'http://localhost:3000',
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  icon: {
    provider: 'iconify',
  },

  llms: {
    domain: process.env.URL || 'http://localhost:3000',
    title: 'Nuxt Social Share',
    description: 'Simple social sharing for your Nuxt Sites',
    full: {
      title: 'Nuxt Social Share - Full Documentation',
      description: 'This is the full documentation for the Nuxt Social Share module',
    },
  },

})
