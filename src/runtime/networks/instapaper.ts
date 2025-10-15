/**
 * Instapaper Network Definition
 * @see https://www.instapaper.com/save
 */

import type { Network } from '../types'

export const instapaper: Network = {
  name: 'Instapaper',
  shareUrl: 'https://www.instapaper.com/text?u=[u]',
  icon: {
    // iconify: streamline-logos:instapaper-logo-block
    viewBox: '0 0 24 24',
    path: 'M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm3.364 3.5A.364.364 0 0 0 8 4.864v.727c0 .2.163.364.364.364c.5 0 .92.083 1.21.165c.148.042.244.18.244.334v11.092a.34.34 0 0 1-.243.334c-.292.082-.71.166-1.211.166a.363.363 0 0 0-.364.363v.727c0 .201.163.364.364.364h7.272a.364.364 0 0 0 .364-.364v-.727c0-.2-.163-.363-.364-.363c-.5 0-.92-.084-1.21-.166a.34.34 0 0 1-.244-.334V6.454c0-.153.096-.292.243-.334c.291-.082.71-.165 1.211-.165A.364.364 0 0 0 16 5.591v-.727a.364.364 0 0 0-.364-.364z',
  },
  color: '#1F1F1F',
}
