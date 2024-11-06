import posthog from 'posthog-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost || 'https://eu.posthog.com',
    capture_pageview: false, // we add manual pageview capturing below
    capture_pageleave: true,
    persistence: 'memory',
    loaded: (posthog) => {
      if (import.meta.env.MODE === 'development') {
        posthog.debug(false)
      }
    },
  })

  // Make sure that pageviews are captured with each route change
  const router = useRouter()
  router.afterEach((to) => {
    nextTick(() => {
      posthog.capture('$pageview', {
        current_url: to.fullPath,
      })
    })
  })

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
