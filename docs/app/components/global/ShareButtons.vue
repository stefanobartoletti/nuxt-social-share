<template>
  <UCard>
    <div class="mx-auto flex max-w-2xl flex-col gap-8">
      <div v-for="group in networksByCategory" :key="group.category">
        <p class="mb-2 text-sm font-medium text-muted uppercase">
          {{ group.label }}
        </p>
        <div class="flex flex-wrap gap-2">
          <SocialShare
            v-for="network in group.networks"
            :key="network"
            :network="network"
            :styled="true"
          />
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { networksByCategory } = useNetworksIndex()
</script>

<style scoped>
/**
 * INFO: Override styles because somehow Tailwind and NuxtUI together are not respecting layer order
 * "base" is overriding "component" where button styles are placed
 */

:deep(.social-share-button--styled) {
  color: #fff;
  padding: 0.5rem;
}

:deep(.social-share-button__label) {
  padding: 0 0.5rem;
}
</style>
