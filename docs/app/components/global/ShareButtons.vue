<template>
  <UCard class="py-6">
    <div class="flex gap-2 justify-center flex-wrap max-w-xl mx-auto">
      <SocialShare
        v-for="network in networks"
        :key="network"
        :network="network"
        :styled="true"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
const networks = useNetworkIndex()
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
