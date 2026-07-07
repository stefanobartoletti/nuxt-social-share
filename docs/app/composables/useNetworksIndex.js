import { networksAlias, networksBase } from '../../../src/runtime/networksIndex'

const categories = [
  { category: 'social', label: 'Social Networks' },
  { category: 'messaging', label: 'Messaging' },
  { category: 'bookmark', label: 'Bookmarks' },
  { category: 'ai', label: 'AI' },
  { category: 'other', label: 'Other' },
]

export const useNetworksIndex = () => {
  const networksByCategory = categories
    .map(({ category, label }) => ({
      category,
      label,
      networks: Object.keys(networksBase).filter(key => networksBase[key]?.category === category),
    }))
    .filter(group => group.networks.length > 0)

  return {
    networksBase,
    networksAlias,
    networksByCategory,
  }
}
