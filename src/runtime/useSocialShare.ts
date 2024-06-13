import type { Options } from './types/'

import { networksIndex } from './networksIndex'
import { computed, ref, useRequestURL, useRoute, watch } from '#imports'

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

  // Get network. Using a shallow copy to avoid mutating the original object
  const selectedNetwork = ref({ ...networksIndex[network] })
  const shareNetwork = ref()
  const route = useRoute()

  const generateShareUrl = () => {
    // Set default value for url if not provided from options
    const href = process.client ? window.location.href : useRequestURL().href

    const pageUrl = computed(() => url !== undefined ? url : href)

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
  }

  watch(route, () => {
    shareNetwork.value = { ...selectedNetwork.value, shareUrl: generateShareUrl() }
    delete shareNetwork.value.args
  }, { immediate: true })

  return shareNetwork
}
