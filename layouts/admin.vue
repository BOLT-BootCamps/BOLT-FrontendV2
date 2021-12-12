<template>
  <div class="bg-gray-100">
    <div class="nav">
      <img src="~/assets/logo.png" class="h-full nav-item">
      <NuxtLink v-for="item in nav" :key="item.name" :to="item.route" :class="item.name === currentTab ? 'nav-item underline' : 'nav-item'">
        {{ item.name }}
      </NuxtLink>
      <div class="nav-item ml-auto flex space-x-4 items-center">
        <div>
          Profile
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
  data () {
    return {
      nav: [
        {
          name: 'Events',
          route: '/admin/events'
        },
        {
          name: 'Applications',
          route: '/admin/applications'
        },
        {
          name: 'Bootcamps',
          route: '/admin/bootcamps'
        }
      ],
      currentTab: ''
    }
  },
  created () {
    this.$nuxt.$on('current-link', (e) => {
      this.currentTab = e
    })
  },
  methods: {
  }

}

</script>

<style scoped>
.nav {
  @apply bg-bluegray-900 h-24 py-4 pl-2 pr-10 flex flex-row items-center;
  @apply text-gray-100;
}
.nav-item {
  @apply px-4 text-lg font-semibold;
}

</style>
