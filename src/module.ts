import type { NetworkKey } from './runtime/networksIndex'
import { addComponent, addImports, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'
import { defu } from 'defu'
import { networksAliasTargets, networksBase } from './runtime/networksIndex'

// Module options TypeScript interface definition
export interface ModuleOptions {
  baseUrl?: string
  styled?: boolean
  label?: boolean
  icon?: boolean
  networks?: NetworkKey[]
}

const validBaseKeys = new Set(Object.keys(networksBase))
const validAliasKeys = new Set(Object.keys(networksAliasTargets))

const allKnownKeys = [...validBaseKeys, ...validAliasKeys].sort()

function generateNetworksIndexContent(
  requestedNetworks: NetworkKey[] | undefined,
  networksIndexPath: string,
  networksDirPath: string,
  networksTypesPath: string,
): string {
  const knownNetworkKeysExport = `export const knownNetworkKeys = ${JSON.stringify(allKnownKeys)}\n`

  if (!requestedNetworks || requestedNetworks.length === 0) {
    return `export { networksIndex } from '${networksIndexPath}'\n${knownNetworkKeysExport}`
  }

  // Resolve each requested key to its underlying base network key, deduping along the way.
  const baseKeysToImport = new Set<string>()
  const aliasEntries: Array<{ alias: string, base: string }> = []

  for (const requested of requestedNetworks) {
    if (validBaseKeys.has(requested)) {
      baseKeysToImport.add(requested)
      continue
    }
    if (validAliasKeys.has(requested)) {
      const base = networksAliasTargets[requested as keyof typeof networksAliasTargets]
      baseKeysToImport.add(base)
      aliasEntries.push({ alias: requested, base })
      continue
    }
    console.warn(`[nuxt-social-share] Unknown network "${requested}" in the "networks" module option, ignoring it.\n Available networks: ${allKnownKeys.join(', ')}`)
  }

  const sortedBaseKeys = [...baseKeysToImport].sort()

  const imports = sortedBaseKeys
    .map(key => `import { ${key} } from '${networksDirPath}/${key}'`)
    .join('\n')

  const objectEntries = [
    ...sortedBaseKeys,
    ...aliasEntries.map(({ alias, base }) => `${alias}: ${base}`),
  ]

  return `import type { NetworksIndex } from '${networksTypesPath}'

${imports}

export const networksIndex: NetworksIndex = {
  ${objectEntries.join(',\n  ')}
}

${knownNetworkKeysExport}`
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@stefanobartoletti/nuxt-social-share',
    configKey: 'socialShare',
  },
  // Default configuration options of the Nuxt module
  defaults: {
    baseUrl: '',
    styled: false,
    label: true,
    icon: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.runtimeConfig.public.socialShare = defu(nuxt.options.runtimeConfig.public.socialShare, {
      ...options,
    })

    // From the runtime directory
    addComponent({
      name: 'SocialShare', // name of the component to be used in vue templates
      filePath: resolver.resolve('./runtime/SocialShare.vue'),
    })

    addImports({
      name: 'useSocialShare',
      from: resolver.resolve('./runtime/useSocialShare'),
    })

    // Generate a filtered networks index when the `networks` option is set, so unused
    // networks are never imported at all (and are therefore tree-shaken by construction)
    // rather than relying on bundlers to eliminate a dynamic object-key lookup.
    const networksIndexPath = resolver.resolve('./runtime/networksIndex')
    const networksDirPath = resolver.resolve('./runtime/networks')
    const networksTypesPath = resolver.resolve('./runtime/types/index')

    const template = addTemplate({
      filename: 'social-share-networks-index.ts',
      write: true,
      getContents: () => generateNetworksIndexContent(options.networks, networksIndexPath, networksDirPath, networksTypesPath),
    })

    nuxt.options.alias['#nuxt-social-share/networks-index'] = template.dst
  },
})
