<template>
  <a
    class="share-button styled"
    :href="shareUrl"
  >
    <Icon
      class="share-icon"
      icon="ri:facebook-fill"
    />
    <span class="share-label">Share</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRequestURL } from '#imports';

const pageUrl = useRequestURL().href

const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`

</script>

<style lang="scss" scoped>
.share-button {
  display: flex;
  gap: 0.5em;
  align-items: center;
  text-decoration: none;
  width: min-content;

  .share-icon {
    font-size: 1.5em;
  }

  &.styled {
    padding: 0.5rem;
    color: white;
    background-color: royalblue;
    border-radius: 0.25rem;

    .share-label {
      padding: 0 0.5rem;
    }
  }
}
</style>