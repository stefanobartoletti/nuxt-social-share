<template>
  <div class="container">
    <h1>Social Share Buttons</h1>

    <h2>Styled</h2>

    <div class="buttons">
      <SocialShare
        v-for="network in testNetworks"
        :key="network"
        :network="network"
        :styled="true"
        :label="true"
      />
    </div>

    <h2>Styled no labels</h2>

    <div class="buttons">
      <SocialShare
        v-for="network in testNetworks"
        :key="network"
        :network="network"
        :styled="true"
        :label="false"
      />
    </div>

    <h2>Unstyled (default)</h2>

    <div class="buttons">
      <SocialShare
        v-for="network in testNetworks"
        :key="network"
        :network="network"
      />
    </div>
  </div>
</template>

<script setup>
const testNetworks = [
  'facebook',
  'twitter',
  'linkedin',
  'pinterest',
  'pocket',
  'whatsapp',
  'telegram',
  'email',
]
</script>


<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.buttons {
  display: flex;
  gap: 0.5rem;
}
</style>