import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import { stefanobartoletti, vue } from '@stefanobartoletti/eslint-config'

export default createConfigForNuxt({
  features: {
    standalone: false,
  },
  dirs: {
    src: [
      './docs/app',
      './playground',
    ],
  },
})
  .prepend(
    stefanobartoletti(
      {},
      vue,
      {
        rules: {
          'pnpm/yaml-enforce-settings': 'off', // temporarily disabled
        },
      },
    ),
  )
  .append({
    files: ['docs/**/*.md'],
    rules: {
      'markdown/no-missing-atx-heading-space': 'off', // creates problems with markdown components
    },
  })
