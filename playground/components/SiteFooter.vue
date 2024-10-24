<template>
  <footer class="navbar bg-base-200">
    <div class="container">
      <div class="flex flex-row gap-8 mx-auto">
        <SocialShare
          v-for="network in ['facebook', 'x', 'linkedin', 'email']"
          :key="network"
          :network="network"
          :styled="false"
          :label="false"
        />
      </div>
    </div>
  </footer>
</template>
