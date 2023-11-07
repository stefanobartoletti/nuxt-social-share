<template>
  <a
    class="social-share-button"
    :class="[`social-share-button--${network}`, {'social-share-button--styled': optionStyled}]"
    :href="socialNetwork.shareUrl"
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
import { Icon } from '@iconify/vue';
import { useRuntimeConfig } from '#imports';
import { useSocialShare } from './useSocialShare';

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

</script>

<style lang="scss">
$networks:
  'facebook' #0866FF,
  'twitter' #000000,
  'linkedin' #0A66C2,
  'pinterest' #BD081C,
  'pocket' #EF3F56,
  'whatsapp' #25D366,
  'telegram' #26A5E4,
  'email' #7e7e7e;

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
  font-size: 0.875rem;
  line-height: normal;
  padding: 0.5rem;
  color: white;
  border-radius: 0.25rem;
  transition: all 0.25s ease-out;

  @each $name, $color in $networks {
    &:where(.social-share-button--#{$name}) {
      background-color: $color;

      &:hover {
        background-color: darken($color, 10%);
      }
    }
  }

  :where(.social-share-button__label) {
    padding: 0 0.5rem;
  }
}

</style>