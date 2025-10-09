<template>
  <UCard class="bg-white flex justify-center">
    <div class="share-buttons">
      <SocialShare
        v-for="network in ['facebook', 'x', 'linkedin']"
        :key="network"
        :network="network"
      />
    </div>
  </UCard>
</template>

<style scoped>
.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.social-share-button {
  color: var(--color-brand);
  border: 2px solid var(--color-brand);
  padding: 0.5rem 0.75rem;
}

.social-share-button:hover {
  background-color: var(--color-brand);
  color: white;
}
</style>
