import type { Network } from '../types'

export const twitter: Network = {
  name: 'twitter',
  shareUrl: 'https://twitter.com/intent/tweet?url=[u]',
  args: {
    title: '&text=[t]',
    user: '&via=[uid]',
    hashtags: '&hashtags=[h]',
  },
  iconName: 'ri:twitter-x-fill',
  color: '#000000',
}
