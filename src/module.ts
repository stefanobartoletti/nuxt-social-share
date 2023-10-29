import { defineNuxtModule, addComponent, addPlugin, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@stefanobartoletti/nuxt-social-share',
    configKey: 'socialShare'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    // 'styled' and 'label' defaults are defined in props
    // styled: false,
    // label: true,
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    const moduleOptions: ModuleOptions = defu(nuxt.options.runtimeConfig.public.socialShare, options)

    nuxt.options.runtimeConfig.public.socialShare = moduleOptions

    // From the runtime directory
    addComponent({
      name: 'SocialShare', // name of the component to be used in vue templates
      filePath: resolver.resolve('./runtime/components/SocialShare.vue')
    })

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
