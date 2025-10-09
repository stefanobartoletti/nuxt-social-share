<template>
  <UCard class="bg-white flex justify-center">
    <div class="share-buttons">
      <SocialShare
        v-for="network in ['facebook', 'x', 'linkedin']"
        :key="network"
        :network="network"
        :styled="true"
        :label="false"
      />
    </div>
  </UCard>
</template>

<style scoped>
.share-buttons {
  display: flex;
  flex-wrap: wrap;
}

.social-share-button {
  color: #fff;
  padding: 1rem;
  aspect-ratio: 1;
  border-radius: 0;
}
</style>
