---
seo:
  title: Nuxt Social Share
  description: Simple social sharing for your Nuxt Sites
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

:stars-bg

#title
Simple social sharing for your [Nuxt Sites]{.text-primary}

#description
Add simple social sharing buttons to your Nuxt sites and apps, with a minimal config [\<SocialShare\>]{.text-primary} component.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  icon: i-lucide-rocket
  ---
  Getting started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/stefanobartoletti/nuxt-social-share
  target: _blank
  ---
  Star on GitHub
  :::

#default

  ::u-container

  :::prose-pre
  ---
  filename: app.vue
  ---

  ```vue-html[app.vue]
  <SocialShare
    v-for="network in ['facebook', 'x', 'linkedin', '...']"
    :key="network"
    :network="network"
    :styled="true"
  />
  ```
  :::

  :::share-buttons
  :::

  ::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Powerful, customizable and easy to use

#features

  :::u-page-card
  ---
  icon: i-lucide-flame
  title: Simple yet powerful
  description: Flexible implementation and fully customizable, with a minimal config
  ---
  :::

  :::u-page-card
  ---
  icon: i-lucide-palette
  title: Designer Friendly
  description: Created with custom styling in mind, for easy intergation in any UI
  ---
  :::

  :::u-page-card
  ---
  icon: i-lucide-users
  title: Many Networks supported
  description: Supports sharing on all major social networks
  ---
  :::

  :::u-page-card
  ---
  icon: i-lucide-languages
  title: Easily Translatable
  description: Localize in any language by editing just two strings
  ---
  :::

  :::u-page-card
  ---
  icon: i-lucide-accessibility
  title: Accessible by design
  description: A11y guidelines implemented Out of the Box
  ---
  :::

  :::u-page-card
  ---
  icon: i-lucide-feather
  title: Lightweight and SEO friendly
  description: Minimal bundle size, no negative impact on SEO
  ---
  :::

::
