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
import { threads } from './networks/threads'
import { viber } from './networks/viber'
import { whatsapp } from './networks/whatsapp'
import { x } from './networks/x'

export const networksBase: NetworksIndex = {
  // Social Networks
  facebook,
  x,
  linkedin,
  pinterest,
  reddit,
  bluesky,
  threads,
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

export const networksAlias: NetworksIndex = {
  twitter: x,
}

export const networksIndex: NetworksIndex = {
  ...networksBase,
  ...networksAlias,
}
