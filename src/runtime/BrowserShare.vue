<template>
  <a
    v-if="isSupported"
    class="social-share-button social-share-button--browser"
    :class="[{ 'social-share-button--styled': isStyled }]"
    style="--color-brand:#7e7e7e"
    aria-label="Share with your OS integrations"
    @click.prevent="browserShare"
  >
    <Icon
      class="social-share-button__icon"
      icon="ri:share-fill"
    />
    <span
      v-if="isLabeled"
      class="social-share-button__label"
    >Share</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useShare } from '@vueuse/core'
import { useRequestURL, useRuntimeConfig } from '#imports'

const props = defineProps({
  styled: { type: Boolean, default: undefined },
  label: { type: Boolean, default: undefined },
  title: { type: String, default: undefined },
})

const options = useRuntimeConfig().public.socialShare

const isStyled = props.styled !== undefined ? props.styled : options.styled
const isLabeled = props.label !== undefined ? props.label : options.label

const { share, isSupported } = useShare()

function browserShare() {
  share({
    title: props.title,
    url: useRequestURL().href,
  }).catch(err => err)
}
</script>

<style lang="scss">
@import 'style.scss';

:where(.social-share-button--browser) {
  cursor: pointer;
}
</style>
