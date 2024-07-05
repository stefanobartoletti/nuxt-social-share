<template>
  <main class="container py-16">
    <div class="join join-vertical">
      <!-- Instances -->
      <div v-for="(instance, index) in instances" :key="index" class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div class="collapse-title text-xl font-medium bg-base-200 rounded-none">
          <h2>{{ instance.title }}</h2>
        </div>
        <div class="collapse-content">
          <div class="flex flex-col lg:flex-row lg:p-8 lg:pt-12 gap-8">
            <div class="buttons-container flex flex-wrap gap-2 p-8 justify-center content-center w-auto lg:w-1/2" :class="instance.class">
              <SocialShare
                v-for="network in testNetworks"
                :key="network"
                :network="network"
                :styled="instance.styled"
                :label="instance.label"
              />
            </div>
            <div class="p-4 w-auto lg:w-1/2 flex flex-col gap-4">
              <h3 class="text-lg font-medium">By using props:</h3>
              <pre>{{ `<SocialShare\n\t:styled="${instance.styled}"\n\t:label="${instance.label}"\n/>` }}</pre>
              <h3 class="text-lg font-medium">By using options:</h3>
              <pre>{{ `export default defineNuxtConfig({\n\tsocialShare: {\n\t\tstyled: ${instance.styled},\n\t\tlabel: ${instance.label},\n\t}\n})` }}</pre>
              <div v-if="instance.note" role="alert" class="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{{ instance.note }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->
    </div>
  </main>
</template>

<script setup>
import { networksIndex } from '../../src/runtime/networksIndex'

const testNetworks = Object.keys(networksIndex)

const instances = [
  {
    title: 'Styled & Label',
    styled: true,
    label: true,
    class: 'text-white',
    note: `'label' is 'true' by default, and can be omitted here to get the same result.`,
  },
  {
    title: 'Styled & No Label',
    styled: true,
    label: false,
    class: 'text-white',
    note: null,
  },
  {
    title: 'Styled & No Label, with custom style',
    styled: true,
    label: false,
    class: 'square text-white',
    note: `Custom styles can always be applied, no matter the value of 'style'.`,
  },
  {
    title: 'No Style & Label (Default)',
    styled: false,
    label: true,
    class: '',
    note: `Both 'styled' and 'label' can be omitted here to get the same result, as these are the default values.`,
  },
]
</script>

<style lang="scss">
.square {
  gap: 0rem;

  > * {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 0;
  }
}

pre {
  @apply bg-slate-600 text-white rounded-md p-4 whitespace-pre-wrap;
}
</style>
