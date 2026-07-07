<template>
  <UCard>
    <div class="flex flex-col gap-8 max-w-2xl mx-auto">
      <div v-for="group in networksByCategory" :key="group.category">
        <p class="text-sm font-medium text-muted uppercase mb-2">
          {{ group.label }}
        </p>
        <div class="flex gap-2 flex-wrap">
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
