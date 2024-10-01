<template>
  <div class="flex flex-wrap justify-center w-full bg-white rounded p-4">
    <SocialShare
      v-for="network in ['facebook', 'twitter', 'linkedin']"
      :key="network"
      :network="network"
      :styled="true"
      :label="false"
      class="text-white p-4 aspect-square rounded-none border-none"
    />
  </div>
</template>
