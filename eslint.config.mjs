import { stefanobartoletti, vue } from '@stefanobartoletti/eslint-config'

// docs/ and playground/ are separate pnpm workspaces with their own eslint.config.mjs,
// linted via their own `pnpm --filter` scripts (see root package.json "lint" script).
export default stefanobartoletti(
  {
    vue: { a11y: true },
    typescript: true,
    ignores: [
      '**/docs/**',
      '**/playground/**',
    ],
  },
  vue,
  {
    rules: {
      'pnpm/yaml-enforce-settings': 'off', // temporarily disabled
    },
  },
)
