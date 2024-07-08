import { stefanobartoletti, vue } from '@stefanobartoletti/eslint-config'
import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    standalone: false,
  },
})

  .prepend(
    stefanobartoletti(
      {},
      vue,
    ),
    {
      files: ['playground/{pages,layouts}/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',

      },
    },
  )
