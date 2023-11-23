import type { Network } from '../types'

export const email: Network = {
  name: 'email',
  shareUrl: 'mailto:?body=[u]',
  args: {
    title: '&subject=[t]',
  },
  iconName: 'ic:round-mail',
  color: '#7e7e7e',
}
