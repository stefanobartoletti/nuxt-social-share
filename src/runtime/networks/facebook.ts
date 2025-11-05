/**
 * Facebook Network Definition
 * @see https://developers.facebook.com/docs/sharing/reference/share-dialog
 */

import type { Network } from '../types'

export const facebook: Network = {
  name: 'Facebook',
  shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=[u]',
  icon: {
    // iconify: ri:facebook-fill
    viewBox: '0 0 24 24',
    path: 'M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z',
  },
  color: '#0866FF',
}
