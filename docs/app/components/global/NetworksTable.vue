<template>
  <UTable
    sticky
    :data="data"
    :columns="columns"
    :ui="{ root: 'lg:overflow-visible', thead: 'top-(--ui-header-height)' }"
    class="flex-1"
  >
    <template #icon-header>
      <UDropdownMenu :items="categoryItems">
        <UButton
          icon="i-lucide-list-filter"
          size="xs"
          variant="ghost"
          :color="selectedCategory === 'all' ? 'neutral' : 'primary'"
          :aria-label="`Filter by category: ${selectedCategory}`"
        />
      </UDropdownMenu>
    </template>
  </UTable>
</template>

<script setup>
const { networksBase, networksAlias } = useNetworksIndex()

function renderCodeCell(value) {
  if (!value) {
    return null
  }

  return h('code', {
    class: 'px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block border border-muted text-highlighted bg-muted',
  }, value)
}

function renderIcon(iconData) {
  if (!iconData) {
    return null
  }

  return h('svg', {
    viewBox: iconData.viewBox,
    class: 'w-6 h-6',
  }, [
    h('path', {
      'd': iconData.path,
      'fill': 'currentColor',
      'fill-rule': 'evenodd',
    }),
  ])
}

const selectedCategory = ref('all')

const categories = [...new Set(Object.values(networksBase).map(network => network.category))]

const categoryItems = computed(() => ['all', ...categories].map(category => ({
  label: category.charAt(0).toUpperCase() + category.slice(1),
  icon: selectedCategory.value === category ? 'i-lucide-check' : undefined,
  onSelect: () => {
    selectedCategory.value = category
  },
})))

const columns = [
  {
    id: 'icon',
    header: '',
    cell: ({ row }) => {
      const networkKey = row.getValue('network')
      const network = networksBase[networkKey]
      return network ? renderIcon(network.icon) : null
    },
  },
  {
    accessorKey: 'network',
    header: 'Network / Alias',
    cell: ({ row }) => {
      const network = row.getValue('network')
      const alias = row.original.alias

      if (alias) {
        return h('div', { class: 'flex items-center' }, [
          renderCodeCell(network),
          h('span', { class: 'mx-2 text-gray-500' }, ' / '),
          renderCodeCell(alias),
        ])
      }

      return renderCodeCell(network)
    },
  },
  {
    accessorKey: 'url',
    header: () => renderCodeCell('url'),
  },
  {
    accessorKey: 'title',
    header: () => renderCodeCell('title'),
  },
  {
    accessorKey: 'user',
    header: () => renderCodeCell('user'),
  },
  {
    accessorKey: 'hashtags',
    header: () => renderCodeCell('hashtags'),
  },
  {
    accessorKey: 'image',
    header: () => renderCodeCell('image'),
  },
  {
    accessorKey: 'prompt',
    header: () => renderCodeCell('prompt'),
  },
]

const data = computed(() => {
  return Object.keys(networksBase).filter(key => selectedCategory.value === 'all' || networksBase[key]?.category === selectedCategory.value).map((key) => {
    const network = networksBase[key]

    if (!network) {
      return {
        network: key,
        alias: null,
        url: '❌',
        title: '❌',
        user: '❌',
        hashtags: '❌',
        image: '❌',
        prompt: '❌',
      }
    }

    const alias = Object.entries(networksAlias).find(([_aliasKey, networkObj]) => networksBase[key] === networkObj)?.[0] || null

    return {
      network: key,
      alias,
      url: network.shareUrl.includes('[u]') ? '✅' : '❌',
      title: network.args?.title ? '☑️' : '❌',
      user: network.args?.user ? '☑️' : '❌',
      hashtags: network.args?.hashtags ? '☑️' : '❌',
      image: network.args?.image ? '☑️' : '❌',
      prompt: network.shareUrl.includes('[p]') ? '✅' : '❌',
    }
  })
})
</script>
