import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

const buildDir = fileURLToPath(new URL('./fixtures/networks-filter/.nuxt-test', import.meta.url))

describe('networks option (bundle filtering)', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/networks-filter', import.meta.url)),
    build: true,
    server: false,
    buildDir,
  })

  it('bundles only the requested network, excluding the others', () => {
    const clientDir = join(buildDir, 'output/public/_nuxt')
    const clientChunks = readdirSync(clientDir)
      .filter(file => file.endsWith('.js'))
      .map(file => join(clientDir, file))
    expect(clientChunks.length).toBeGreaterThan(0)

    const clientCode = clientChunks.map(file => readFileSync(file, 'utf-8')).join('\n')

    // Facebook was requested via `socialShare.networks: ['facebook']` and is rendered in app.vue.
    expect(clientCode).toContain('facebook.com/sharer/sharer.php')

    // LinkedIn was NOT requested, so its network file should never have been imported at all.
    expect(clientCode).not.toContain('linkedin.com/sharing/share-offsite')
  })
})
