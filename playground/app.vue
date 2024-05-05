<template>
  <header class="navbar bg-base-200">
    <div class="container">
      <div class="flex-1">
        <h1 class="font-bold text-xl">Nuxt Social Share</h1>
      </div>
      <div class="flex-none">
        <a
          class="btn btn-square btn-ghost"
          href="https://github.com/stefanobartoletti/nuxt-social-share"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>

  <main class="container py-16">
    <div class="join join-vertical">
      <!-- Instances -->
      <div
        v-for="(instance, index) in instances"
        :key="index"
        class="collapse collapse-arrow join-item border border-base-300"
      >
        <input type="radio" name="accordion" />
        <div
          class="collapse-title text-xl font-medium bg-base-200 rounded-none"
        >
          <h2>{{ instance.title }}</h2>
        </div>

        <div class="collapse-content">
          <div class="flex flex-col lg:flex-row lg:p-8 lg:pt-12 gap-8">
            <div
              class="buttons-container flex flex-wrap gap-2 p-8 justify-center content-center w-auto lg:w-1/2"
              :class="instance.class"
            >
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
              <pre>{{
                `export default defineNuxtConfig({\n\tsocialShare: {\n\t\tstyled: ${instance.styled},\n\t\tlabel: ${instance.label},\n\t}\n})`
              }}</pre>
              <div v-if="instance.note" role="alert" class="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-info shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ instance.note }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Composable -->
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div
          class="collapse-title text-xl font-medium bg-base-200 rounded-none"
        >
          <h2>Composable</h2>
        </div>

        <div class="collapse-content">
          <div class="flex flex-col lg:p-8 lg:pt-12">
            <div class="p-4 w-auto flex flex-col gap-4">
              <h3 class="text-lg font-medium">Usage example:</h3>
              <pre>{{ `<script setup>\nconst getFacebook = useSocialShare({ network: 'facebook' })\n</script>` }}</pre>
            </div>

            <div class="p-4 w-auto flex flex-col gap-4">
              <h3 class="text-lg font-medium">Returned object:</h3>
              <pre>{{ getFacebook }}</pre>
            </div>
          </div>
        </div>
      </div>
      <!-- Using all props -->
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div
          class="collapse-title text-xl font-medium bg-base-200 rounded-none"
        >
          <h2>Complete share URLs when using all Props</h2>
        </div>

        <div class="collapse-content">
          <div class="flex flex-col lg:p-8 lg:pt-12">
            <div class="p-4 w-auto flex flex-col gap-8">
              <div
                v-for="item in getAllNetworks()"
                :key="item"
                class=""
                :url="item"
              >
                <p>{{ item.value.name }}</p>
                <pre>{{ item.value.shareUrl }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Reactive -->
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="accordion" />
        <div
          class="collapse-title text-xl font-medium bg-base-200 rounded-none"
        >
          <h2>{{ urlInstance.title }}</h2>
        </div>

        <div class="collapse-content">
          <div class="flex flex-col lg:p-8 lg:pt-12">
            <div class="p-4 w-auto flex flex-col gap-4">
              <SocialShare
                network="telegram"
                :styled="urlInstance.styled"
                :label="urlInstance.label"
                :url="urlInstance.url"
                :class="urlInstance.class"
              />
              <p>
                Current url is: {{ urlInstance.url }} (click the social button
                or mouse over on it to see the change)
              </p>
              <button
                class="border w-min p-4 text-white self-center text-nowrap rounded"
                @click="changeUrl"
              >
                Change url
              </button>
              <h3 class="text-lg font-medium">Usage example (component):</h3>
              <pre>{{ `<script setup>
const url = ref<string | undefined>(undefined)
url.value = "https://www.example.com"
</script>\n<template>\n<SocialShare :url="url" />\n</template>` }}</pre>
              <h3 class="text-lg font-medium">Usage example (composable):</h3>
              <pre>{{ `<script setup>\nconst getNetwork = useSocialShare({ url: undefined })
getNetwork.value.shareUrl = getNetwork.value.updateUrl("new url")\n</script>` }}</pre>

              <div v-if="urlInstance.note" role="alert" class="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="stroke-info shrink-0 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{{ urlInstance.note }}</span>
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
import { ref } from 'vue'
import { networksIndex } from '../src/runtime/networksIndex'
import { useSocialShare } from '#imports'

const getFacebook = useSocialShare({ network: 'facebook' })

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

const urlInstance = {
  title: 'Reactive url option',
  styled: true,
  label: true,
  class: 'text-white self-center',
  note: `'url' is 'undefined' by default, and can be omitted here to change it.`,
  url: ref('/index'),
}

const isIndexPage = ref(true)

const changeUrl = () => {
  isIndexPage.value = !isIndexPage.value
  urlInstance.url.value = isIndexPage.value ? '/index' : '/about'
}

const getAllNetworks = () => {
  const allNetworks = []

  testNetworks.forEach((el) => {
    allNetworks.push(
      useSocialShare({
        network: el,
        url: 'https://www.example.com/',
        title: 'Test Title',
        user: 'test_user',
        hashtags: 'test,hashtags',
        image: 'https://www.example.com/image.jpg',
      }),
    )
  })

  return allNetworks
}
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
