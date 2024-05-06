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

  const updateUrl = (_url: string): void => {
    // Set default value for url if not provided from options
    const pageUrl = _url !== undefined ? _url : useRequestURL().href

    // Build full share raw url
    const shareUrl = networksIndex[network].shareUrl
    const argTitle = (networksIndex[network].args?.title && title) ? networksIndex[network].args?.title : ''
    const argUser = (networksIndex[network].args?.user && user) ? networksIndex[network].args?.user : ''
    const argHashtags = (networksIndex[network].args?.hashtags && hashtags) ? networksIndex[network].args?.hashtags : ''
    const argImage = (networksIndex[network].args?.image && image) ? networksIndex[network].args?.image : ''

    const fullUrl = shareUrl + argTitle + argUser + argHashtags + argImage

    // Replace placeholders with actual values
    selectedNework.value.shareUrl = fullUrl
      .replace(/\[u\]/i, pageUrl)
      .replace(/\[t\]/i, title || '')
      .replace(/\[uid\]/i, user || '')
      .replace(/\[h\]/i, hashtags || '')
      .replace(/\[i\]/i, image || '')
  }

  // Rebuild selectedNework object
  updateUrl(url)
  selectedNework.value.updateUrl = updateUrl
  delete selectedNework.value.args

  return selectedNework
}
