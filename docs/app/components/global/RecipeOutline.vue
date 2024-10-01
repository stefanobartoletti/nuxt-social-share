<template>
  <div class="flex gap-2 flex-wrap justify-center w-full bg-white rounded p-4">
    <SocialShare
      v-for="network in ['facebook', 'twitter', 'linkedin']"
      :key="network"
      :network="network"
      class="border-2 border-[color:--color-brand] text-[color:--color-brand] px-3 py-2 hover:bg-[color:--color-brand] hover:text-white"
    />
  </div>
</template>
