/**
 * SMS Network Definition
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#linking_to_a_phone_number
 */

import type { Network } from '../types'

export const sms: Network = {
  name: 'SMS',
  shareUrl: 'sms:?&body=[u]',
  args: {
    title: '%20[t]',
  },
  icon: {
    // iconify: ic:round-sms
    viewBox: '0 0 24 24',
    path: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 11H7V9h2zm4 0h-2V9h2zm4 0h-2V9h2z',
  },
  color: '#7e7e7e',
  category: 'messaging',
}
