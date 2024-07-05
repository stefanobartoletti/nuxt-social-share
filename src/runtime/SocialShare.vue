<template>
  <a
    class="social-share-button"
    :class="[`social-share-button--${network}`, { 'social-share-button--styled': isStyled }]"
    :href="selectedNetwork.shareUrl"
    :style="`--color-brand:${selectedNetwork.color}`"
    :aria-label="`Share with ${capitalizedNetwork}`"
    target="_blank"
  >
    <template v-if="hasIcon">
      <slot name="icon">
        <svg class="social-share-button__icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" :viewBox="`${selectedNetwork.icon.viewBox}`">
          <path fill="currentColor" :d="`${selectedNetwork.icon.path}`" />
        </svg>
      </slot>
    </template>
    <span v-if="isLabeled" class="social-share-button__label">
      <slot name="label">Share</slot>
    </span>
  </a>
</template>

<script setup>
import { useSocialShare } from './useSocialShare'
import { useRuntimeConfig } from '#imports'

const props = defineProps({
  network: { type: String, required: true },
  styled: { type: Boolean, default: undefined },
  label: { type: Boolean, default: undefined },
  icon: { type: Boolean, default: undefined },
  url: { type: String, default: undefined },
  title: { type: String, default: undefined },
  user: { type: String, default: undefined },
  hashtags: { type: String, default: undefined },
  image: { type: String, default: undefined },
})

const options = useRuntimeConfig().public.socialShare

const isStyled = props.styled !== undefined ? props.styled : options.styled
const isLabeled = props.label !== undefined ? props.label : options.label
const hasIcon = props.icon !== undefined ? props.icon : options.icon

const selectedNetwork = useSocialShare({
  network: props.network,
  url: props.url,
  title: props.title,
  user: props.user,
  hashtags: props.hashtags,
  image: props.image,
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
