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
  const selectedNework = ref({ ...networksIndex[network] })

  // Set default value for url if not provided from options
  const pageUrl = url !== undefined ? new URL(url).href : useRequestURL().href

  // Build full share raw url
  const shareUrl = selectedNework.value.shareUrl
  const argTitle = (selectedNework.value.args?.title && title) ? selectedNework.value.args?.title : ''
  const argUser = (selectedNework.value.args?.user && user) ? selectedNework.value.args?.user : ''
  const argHashtags = (selectedNework.value.args?.hashtags && hashtags) ? selectedNework.value.args?.hashtags : ''
  const argImage = (selectedNework.value.args?.image && image) ? selectedNework.value.args?.image : ''

  let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

  // Replace placeholders with actual values
  fullUrl = fullUrl
    .replace(/\[u\]/i, pageUrl)
    .replace(/\[t\]/i, title || '')
    .replace(/\[uid\]/i, user || '')
    .replace(/\[h\]/i, hashtags || '')
    .replace(/\[i\]/i, image || '')

  // Rebuild selectedNework object
  selectedNework.value.shareUrl = fullUrl
  delete selectedNework.value.args

  return selectedNework
}
