import { fileURLToPath } from 'node:url'
import { $fetch, getServerLogs, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

describe('networks option (excluded network warning)', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/networks-filter', import.meta.url)),
  })

  it('warns that the network was excluded by config, not that it is unsupported', async () => {
    const html = await $fetch('/')
    const logs = await getServerLogs()

    // LinkedIn is a real, supported network, but this fixture's `networks: ['facebook']`
    // excludes it — the warning must say so, distinct from the "not valid" message used
    // for genuinely unsupported network names.
    expect(html).not.toContain('social-share-button--linkedin')
    expect(logs.some(line => line.includes('Network "linkedin" was excluded from this build by the "networks" module option'))).toBe(true)
    expect(logs.some(line => line.includes('is not valid'))).toBe(false)
  })
})
