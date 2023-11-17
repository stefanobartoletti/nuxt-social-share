import { networksIndex } from './networksIndex'
import { useRequestURL } from '#imports'

export function useSocialShare(options = {}) {
  const { network, url } = options

  const pageUrl = url != null ? url : useRequestURL().href

  const socialNetwork = networksIndex[network]

  socialNetwork.shareUrl = socialNetwork.shareUrl.replace(/\[u\]/i, pageUrl)

  return socialNetwork
}
