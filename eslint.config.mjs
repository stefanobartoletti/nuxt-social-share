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
    ),
  )
