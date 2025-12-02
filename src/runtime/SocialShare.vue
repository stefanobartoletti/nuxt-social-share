<template>
  <a
    v-if="selectedNetwork"
    class="social-share-button"
    :class="[`social-share-button--${network}`, { 'social-share-button--styled': isStyled }]"
    :href="selectedNetwork.shareUrl"
    :style="`--color-brand:${selectedNetwork.color}`"
    :aria-label="`Share with ${selectedNetwork.name}`"
    :rel="rel"
    target="_blank"
  >
    <template v-if="hasIcon">
      <slot name="icon">
        <svg class="social-share-button__icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" :viewBox="`${selectedNetwork.icon.viewBox}`">
          <path fill="currentColor" fill-rule="evenodd" :d="`${selectedNetwork.icon.path}`" />
        </svg>
      </slot>
    </template>
    <span v-if="isLabeled" class="social-share-button__label">
      <slot name="label">Share</slot>
    </span>
  </a>
</template>

<script setup>
import { useRuntimeConfig } from '#imports'
import { useSocialShare } from './useSocialShare'

const props = defineProps({
  // Style props
  styled: { type: Boolean, default: undefined },
  label: { type: Boolean, default: undefined },
  icon: { type: Boolean, default: undefined },
  // Data props
  network: { type: String, required: true },
  url: { type: String, default: undefined },
  title: { type: String, default: undefined },
  user: { type: String, default: undefined },
  hashtags: { type: String, default: undefined },
  image: { type: String, default: undefined },
  // Link props
  rel: { type: String, default: 'nofollow noopener noreferrer' },
})

const moduleOptions = useRuntimeConfig().public.socialShare

const isStyled = props.styled !== undefined ? props.styled : moduleOptions.styled
const isLabeled = props.label !== undefined ? props.label : moduleOptions.label
const hasIcon = props.icon !== undefined ? props.icon : moduleOptions.icon

const selectedNetwork = useSocialShare({
  network: props.network,
  url: props.url,
  title: props.title,
  user: props.user,
  hashtags: props.hashtags,
  image: props.image,
})
</script>

<style>
@layer components {
  .social-share-button {
    display: flex;
    gap: 0.5em;
    align-items: center;
    text-decoration: none;
    width: min-content;
  }

  .social-share-button__icon {
    font-size: 1.5em;
  }

  .social-share-button--styled {
    --color-hover: color-mix(in srgb, var(--color-brand), #000 15%);
    font-size: 0.875rem;
    line-height: normal;
    padding: 0.5rem;
    color: white;
    border-radius: 0.25rem;
    transition: background-color 0.25s ease-out;
    background-color: var(--color-brand);

    &:hover {
      background-color: var(--color-hover);
    }

    &:focus-visible {
      outline: 2px solid var(--color-brand);
      outline-offset: 2px;
    }

    .social-share-button__label {
      padding: 0 0.5rem;
      white-space: nowrap;
    }
  }
}
</style>
