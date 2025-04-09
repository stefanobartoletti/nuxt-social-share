<template>
  <main class="container py-16">
    <div class="join join-vertical">
      <!-- Using all props -->
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div class="collapse-title text-xl font-medium bg-base-200 rounded-none">
          <h2>Complete share URLs when using all Props</h2>
        </div>
        <div class="collapse-content">
          <div class="flex flex-col  lg:p-8 lg:pt-12">
            <div class="p-4 w-auto flex flex-col gap-8">
              <div v-for="item in allNetworks" :key="item" class="" :url="item">
                <p>{{ item.value.name }}</p>
                <pre>{{ item.value.shareUrl }}</pre>
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
import { useSocialShare } from '#imports'
import { networksIndex } from '../../src/runtime/networksIndex'

const testNetworks = Object.keys(networksIndex)

const allNetworks = []

testNetworks.forEach((el) => {
  allNetworks.push(useSocialShare({
    network: el,
    url: 'https://www.example.com/',
    title: 'Test Title',
    user: 'test_user',
    hashtags: 'test,hashtags',
    image: 'https://www.example.com/image.jpg',
  }))
})
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
</style>
