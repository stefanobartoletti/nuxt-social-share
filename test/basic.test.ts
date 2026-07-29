import { fileURLToPath } from 'node:url'
import { $fetch, getServerLogs, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders a working SocialShare button', async () => {
    const html = await $fetch('/')

    expect(html).toContain('class="social-share-button social-share-button--facebook"')
    expect(html).toContain('href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.example.com%2F"')
    expect(html).toContain('aria-label="Share on Facebook"')
  })

  it('builds the share url from network-specific args (title, user, hashtags)', async () => {
    const html = await $fetch('/')

    expect(html).toContain('class="social-share-button social-share-button--x"')
    expect(html).toContain('href="https://x.com/intent/post?url=https%3A%2F%2Fwww.example.com%2F&amp;text=My%20Title&amp;via=myuser&amp;hashtags=foo%2Cbar"')
  })

  it('resolves a network alias to its target network data', async () => {
    const html = await $fetch('/')

    // "twitter" is an alias for "x": the class keeps the alias name, but the
    // share url and label are built from X's actual network data.
    expect(html).toContain('class="social-share-button social-share-button--twitter"')
    expect(html).toContain('aria-label="Share on X"')
  })

  it('warns and renders nothing for a genuinely unsupported network', async () => {
    const html = await $fetch('/')
    const logs = await getServerLogs()

    expect(html).not.toContain('social-share-button--not-a-real-network')
    expect(logs.some(line => line.includes('Network "not-a-real-network" is not valid'))).toBe(true)
  })
})
