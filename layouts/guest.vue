<template>
  <div class="background">
    <div class="absolute top-20 flex items-center justify-center w-full">
      <img src="~/assets/logo.png">
    </div>
    <Nuxt />
  </div>
</template>

<style scoped>
.background {
  @apply bg-indigo-900 w-full h-screen;
  @apply grid place-content-center relative;
}

</style>
