import type { Options } from './types/'

import { networksIndex } from './networksIndex'
import { computed, ref, useRoute, useRuntimeConfig } from '#imports'

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

  // Get network. Using a shallow copy to avoid mutating the original object
  const selectedNetwork = ref({ ...networksIndex[network] })
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
    const shareUrl = selectedNetwork.value.shareUrl
    const argTitle = (selectedNetwork.value.args?.title && title) ? selectedNetwork.value.args?.title : ''
    const argUser = (selectedNetwork.value.args?.user && user) ? selectedNetwork.value.args?.user : ''
    const argHashtags = (selectedNetwork.value.args?.hashtags && hashtags) ? selectedNetwork.value.args?.hashtags : ''
    const argImage = (selectedNetwork.value.args?.image && image) ? selectedNetwork.value.args?.image : ''

    let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

    // Replace placeholders with actual values
    fullUrl = fullUrl
      .replace(/\[u\]/i, pageUrl.value)
      .replace(/\[t\]/i, title || '')
      .replace(/\[uid\]/i, user || '')
      .replace(/\[h\]/i, hashtags || '')
      .replace(/\[i\]/i, image || '')

    return fullUrl
  })

  // Update shareNetwork object

  selectedNetwork.value.shareUrl = fullShareUrl.value
  delete selectedNetwork.value.args

  return selectedNetwork
}
