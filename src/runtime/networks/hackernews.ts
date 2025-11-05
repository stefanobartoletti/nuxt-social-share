/**
 * Hacker News Network Definition
 */

import type { Network } from '../types'

export const hackernews: Network = {
  name: 'Hacker News',
  shareUrl: 'https://news.ycombinator.com/submitlink?u=[u]',
  args: {
    title: '&t=[t]',
  },
  icon: {
    // iconify: lineicons:hacker-news
    viewBox: '0 0 24 24',
    path: 'M3 3v18h18V3zm9.61 10.103v4.036h-1.278v-4.123L8.14 6.832h1.48c2.12 3.92 1.975 4.094 2.381 5.023c.493-1.103.203-.987 2.468-5.023h1.393z',
  },
  color: '#F0652F',
}
