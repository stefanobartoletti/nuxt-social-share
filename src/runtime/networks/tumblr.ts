/**
 * Tumblr Network Definition
 * @see https://help.tumblr.com/knowledge-base/share-button-documentation
 */

import type { Network } from '../types'

export const tumblr: Network = {
  name: 'Tumblr',
  shareUrl: 'http://tumblr.com/widgets/share/tool?canonicalUrl=[u]',
  args: {
    title: '&title=[t]',
    image: '&content=[i]',
    hashtags: '&tags=[h]',
  },
  icon: {
    // iconify: ri:tumblr-fill
    viewBox: '0 0 24 24',
    path: 'M6.27 7.63A5.76 5.76 0 0 0 10.817 2h3.03v5.152h3.637v3.636h-3.637v5.454c0 .515.198 1.207.91 1.667q.711.46 3.03.455V22h-4.243a4.546 4.546 0 0 1-4.545-4.546v-6.666H6.27z',
  },
  color: '#001F38',
}
