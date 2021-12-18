<template>
  <div
    class="relative flex leading-normal px-8 justify-center font-header"
    :class="{'h-96': !fullHeight, 'h-full': fullHeight}"
  >
    <div
      class="flex leading-normal mx-8 w-full z-10 max-w-screen-lg"
      :class="{'flex-row': textSide !== 'right', 'flex-row-reverse': textSide === 'right'}"
    >
      <div class="flex flex-col justify-center" :class="{'w-full': textSide === 'full'}">
        <p class="text-2xl">
          <slot />
        </p>
      </div>
      <div v-if="textSide !== 'full'" class="flex-grow" />
      <img v-if="img !== ''" class="" :src="require(`~/assets/${img}`)">
    </div>
    <client-only>
      <Stars v-if="stars" />
    </client-only>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    textSide: { type: String, default: 'left' },
    textOnRight: { type: Boolean, default: false },
    stars: { type: Boolean, default: false },
    img: { type: String, default: '' },
    fullHeight: { type: Boolean, default: false }
  }
})
</script>
