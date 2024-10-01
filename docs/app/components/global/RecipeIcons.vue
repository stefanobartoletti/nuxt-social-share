<template>
  <div class="flex flex-wrap justify-center w-full bg-white rounded p-4">
    <SocialShare
      v-for="network in ['facebook', 'twitter', 'linkedin']"
      :key="network"
      :network="network"

      :label="false"
      class="text-gray-500 py-2 px-4 border-none hover:text-[color:--color-brand]"
    />
  </div>
</template>
