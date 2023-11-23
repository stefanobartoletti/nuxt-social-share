import type { Network } from '../types'

export const reddit: Network = {
  name: 'reddit',
  shareUrl: 'https://www.reddit.com/submit?url=[u]',
  args: {
    title: '&title=[t]',
  },
  iconName: 'ri:reddit-line',
  color: '#FF4500',
}
