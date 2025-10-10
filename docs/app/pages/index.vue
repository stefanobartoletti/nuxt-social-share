<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :prose="false"
  />
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('landing').path('/').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const title = page.value.seo?.title || page.value.title
const description = page.value.seo?.description || page.value.description

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: `${process.env.URL || 'http://localhost:3000'}/social-card.png`,
  twitterImage: `${process.env.URL || 'http://localhost:3000'}/social-card.png`,
  twitterCard: 'summary_large_image',
})
</script>
