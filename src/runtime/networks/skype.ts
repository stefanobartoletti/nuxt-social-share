import type { Network } from '../types'

export const skype: Network = {
  name: 'skype',
  shareUrl: 'https://web.skype.com/share?url=[u]',
  args: {
    title: '&text=[t]',
  },
  iconName: 'ri:skype-fill',
  color: '#00AFF0',
}
