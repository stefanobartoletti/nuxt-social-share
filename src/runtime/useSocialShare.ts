import type { Options } from './types/'

import { networksIndex } from './networksIndex'
import { useRequestURL } from '#imports'

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

  // Get network
  const selectedNework = networksIndex[network]

  // Set default value for url if not provided from options
  const pageUrl = url !== undefined ? url : useRequestURL().href

  // Build full share url
  const shareUrl = selectedNework.shareUrl
  const argTitle = (selectedNework.args?.title && title) ? selectedNework.args?.title : ''
  const argUser = (selectedNework.args?.user && user) ? selectedNework.args?.user : ''
  const argHashtags = (selectedNework.args?.hashtags && hashtags) ? selectedNework.args?.hashtags : ''
  const argImage = (selectedNework.args?.image && image) ? selectedNework.args?.image : ''

  let fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

  fullUrl = fullUrl
    .replace(/\[u\]/i, pageUrl)
    .replace(/\[t\]/i, title || '')
    .replace(/\[uid\]/i, user || '')
    .replace(/\[h\]/i, hashtags || '')
    .replace(/\[i\]/i, image || '')

  // Rebuild selectedNework object

  selectedNework.shareUrl = fullUrl
  delete selectedNework.args

  return selectedNework
}
