<template>
  <a
    class="share-button"
    :class="[`network-${network}`, {'styled': styled}]"
    :href="socialNetwork.shareUrl"
    target="_blank"
  >
    <Icon
      class="share-icon"
      :icon="socialNetwork.icon"
    />
    <span
      v-if="label" 
      class="share-label"
    >Share</span>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { useRequestURL } from '#imports';

const props = defineProps({
  network: { type: String, required: true },
  styled: { type: Boolean, default: false },
  url: { type: String, default: null },
  label: { type: Boolean, default: true },
})

const pageUrl = props.url || useRequestURL().href

const networksMap = {
  facebook : {
    shareUrl: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    icon: 'ri:facebook-fill'
  },
  twitter : {
    shareUrl: `https://twitter.com/intent/tweet?url=${pageUrl}`,
    icon: 'ri:twitter-fill'
  },
  linkedin : {
    shareUrl: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    icon: 'ri:linkedin-fill'
  },
  pinterest : {
    shareUrl: `http://pinterest.com/pin/create/button/?url=${pageUrl}`,
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

<style lang="scss" scoped>
$networks:
  'facebook' #0866FF,
  'twitter' #1D9BF0,
  'linkedin' #0A66C2,
  'pinterest' #BD081C,
  'pocket' #EF3F56,
  'whatsapp' #25D366,
  'telegram' #26A5E4,
  'email' #7e7e7e;

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
    font-size: 0.875rem;
    padding: 0.5rem;
    color: white;
    border-radius: 0.25rem;
    transition: all 0.25s ease-out;

    @each $name, $color in $networks {
      &.network-#{$name} {
        background-color: $color;

        &:hover {
          background-color: darken($color, 20%);
        }
      }
    }
    .share-label {
      padding: 0 0.5rem;
    }
  }
}
</style>