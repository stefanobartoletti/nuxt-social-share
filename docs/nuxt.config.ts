// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@nuxt/content',
    'nuxt-ai-ready',
    '@nuxt/scripts',
    '../src/module.ts',
  ],

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      posthogEnabled: !!process.env.POSTHOG_API_KEY,
    },
  },

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
    description: 'Simple social sharing for your Nuxt Sites',
    indexable: process.env.BRANCH === 'release' || false, // set indexable only on production, not on branch deploys
    trailingSlash: false,
    defaultLocale: 'en',
  },

  app: {
    head: {
      meta: [
        process.env.GOOGLE_VERIFICATION ? { name: 'google-site-verification', content: process.env.GOOGLE_VERIFICATION } : false,
      ],
    },
  },

  scripts: {
    registry: {
      // Only load PostHog in production (where API key is set)
      posthog: process.env.POSTHOG_API_KEY
        ? {
            apiKey: process.env.POSTHOG_API_KEY,
            region: 'eu',
            // This site is statically generated (no live Nitro server), so it can't serve
            // Nuxt Scripts' reverse-proxy routes (/_scripts/p/...) for collection requests.
            proxy: false,
            scriptOptions: {
              trigger: 'onNuxtReady',
            },
            config: {
              persistence: 'memory',
            },
          }
        : undefined,
    },
  },

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

  robots: {
    disallow: [''],
  },

  aiReady: {
    contentSignal: {
      aiTrain: false,
      search: true,
      aiInput: true,
    },
    indexNow: true,
  },

})
