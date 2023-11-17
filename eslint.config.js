import nuxt from '@stefanobartoletti/eslint-config/nuxt.js'

export default [
  ...nuxt,
  {
    rules: {
      'vue/multi-word-component-names': 'warn',
      'no-undef': 'error',
      'vue/no-multiple-template-root': 'error'
    },
    }

]
