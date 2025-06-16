import type { Network } from './types'

const networkImporters = import.meta.glob('./networks/*.ts')

export const networksBase = Object.fromEntries(
  Object.keys(networkImporters).map((path) => {
    const name = path.split('/').pop()?.replace('.ts', '') as string
    return [name, name]
  }),
) as Record<string, string>

export const networksAlias: Record<string, string> = {
  twitter: 'x',
}

export async function getNetwork(name: string): Promise<Network> {
  const target = networksAlias[name] || name
  const importer = networkImporters[`./networks/${target}.ts`]
  if (!importer)
    throw new Error(`Unsupported network: '${name}'`)

  const mod: any = await importer()
  return mod[target] as Network
}
