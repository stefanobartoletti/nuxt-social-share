import { defineNuxtModule, addComponent, createResolver } from '@nuxt/kit'
import { defu } from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
  styled?: boolean
  label?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@stefanobartoletti/nuxt-social-share',
    configKey: 'socialShare'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    styled: false,
    label: true,
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.socialShare = defu(nuxt.options.runtimeConfig.public.socialShare, {
      ...options
    })

    // From the runtime directory
    addComponent({
      name: 'SocialShare', // name of the component to be used in vue templates
      filePath: resolver.resolve('./runtime/SocialShare.vue')
    })

  }
})
