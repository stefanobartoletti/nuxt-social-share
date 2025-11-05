import type { NetworksIndex } from './types'

import { bluesky } from './networks/bluesky'
import { email } from './networks/email'
import { facebook } from './networks/facebook'
import { hackernews } from './networks/hackernews'
import { instapaper } from './networks/instapaper'
import { line } from './networks/line'
import { linkedin } from './networks/linkedin'
import { mastodon } from './networks/mastodon'
import { pinterest } from './networks/pinterest'
import { pocket } from './networks/pocket'
import { raindrop } from './networks/raindrop'
import { reddit } from './networks/reddit'
import { skype } from './networks/skype'
import { telegram } from './networks/telegram'
import { threads } from './networks/threads'
import { tumblr } from './networks/tumblr'
import { viber } from './networks/viber'
import { vkontakte } from './networks/vkontakte'
import { whatsapp } from './networks/whatsapp'
import { x } from './networks/x'
import { xing } from './networks/xing'

export const networksBase: NetworksIndex = {
  // Social Networks
  facebook,
  x,
  linkedin,
  pinterest,
  reddit,
  bluesky,
  threads,
  mastodon,
  vkontakte,
  xing,
  tumblr,
  hackernews,
  // Read it later
  pocket,
  instapaper,
  raindrop,
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
  vk: vkontakte,
}

export const networksIndex: NetworksIndex = {
  ...networksBase,
  ...networksAlias,
}
