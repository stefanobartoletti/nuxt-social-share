<template>
  <div class="size-full flex flex-row justify-between bg-[#0e1629] p-24 gap-0">
    <div class="w-[600px] h-full flex justify-center">
      <p v-if="headline" class="uppercase text-2xl text-[#00db81] mb-4 font-semibold">
        {{ headline }}
      </p>
      <h1 v-if="title" class="w-[600px] m-0 text-7xl font-semibold mb-4 text-white flex items-center">
        <span>{{ title }}</span>
      </h1>
      <p v-if="description" class="text-3xl text-white leading-tight">
        {{ description }}
      </p>
    </div>

    <img src="/favicon.png" class="self-center mr-20" />
  </div>
</template>

<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/Docs.vue
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'Nuxt Social Share',
})

const title = computed(() => (props.title || '').slice(0, 60))
const description = computed(() => (props.description || '').slice(0, 200))
</script>
