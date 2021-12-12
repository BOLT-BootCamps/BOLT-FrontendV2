<template>
  <div class="p-8">
    <section class="flex flex-col">
      <h1>Applications</h1>
      <section />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdminApplications',
  layout: 'admin',
  middleware: 'auth',
  head () {
    return {
      title: 'Applications',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Applications'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Applications')
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
