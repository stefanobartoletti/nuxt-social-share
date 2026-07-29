import MyModule from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule,
  ],

  socialShare: {
    baseUrl: 'https://www.example.com',
    networks: ['facebook'],
  },
})
