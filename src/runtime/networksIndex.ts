import type { NetworksIndex } from './types'

import { bluesky } from './networks/bluesky'
import { chatgpt } from './networks/chatgpt'
import { claude } from './networks/claude'
import { email } from './networks/email'
import { facebook } from './networks/facebook'
import { gemini } from './networks/gemini'
import { grok } from './networks/grok'
import { hackernews } from './networks/hackernews'
import { instapaper } from './networks/instapaper'
import { line } from './networks/line'
import { linkedin } from './networks/linkedin'
import { mastodon } from './networks/mastodon'
import { perplexity } from './networks/perplexity'
import { pinterest } from './networks/pinterest'
import { raindrop } from './networks/raindrop'
import { reddit } from './networks/reddit'
import { telegram } from './networks/telegram'
import { threads } from './networks/threads'
import { tumblr } from './networks/tumblr'
import { viber } from './networks/viber'
import { vkontakte } from './networks/vkontakte'
import { whatsapp } from './networks/whatsapp'
import { x } from './networks/x'
import { xing } from './networks/xing'

export const networksBase = {
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
  // Messaging
  whatsapp,
  telegram,
  line,
  viber,
  email,
  // Read it later
  instapaper,
  raindrop,
  // AI
  chatgpt,
  claude,
  gemini,
  perplexity,
  grok,
} satisfies NetworksIndex

export const networksAliasTargets = {
  twitter: 'x',
  vk: 'vkontakte',
} satisfies Record<string, keyof typeof networksBase>

export const networksAlias = {
  twitter: networksBase[networksAliasTargets.twitter],
  vk: networksBase[networksAliasTargets.vk],
} satisfies NetworksIndex

export const networksIndex: NetworksIndex = {
  ...networksBase,
  ...networksAlias,
}

export type NetworkKey = keyof typeof networksBase | keyof typeof networksAliasTargets
