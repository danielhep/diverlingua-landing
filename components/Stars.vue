<template>
  <canvas id="starContainer" ref="starContainer" class="absolute w-full h-full inset-0" />
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'

export default defineComponent({
  setup () {
    const starContainer = ref()
    function resizeCanvas (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      return { w: canvas.width, h: canvas.height }
    }

    const renderStars = delayedRender => () => {
      const stars = starContainer.value.getContext('2d')
      const { w, h } = resizeCanvas(starContainer.value)
      stars.clearRect(0, 0, w, h)
      const area = w * h
      const numStars = area / 8000
      for (let i = 0; i < numStars; i++) {
        const timeout = delayedRender ? Math.floor(Math.random() * 1000) : 0
        setTimeout(() => {
          stars.beginPath()
          const randomX = Math.floor(Math.random() * w)
          const randomY = Math.floor(Math.random() * h)
          const size = Math.random() * 5

          stars.arc(randomX, randomY, size, 0, 2 * Math.PI)
          stars.fillStyle = '#eee'
          stars.fill()
          stars.closePath()
        }, timeout)
      }
    }

    onMounted(() => {
      window.addEventListener('resize', renderStars(false))
      renderStars(true)()
    })

    return {
      starContainer
    }
  }
})
</script>
