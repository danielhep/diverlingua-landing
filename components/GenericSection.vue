<template>
  <div
    class="relative flex leading-normal px-8 justify-center font-header"
    :class="{'h-96': !fullHeight, 'h-full': fullHeight}"
  >
    <div
      class="flex leading-normal mx-8 w-full z-10 max-w-screen-lg"
      :class="{'flex-row': textOnRight, 'flex-row-reverse': !textOnRight}"
    >
      <div class="flex flex-col justify-center" :class="{'w-full': img===''}">
        <p class="text-2xl">
          <slot />
        </p>
      </div>
      <div v-if="img !== ''" class="flex-grow" />
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
    img: { type: String, default: '' },
    fullHeight: { type: Boolean, default: false }
  }
})
</script>
