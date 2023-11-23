import type { Network } from '../types'

export const whatsapp: Network = {
  name: 'whatsapp',
  shareUrl: 'https://api.whatsapp.com/send?text=[u]',
  args: {
    title: '%20[t]',
  },
  iconName: 'ri:whatsapp-line',
  color: '#25D366',
}
