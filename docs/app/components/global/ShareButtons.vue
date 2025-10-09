<template>
  <UCard class="py-6">
    <div class="flex gap-2 justify-center flex-wrap max-w-xl mx-auto">
      <SocialShare
        v-for="network in networks"
        :key="network"
        :network="network"
        :styled="true"
        class="text-white border-none p-10"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
const networks = useNetworkIndex()
</script>
