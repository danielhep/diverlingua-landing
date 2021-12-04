<template>
  <div
    class="h-96 relative flex leading-normal px-8 justify-center font-header"
  >
    <div
      class="flex leading-normal mx-8 w-full z-10 max-w-screen-lg"
      :class="{'flex-row': textOnRight, 'flex-row-reverse': !textOnRight}"
    >
      <div class="flex flex-col justify-center">
        <p class="text-2xl">
          <slot />
        </p>
      </div>
      <div class="flex-grow" />
      <img v-if="img !== ''" class="" :src="require(`~/assets/${img}`)">
    </div>
    <Stars v-if="stars" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    textOnRight: { type: Boolean, default: false },
    stars: { type: Boolean, default: false },
    img: { type: String, default: '' }
  }
})
</script>
