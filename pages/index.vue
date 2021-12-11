<template>
  <div>
    <Nav />
    <HomeSection1 style="box-shadow: inset 0 0 5px rgba(0,0,0,.5)" />
    <HomeSection2 class="z-10 bg-white" />
    <HomeSection3 style="box-shadow: inset 0 0 5px rgba(0,0,0,.5)" />
    <HomeSection4 />
    <HomeSection5 style="box-shadow: inset 0 0 5px rgba(0,0,0,.5)" />
    <EmployeesCarousel />
  </div>
</template>

<script>
import EmployeesCarousel from '../components/home/EmployeesCarousel.vue'
import Nav from '../components/Nav.vue'
export default {
  components: {
    EmployeesCarousel,
    Nav
  }
}
</script>
