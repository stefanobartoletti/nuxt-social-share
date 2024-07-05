import type { Options } from './types/'

import { networksIndex } from './networksIndex'
import { ref, useRequestURL } from '#imports'

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

  // Set default value for url if not provided from options
  const pageUrl = url !== undefined ? url : useRequestURL().href

  // Build full share raw url
  const shareUrl = selectedNetwork.value.shareUrl
  const argTitle = (selectedNetwork.value.args?.title && title) ? selectedNetwork.value.args?.title : ''
  const argUser = (selectedNetwork.value.args?.user && user) ? selectedNetwork.value.args?.user : ''
  const argHashtags = (selectedNetwork.value.args?.hashtags && hashtags) ? selectedNetwork.value.args?.hashtags : ''
  const argImage = (selectedNetwork.value.args?.image && image) ? selectedNetwork.value.args?.image : ''

  let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

  // Replace placeholders with actual values
  fullUrl = fullUrl
    .replace(/\[u\]/i, pageUrl)
    .replace(/\[t\]/i, title || '')
    .replace(/\[uid\]/i, user || '')
    .replace(/\[h\]/i, hashtags || '')
    .replace(/\[i\]/i, image || '')

  // Rebuild selectedNetwork object
  selectedNetwork.value.shareUrl = fullUrl
  delete selectedNetwork.value.args

  return selectedNetwork
}
