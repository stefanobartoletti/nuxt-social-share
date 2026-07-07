<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { title = 'My Page', description = '' } = defineProps<{
  title?: string
  description?: string
}>()
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  background: white;
  color: #171717;
}
h1 {
  font-size: 72px;
  font-weight: bold;
  margin: 0;
  line-height: 1.1;
  text-align: center;
  text-wrap: balance;
}
p {
  font-size: 32px;
  opacity: 0.6;
  margin-top: 16px;
  text-align: center;
  max-width: 900px;
}
</style>
