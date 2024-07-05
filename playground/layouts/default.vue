<template>
  <div class="flex flex-col min-h-screen">
    <SiteHeader />
    <div class="flex-1">
      <slot></slot>
    </div>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteFooter from '../components/SiteFooter.vue'
</script>
