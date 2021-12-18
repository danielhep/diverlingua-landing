<template>
  <div class="min-h-screen relative">
    <Nav />
    <GenericSection :stars="true" class="bg-diverlingua-light-blue" :full-height="true">
      <div class="my-4">
        <h2 class="text-7xl text-white text-bold font-header" style="text-shadow: 1px 1px 0 #0f7f9b">
          Hello, {{ compFirstName }}!
        </h2>
        <div class="mt-4 text-white text-2xl text-bold" style="text-shadow: 1px 1px 0 #0f7f9b">
          To sign up for classes, we want to know a bit about you first.<br>
          Then, we can match you with the right teacher and the right curriculum.
        </div>
      </div>
      <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 my-4 bg-diverlingua-blue bg-opacity-75 px-12 py-8 shadow-lg rounded-md">
        <div>
          <label for="name">My name is</label>
          <div class="mt-1">
            <input id="name" v-model="name" type="text" name="name" autocomplete="given-name">
          </div>
        </div>
        <div>
          <label for="email">You can email me at</label>
          <div class="mt-1">
            <input id="email" type="email" name="email" autocomplete="email">
          </div>
        </div>
        <div>
          <label for="start-language">I know</label>
          <div class="mt-1">
            <select id="start-language" type="text" name="start-language" autocomplete="language">
              <option>Spanish</option>
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
        <div>
          <label for="start-language">And I want to learn</label>
          <div class="mt-1">
            <select id="start-language" type="text" name="start-language" autocomplete="language">
              <option>Spanish</option>
              <option>English</option>
              <option>French</option>
            </select>
          </div>
        </div>
        <div class="col-span-2">
          <div class="w-1/2 mx-auto">
            <fieldset>
              <p class="text-white mb-4">
                Where are you at in your target language?
              </p>
              <legend class="sr-only">
                Plan
              </legend>
              <div class="space-y-5">
                <div v-for="level in levels" :key="level.id" class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      :id="level.id"
                      :aria-describedby="`${level.id}-description`"
                      name="level"
                      type="radio"
                      :checked="level.id === 'small'"
                      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-800"
                    >
                  </div>
                  <div class="ml-3 text-sm">
                    <label :for="level.id" class="font-medium">{{ level.name }}</label>
                    <p :id="`${level.id}-description`" class="text-gray-100">
                      {{ level.description }}
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div class="mt-6">
              <label for="hours">I can dedicate this much time per week:</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="price"
                  type="number"
                  name="hours"
                >
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">
                    hours
                  </span>
                </div>
              </div>
            </div>
            <div>
              <p class="text-base text-white mt-4">
                Scheduling of lessons will occur with the teacher based on your availability.
              </p>
            </div>
            <div class="mt-4">
              <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-diverlingua-pink hover:bg-diverlingua-pink-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Let's go!
              </button>
            </div>
          </div>
        </div>
      </form>
    </GenericSection>
  </div>
</template>
<script>
import { defineComponent, ref, computed } from '@vue/composition-api'

const levels = [
  { id: 'beginner', name: 'Complete Beginner', description: 'I almost nothing of my target language, but I want to learn!' },
  { id: 'basic', name: 'Basic Understanding', description: 'I know a few words or a bit of grammar, but I couldn\'t hold a conversation.' },
  { id: 'conversational', name: 'Conversational', description: 'I can have a conversation, but I\'m not at the level I want to be.' }
]

export default defineComponent({
  setup () {
    const name = ref('')
    const compFirstName = computed(() => name.value === '' ? 'language learner' : name.value.split(' ')[0])

    return {
      name,
      compFirstName,
      levels
    }
  }
})
</script>

<style scoped>
  form label {
    @apply block text-base font-small text-white;
  }
  form input, select {
    @apply py-2 px-4 w-full shadow-sm focus:ring-diverlingua-pink focus:border-diverlingua-pink border-gray-300 rounded-md bg-white;
  }

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>
