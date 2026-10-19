/**
 * Flipboard Network Definition
 * @see https://about.flipboard.com/inspirational-content/flip-it/
 */

import type { Network } from '../types'

export const flipboard: Network = {
  name: 'Flipboard',
  shareUrl: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=[u]',
  args: {
    title: '&title=[t]',
  },
  icon: {
    // iconify: simple-icons:flipboard
    viewBox: '0 0 24 24',
    path: 'M0 0v24h24V0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4z',
  },
  color: '#E12828',
  category: 'social',
}
