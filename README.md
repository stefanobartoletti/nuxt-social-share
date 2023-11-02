<div align="center">

<img src=".github/nuxt-social-share.svg" width="128" />

# Nuxt Social Share

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0370b989a90b46e190111a2abb8e44c3)](https://app.codacy.com/gh/stefanobartoletti/nuxt-social-share?utm_source=github.com&utm_medium=referral&utm_content=stefanobartoletti/nuxt-social-share&utm_campaign=Badge_Grade)

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code quality][code-quality-src]][code-quality-href]
[![bundle size][bundle-size-src]][bundle-size-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

<img src=".github/preview.png" width="486" />

Simple Social Sharing for Nuxt

[Release Notes](/CHANGELOG.md)

</div>

> **Important**
> This is an early release, changes on its code and on the API are possible until a stable release will be published.
> Anyway, considering its very simple functionality, it can be already assumed to be safe to use.
> Feedback, suggestions and contributions by the community are welcome.


## 🌟 Features

- Provides an easy to use `SocialShare` component
- Component unstyled by default for easy integration in any design
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

The `SocialShare` component provides a share button for a single social network, that you must select from the `network` prop; you will need to use it as many times as your total needed networks.

```vue
<!-- Basic use -->
<SocialShare network="facebook" />
<SocialShare network="twitter" />
<SocialShare network="linkdin" />

<!-- Customization with props -->
<SocialShare network="facebook" :styled="true" :label="false" />
```

The component will render by default the following minimal HTML: 

```html
<a class="social-share-button social-share-button--{network}">
  <svg class="social-share-button__icon">...</svg>
  <span class="social-share-button__label">Share</span>
</a>
```

An additional `social-share-button--styled` class will be added to the `<a>` element if `:styled="true"`, while the `<span>` element will not be rendered if `:label="false"`.

> **Note**
> - The component comes unstyled by default, only providing some minimal flex properties to correctly align icon and label; you can use the elements classes to apply every style according to your design. Or, if you use Tailwind, you can style it by directly applying classes to the component, that will be applied to the `<a>` element.
> - Custom styles or additional classes can also be used when using the `styled` version.
> - The only required prop is `network`, other like `styled` or `label` are best set from the module options (see 'Configuration' below)
> - The component only provides a single share button. As you will typically need to use more of them at once, you should place them inside a wrapper to distribute them according to your design.
> - In order to avoid duplicate code when using many instances of the component, especially if you need to customize it, a wise approach is to iterate it with `v-for` and an array of the needed networks.

A common use when using i.e. Tailwind could be as follows:

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

Module options can be set from the `socialShare` key in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  // optional configuration 
  socialShare: {
    // module options
  }
})
```

Available options:

### `styled` 

- Type: `Boolean`
- Default: `false`

Whether the `socialShare` components should be styled or not. It is `false` by default to allow for easier custom styling.

It can be set also on a single component level via props, but is us usually better to set this from the module options to create your defaults, and override it from props only if needed.

### `label` 

- Type: `Boolean`
- Default: `true`

Whether the text label should be rendered or not. It is `true` by default, when set to `false` only the icon will be displayed.

It can be set also on a single component level via props, but is us usually better to set this from the module options to create your defaults, and override it from props only if needed.

## 🎨 Props

### `network`

- Required: `Yes`
- Type: `String`

The social network or messaging service where the content should be shared. This is the only required prop.

A list of the supported networks is available below.

### `styled`

- Required: `No`
- Type: `Boolean`
- Default: `false`

Whether the component should be styled or not. It is `false` by default to allow for easier custom styling. Additional customization is possible also when set to `true`.

This property should be typically set globally from the module options, it is available as a prop to allow a different behavior on a single instance of the component.

### `label`

- Required: `No`
- Type: `Boolean`
- Default: `true`

Whether the text label should be rendered or not. It is `true` by default, when set to `false` only the icon will be displayed.

This property should be usually set globally from the module options, it is available as a prop to allow a different behavior on a single instance of the component.

### `url`

- Required: `No`
- Type: `String`
- Default: `the current page URL`

The URL that will be shared on the selected social network.

Defaults to the current page URL. On most cases you don't need another value, but if you need to provide another URL, you can do so with this prop.

## ↗️ Supported networks

A list of the currently supported networks and of their URL arguments.

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

> **Note**
> Currently I have only included networks that I use and that I have personally tested to be working. More are planned to be added, contributions are welcome.

> **Important**
> At the moment only the `url` argument is implemented. More, like `title`, `text` and other, are planned for a future release. 
> Please note that only `url` is strictly required for the sharing to work. When not explicity set, other metadata will be automatically retrived from Open Graph meta tags, that you always should properly set in your webpages anyway.

## ✅ Todo

- [ ] Add support for more major social networks
- [ ] Add support for more URL arguments: `title`, `text`, etc.


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

[code-quality-src]: https://img.shields.io/codacy/grade/xxx.svg?style=flat&colorA=18181B&colorB=28CF8D
[code-quality-href]: https://app.codacy.com/gh/stefanobartoletti/nuxt-social-share

[bundle-size-src]: https://img.shields.io/bundlephobia/minzip/@stefanobartoletti/nuxt-social-share.svg?style=flat&colorA=18181B&colorB=28CF8D
[bundle-size-href]: https://bundlephobia.com/result?p=@stefanobartoletti/nuxt-social-share

[license-src]: https://img.shields.io/npm/l/@stefanobartoletti/nuxt-social-share.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/@stefanobartoletti/nuxt-social-share

[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
