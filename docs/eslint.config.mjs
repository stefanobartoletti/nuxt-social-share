import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'

export default createConfigForNuxt({
  features: {
    standalone: false,
  },
})
  .prepend(
    stefanobartoletti(
      {},
      vue,
      tailwind({
        cssConfigPath: './app/assets/css/main.css',
      }),
    ),
  )
  .append({
    files: ['**/*.md'],
    rules: {
      'markdown/no-missing-atx-heading-space': 'off', // creates problems with markdown components
    },
  })
