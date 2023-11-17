<template>
  <a
    class="social-share-button"
    :class="[`social-share-button--${network}`, { 'social-share-button--styled': optionStyled }]"
    :href="socialNetwork.shareUrl"
    :style="`--color-brand:${socialNetwork.color}`"
    :aria-label="`Share with ${capitalizedNetwork}`"
    target="_blank"
  >
    <Icon
      class="social-share-button__icon"
      :icon="socialNetwork.iconName"
    />
    <span
      v-if="optionLabel"
      class="social-share-button__label"
    >Share</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useSocialShare } from './useSocialShare'
import { useRuntimeConfig } from '#imports'

const props = defineProps({
  network: { type: String, required: true },
  styled: { type: Boolean, default: null },
  label: { type: Boolean, default: null },
  url: { type: String, default: null },
})

const options = useRuntimeConfig().public.socialShare

const optionStyled = props.styled != null ? props.styled : options.styled
const optionLabel = props.label != null ? props.label : options.label

const socialNetwork = useSocialShare({
  network: props.network,
  url: props.url,
})

const capitalizedNetwork = props.network.charAt(0).toUpperCase() + props.network.slice(1)
</script>

<style lang="scss">
:where(.social-share-button) {
  display: flex;
  gap: 0.5em;
  align-items: center;
  text-decoration: none;
  width: min-content;
}

:where(.social-share-button__icon) {
  font-size: 1.5em;
}

:where(.social-share-button--styled) {
  --color-hover: color-mix(in srgb, var(--color-brand), #000 15%);
  font-size: 0.875rem;
  line-height: normal;
  padding: 0.5rem;
  color: white;
  border-radius: 0.25rem;
  transition: all 0.25s ease-out;
  background-color: var(--color-brand);

  &:hover {
    background-color: var(--color-hover);
  }

  :where(.social-share-button__label) {
    padding: 0 0.5rem;
  }
}
</style>
