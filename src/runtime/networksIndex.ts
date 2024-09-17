import type { NetworksIndex } from './types'

import { bluesky } from './networks/bluesky'
import { email } from './networks/email'
import { facebook } from './networks/facebook'
import { line } from './networks/line'
import { linkedin } from './networks/linkedin'
import { pinterest } from './networks/pinterest'
import { pocket } from './networks/pocket'
import { reddit } from './networks/reddit'
import { skype } from './networks/skype'
import { telegram } from './networks/telegram'
import { twitter } from './networks/twitter'
import { viber } from './networks/viber'
import { whatsapp } from './networks/whatsapp'

export const networksIndex: NetworksIndex = {
  // Social Networks
  facebook,
  twitter,
  linkedin,
  pinterest,
  reddit,
  bluesky,
  // Read it later
  pocket,
  // Instant Messaging
  whatsapp,
  telegram,
  skype,
  line,
  viber,
  // Other
  email,
}
