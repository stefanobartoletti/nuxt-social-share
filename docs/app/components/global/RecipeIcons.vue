<template>
  <UCard class="bg-white flex justify-center">
    <div class="share-buttons">
      <SocialShare
        v-for="network in ['facebook', 'x', 'linkedin']"
        :key="network"
        :network="network"
        :label="false"
      />
    </div>
  </UCard>
</template>

<style scoped>
.share-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.social-share-button {
  color: #63738a;
  padding: 1rem;
}

.social-share-button:hover {
  color: var(--color-brand);
}
</style>
