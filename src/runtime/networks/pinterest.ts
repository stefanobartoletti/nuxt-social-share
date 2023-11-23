import type { Network } from '../types'

export const pinterest: Network = {
  name: 'pinterest',
  shareUrl: 'https://pinterest.com/pin/create/button/?url=[u]',
  args: {
    title: '&description=[t]',
    image: '&media=[i]',
  },
  iconName: 'jam:pinterest',
  color: '#BD081C',
}
