import type { Options } from './types/'

import { networksIndex } from './networksIndex'
import { useRequestURL } from '#imports'

export function useSocialShare(options: Options = { network: '', url: undefined }) {
  const { network, url } = options

  const pageUrl = url !== undefined ? url : useRequestURL().href

  const socialNetwork = networksIndex[network]

  socialNetwork.shareUrl = socialNetwork.shareUrl.replace(/\[u\]/i, pageUrl)

  return socialNetwork
}
