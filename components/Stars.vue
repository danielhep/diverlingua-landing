<template>
  <div id="svgContainer" ref="svgContainer" class="absolute w-full h-full inset-0">
    <svg />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api'
import * as d3 from 'd3'

export default defineComponent({
  setup () {
    const svgContainer = ref(null)

    const renderStars = delayedRender => () => {
      const container = d3.select(svgContainer.value)
      const svg = container.select('svg')
      const w = parseInt(container.style('width'))
      const h = parseInt(container.style('height'))
      svg.attr('viewBox', `0 0 ${w} ${h}`)
      const area = w * h
      const numStars = Math.floor(area / 8000)

      const generateY = d3.randomNormal(h / 2, h * 0.2)
      const generateX = () => {
        const n = d3.randomNormal(w / 2, w * 0.15)() - w / 2
        return n < 0 ? n + w : n
      }
      const values = d3.range(numStars).map((x) => {
        return {
          x: generateX(),
          y: generateY(),
          delay: delayedRender ? Math.floor(Math.random() * 4000) : 0,
          size: (Math.random() * 4) + 1,
          upSpeed: (Math.random() / 2) + 0.5
        }
      })

      svg.selectAll('circle')
        .data(values)
        .join('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.size)
        .attr('fill', 'white')
        .attr('fill-opacity', '0')
        .transition()
        .delay(d => d.delay)
        .attr('fill-opacity', '1')
    }

    onMounted(() => {
      window.addEventListener('resize', renderStars(false))
      renderStars(true)()
    })

    return {
      svgContainer
    }
  }
})
</script>
