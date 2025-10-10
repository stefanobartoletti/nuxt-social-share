<template>
  <UTable :data="data" :columns="columns" class="flex-1" />
</template>

<script setup>
import { networksAlias, networksBase } from '../../../../src/runtime/networksIndex'

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
      d: iconData.path,
      fill: 'currentColor',
    }),
  ])
}

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
]

const data = computed(() => {
  return Object.keys(networksBase).map((key) => {
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
      }
    }

    // Check if this network has an alias
    const alias = Object.keys(networksAlias).find(aliasKey => networksAlias[aliasKey] === network) || null

    return {
      network: key,
      alias,
      url: network.shareUrl.includes('[u]') ? '✅' : '❌',
      title: network.args?.title ? '☑️' : '❌',
      user: network.args?.user ? '☑️' : '❌',
      hashtags: network.args?.hashtags ? '☑️' : '❌',
      image: network.args?.image ? '☑️' : '❌',
    }
  })
})
</script>
