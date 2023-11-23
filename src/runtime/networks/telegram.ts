import type { Network } from '../types'

export const telegram: Network = {
  name: 'telegram',
  shareUrl: 'https://t.me/share/url?url=[u]',
  args: {
    title: '&text=[t]',
  },
  iconName: 'mingcute:telegram-fill',
  color: '#26A5E4',
}
