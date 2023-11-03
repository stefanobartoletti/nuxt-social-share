<template>
  <a
    class="social-share-button"
    :class="[`social-share-button--${network}`, {'social-share-button--styled': optionStyled}]"
    :href="socialNetwork.shareUrl"
    target="_blank"
  >
    <Icon
      class="social-share-button__icon"
      :icon="socialNetwork.icon"
    />
    <span
      v-if="optionLabel" 
      class="social-share-button__label"
    >Share</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRequestURL, useRuntimeConfig } from '#imports';

const props = defineProps({
  network: { type: String, required: true },
  styled: { type: Boolean, default: null },
  label: { type: Boolean, default: null },
  url: { type: String, default: null },
})

const options = useRuntimeConfig().public.socialShare

const optionStyled = props.styled != null ? props.styled : options.styled
const optionLabel = props.label != null ? props.label : options.label
const pageUrl = props.url != null ? props.url : useRequestURL().href

const networksMap = {
  facebook : {
    shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    icon: 'ri:facebook-fill'
  },
  twitter : {
    shareUrl: `https://twitter.com/intent/tweet?url=${pageUrl}`,
    icon: 'ri:twitter-x-fill'
  },
  linkedin : {
    shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    icon: 'ri:linkedin-fill'
  },
  pinterest : {
    shareUrl: `https://pinterest.com/pin/create/button/?url=${pageUrl}`,
    icon: 'jam:pinterest'
  },
  pocket : {
    shareUrl: `https://getpocket.com/edit?url=${pageUrl}`,
    icon: 'fe:pocket'
  },
  whatsapp : {
    shareUrl: `https://api.whatsapp.com/send?text=${pageUrl}`,
    icon: 'ri:whatsapp-line'
  },
  telegram : {
    shareUrl: `https://t.me/share/url?url=${pageUrl}`,
    icon: 'mingcute:telegram-fill'
  },
  email : {
    shareUrl: `mailto:?body=${pageUrl}`,
    icon: 'ic:round-mail'
  },
}

const socialNetwork = networksMap[props.network]
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