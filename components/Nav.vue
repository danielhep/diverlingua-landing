<template>
  <header class="h-20 flex flex-row z-20 relative">
    <img src="~/assets/logo.svg" class="p-2&quot;">
    <div class="flex-grow" />
    <div class="flex">
      <div class="navbar-button special">
        <NuxtLink to="/enroll">
          Enroll
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
<style scoped>
  .navbar-button {
    @apply h-full flex items-center border-b-4 border-diverlingua-aqua px-4 text-lg border-opacity-0 hover:border-opacity-100 cursor-pointer;
  }

  .navbar-button a {
    @apply px-2;
  }

  .navbar-button.special {
    @apply border-0;
  }

  .navbar-button.special a {
    @apply bg-diverlingua-pink px-4 py-2 rounded-xl text-white shadow-md;
  }
</style>
