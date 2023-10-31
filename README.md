<div align="center">

<img src=".github/nuxt-social-share.svg" width="128" />

# Nuxt Social Share

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code quality][code-quality-src]][code-quality-href]
[![bundle size][bundle-size-src]][bundle-size-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Simple Social Sharing for Nuxt

[Release Notes](/CHANGELOG.md)
<!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@stefanobartoletti/nuxt-social-share?file=playground%2Fapp.vue) -->
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

</div>

## 🌟 Features

- Simple use with the `SocialShare` component
- Unstyled by default for easy integration in any design
- Optional styled version, that can still be further customized
- Many major social networks supported

## 🛠️ Quick Setup

1. Add `@stefanobartoletti/nuxt-social-share` dependency to your project

```bash
# pnpm
pnpm add -D @stefanobartoletti/nuxt-social-share
# yarn
yarn add --dev @stefanobartoletti/nuxt-social-share
# npm
npm install --save-dev @stefanobartoletti/nuxt-social-share
```

2. Add `@stefanobartoletti/nuxt-social-share` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@stefanobartoletti/nuxt-social-share'
  ],
  // optional configuration
  socialShare: {
    // module options
  }
})
```

That's it! You can now use Nuxt Social Share in your Nuxt app ✨

## 🔩 Use

The `SocialShare` component provides a share button for a single social network that you must select with the `network` prop; you will need to use it as many times as your total needed networks.

```vue
<!-- Basic use -->
<SocialShare network="facebook" />
<SocialShare network="twitter" />
<SocialShare network="linkdin" />

<!-- Customization -->
<SocialShare network="facebook" :styled="true" :label="false" />
```

The component will render the following minimal HTML: 

```html
<a class="share-button network-{network}">
  <svg class="share-icon"></svg>
  <span class="share-label">Share</span>
</a>
```

> [Note]
> - As the component comes unstyled by default (only providing some minimal flex properties to correctly align icon and label), you can use these classes to apply every style you require to integrate it into your design. Or, if you use Tailwind or some similar framework, you can directly pass down required classes.
> - Custom styles or additional classes can also be used when using the `styled` version.
> - The only required prop is `network`, other like `styled` or `label` are best set from the module options (see 'Configuration' below)
> - The component only provides a single share button. As you will typically need to use more of them at once, you should place them inside a wrapper to distribute them according to your design.
> - In order to avoid duplicate code when using many instances of the component, espcially if you need to set many props or classes, a wise approach is to iterate it with `v-for`.

A possible example of common use when using i.e. Tailwind could be as follows:

```vue
<div class="flex flex-row gap-2">
  <SocialShare
    v-for="network in ['facebook', 'twitter', 'linkedin', 'email']"
    :key="network"
    :network="network"
    :styled="true"
    :label="false"
    class="p-4 rounded-none"
  />
</div>
```

## 🎛️ Configuration

It is possible to customize how this module works and to set some defaults from the `socialShare` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  // optional configuration 
  socialShare: {
    // Available properties
    styled: false // boolean, defaults to false
    label: true // boolean, defaults to true
  }
})
```
Both of these properties can be also set on a component level via props, but is us usually better to set them in the module configuration to create your needed defaults.ee

## 🎨 Props

### `network`

- Required: **Yes**
- Default: **none**

The social network or messaging service where the content should be shared. This is the only required prop.

A list of the supported networks is available below

### `styled`

- Required: **No**
- Default: **`false`**

Whether the component should be styled or not. It is `false` by default to allow for easier custom styling. Additional customization is possible also when set to `true`.

This property should be typically set globally from the module options, it is available as a prop to allow a different behavior on a single instance of the component.

### `label`

- Required: **No**
- Default: **`true`**

Whether the "Share" label should be rendered or not. It is `true` by default, when set to `false` only the icon will be displayed.

This property should be usually set globally from the module options, it is available as a prop to allow a different behavior on a single instance of the component.

### `url`

- Required: **No**
- Default: **The current page URL**

The actual URL that will be shared on the selected social network.

Defaults to the current page URL. Usually you don't need another value as a share button on most cases is used to share the page where it is located. But if you need to provide a custom URL, you can do it by this prop.

Whether the "Share" label should be rendered or not. It is `true` by default, when set to `false` only the icon will be displayed.

## ↗️ Supported networks

A list of the currently supported networks and of their URL arguments.

> [Note]
> Currently I have only included networks that I use and that I have personally tested to be working. More are planned to be added, contributions are welcome.

> [Important]
> At the moment only the `url` argument is implemented. More, like `title`, `text` and other, are planned for future release. 
> Anyway, please note that only `url` is strictly required for the sharing to work: other metadata will be automatically retrived from Open Graph meta tags, that you always should properly set in your webpages.

| Social Network | `url` | Notes |
| --- | --- | --- |
| `facebook` | ✔️ |  |
| `twitter` | ✔️ |  |
| `linkedin` | ✔️ |  |
| `pinterest` | ✔️ |  |
| `pocket` | ✔️ |  |
| `whatsapp` | ✔️ |  |
| `telegram` | ✔️ |  |
| `email` | ✔️ |  |



## ✅ Todo

- [ ] Add support for more major social networks
- [ ] Add support for more URL args: `title`, `text`, etc.

## 🧑‍💻 Development

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

## 📝 License

[MIT](https://github.com/stefanobartoletti/bricks/blob/master/LICENSE.txt)

© 2023-present [Stefano Bartoletti](https://www.stefanobartoletti.it)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@stefanobartoletti/nuxt-social-share/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/@stefanobartoletti/nuxt-social-share

[npm-downloads-src]: https://img.shields.io/npm/dm/@stefanobartoletti/nuxt-social-share.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/@stefanobartoletti/nuxt-social-share

[code-quality-src]: https://img.shields.io/codacy/grade/5dc7110e5216467b859b6319faf15d1e.svg?style=flat&colorA=18181B&colorB=28CF8D
[code-quality-href]: https://app.codacy.com/gh/stefanobartoletti/nuxt-social-share

[bundle-size-src]: https://img.shields.io/bundlephobia/minzip/@stefanobartoletti/nuxt-social-share.svg?style=flat&colorA=18181B&colorB=28CF8D
[bundle-size-href]: https://bundlephobia.com/result?p=@stefanobartoletti/nuxt-social-share

[license-src]: https://img.shields.io/npm/l/@stefanobartoletti/nuxt-social-share.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@stefanobartoletti/nuxt-social-share

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
