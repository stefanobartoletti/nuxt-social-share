<template>
  <main class="container">
    <!-- ComponentInstances -->
    <section v-for="instance in instances" :key="instance.title" class="section">
      <h2 class="section-title">{{ instance.title }}</h2>
      <div class="buttons-container" :class="instance.class">
        <SocialShare
          v-for="network in testNetworks"
          :key="network"
          :network="network"
          :styled="instance?.styled"
          :label="instance?.label"
          title="My custom title"
        />
      </div>
    </section>

    <section class="section">
      <h2 class="section-title">Composables</h2>
      <button v-for="network in testNetworks" :key="network" class="toggle-button" @click="selectedNetwork = network">{{ network }}</button>

      <pre>{{ useSocialShare({ network: selectedNetwork }) }}</pre>
    </section>
  </main>
</template>

<script setup>
import { ref, useSocialShare } from '#imports'
import { networksBase } from '../src/runtime/networksIndex'

const testNetworks = Object.keys(networksBase)
const selectedNetwork = ref('facebook')

const instances = [
  {
    title: 'Styled & Label',
    styled: true,
    label: true,
    class: 'styled-label',
  },
  {
    title: 'Styled & No Label',
    styled: true,
    label: false,
    class: 'styled-nolabel',
  },
  {
    title: 'Styled & No Label, with custom style',
    styled: true,
    label: false,
    class: 'nostyled-nolabel',
  },
  {
    title: 'No Style & Label (Default)',
    class: 'nostyled-label',
  },
]
</script>

<style scoped>
.container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: sans-serif;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.section {
  padding-block: 2rem;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.nostyled-nolabel {
  gap: 0;

  .social-share-button {
    padding: 1.125rem;
    aspect-ratio: 1 / 1;
    border-radius: 0;
    font-size: 1.125rem;
  }
}

.toggle-button {
  background: #777;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

pre {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
  white-space: pre-wrap;
}
</style>
