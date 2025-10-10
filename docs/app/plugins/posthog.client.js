export default defineNuxtPlugin(() => {
  if (!window.posthog) {
    console.warn('PostHog not loaded')
    return
  }

  const runtimeConfig = useRuntimeConfig()

  const posthogClient = window.posthog.init(
    runtimeConfig.public.posthogPublicKey,
    {
      api_host: 'https://eu.posthog.com',
      defaults: '2025-05-24',
      persistence: 'memory',
      loaded: (posthog) => {
        if (import.meta.env.MODE === 'development') {
          console.warn('PostHog loaded')
          posthog.debug(false)
        }
      },
    },
  )

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
