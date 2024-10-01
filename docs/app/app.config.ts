export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Social Share',
  },
  header: {
    logo: {
      alt: 'Nuxt Social Share',
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    search: true,
    colorMode: true,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/stefanobartoletti/nuxt-social-share',
        'target': '_blank',
        'aria-label': 'Repository on GitHub',
      },
    ],
  },
  footer: {
    credits: '© 2023-present Stefano Bartoletti',
    colorMode: false,
    links: [
      {
        'icon': 'i-lucide-globe',
        'to': 'https://www.stefanobartoletti.it',
        'target': '_blank',
        'aria-label': 'Stefano Bartoletti Website',
      },
      {
        'icon': 'i-simple-icons-linkedin',
        'to': 'https://www.linkedin.com/in/stefanobartoletti/',
        'target': '_blank',
        'aria-label': 'Stefano Bartoletti on LinkedIn',
      },
      {
        'icon': 'i-simple-icons-instagram',
        'to': 'https://www.instagram.com/stefanobartoletti.it',
        'target': '_blank',
        'aria-label': 'Stefano Bartoletti on Instagram',
      },
      {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/ste_bartoletti',
        'target': '_blank',
        'aria-label': 'Stefano Bartoletti on X',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/stefanobartoletti/nuxt-social-share/edit/main/docs/content',
      links: [
        {
          icon: 'i-lucide-star',
          label: 'Star on GitHub',
          to: 'https://github.com/stefanobartoletti/nuxt-social-share',
          target: '_blank',
        },
        {
          icon: 'i-lucide-scroll-text',
          label: 'Changelog',
          to: 'https://github.com/stefanobartoletti/nuxt-social-share/blob/main/CHANGELOG.md',
          target: '_blank',
        },
        {
          icon: 'i-lucide-package',
          label: 'Releases',
          to: 'https://github.com/stefanobartoletti/nuxt-social-share/releases',
          target: '_blank',
        },
        {
          icon: 'i-lucide-globe',
          label: 'Author\'s Website',
          to: 'https://www.stefanobartoletti.it',
          target: '_blank',
        },
      ],
    },
  },
})
