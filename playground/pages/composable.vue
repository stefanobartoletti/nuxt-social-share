<template>
  <main class="container py-16">
    <div class="join join-vertical">
      <!-- Composable -->
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div class="collapse-title text-xl font-medium bg-base-200 rounded-none">
          <h2>Composable</h2>
        </div>
        <div class="collapse-content">
          <div class="flex flex-col lg:p-8 lg:pt-12">
            <div class="p-4 w-auto  flex flex-col gap-4">
              <h3 class="text-lg font-medium">Usage example:</h3>
              <pre>{{ `<script setup>\nconst getFacebook = useSocialShare({ network: 'facebook' })\n</script>` }}</pre>
            </div>
            <div class="p-4 w-auto  flex flex-col gap-4">
              <h3 class="text-lg font-medium">Returned object:</h3>
              <pre>{{ getFacebook }}</pre>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->
    </div>
  </main>
</template>

<script setup>
import { useSocialShare } from '#imports'

const getFacebook = useSocialShare({ network: 'facebook' })
</script>

<style>
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
