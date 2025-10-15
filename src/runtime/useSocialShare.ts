import type { Options } from './types/'

import { computed, useRoute, useRuntimeConfig } from '#imports'
import { networksIndex } from './networksIndex'

const defaultOptions = {
  network: '',
  url: undefined,
  title: undefined,
  user: undefined,
  hashtags: undefined,
  image: undefined,
}

export function useSocialShare(options: Options = defaultOptions) {
  const { network, url, title, user, hashtags, image } = options
  const moduleOptions = useRuntimeConfig().public.socialShare

  // Gracefully fail if provided network is not valid
  if (!networksIndex[network]) {
    const availableNetworks = Object.keys(networksIndex).sort().join(', ')
    console.warn(`[nuxt-social-share] Network "${network}" is not valid.\n Available networks: ${availableNetworks}.\n See https://nuxt-social-share.stefanobartoletti.it/usage/supported-networks`)
    return null
  }

  // Get selected network
  const selectedNetwork = networksIndex[network]
  const route = useRoute()

  // Set default value for url if not provided from options

  const pageUrl = computed(() => {
    if (url !== undefined) {
      return new URL(url).href
    }

    if (moduleOptions.baseUrl !== '') {
      return new URL(route.fullPath, moduleOptions.baseUrl).href
    }

    return ''
  })

  const fullShareUrl = computed(() => {
    // Build full share raw url
    const shareUrl = selectedNetwork.shareUrl
    const argTitle = (selectedNetwork.args?.title && title) ? selectedNetwork.args?.title : ''
    const argUser = (selectedNetwork.args?.user && user) ? selectedNetwork.args?.user : ''
    const argHashtags = (selectedNetwork.args?.hashtags && hashtags) ? selectedNetwork.args?.hashtags : ''
    const argImage = (selectedNetwork.args?.image && image) ? selectedNetwork.args?.image : ''

    let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

    // Replace placeholders with actual values (encode all parameters for URL safety)
    fullUrl = fullUrl
      .replace(/\[u\]/i, encodeURIComponent(pageUrl.value))
      .replace(/\[t\]/i, encodeURIComponent(title || ''))
      .replace(/\[uid\]/i, encodeURIComponent(user || ''))
      .replace(/\[h\]/i, encodeURIComponent(hashtags || ''))
      .replace(/\[i\]/i, encodeURIComponent(image || ''))

    return new URL(fullUrl).href
  })

  // Return a fully reactive network object
  const reactiveNetwork = computed(() => {
    const networkDefinition = { ...selectedNetwork }
    delete networkDefinition.args

    return {
      ...networkDefinition,
      shareUrl: fullShareUrl.value,
    }
  })

  return reactiveNetwork
}
