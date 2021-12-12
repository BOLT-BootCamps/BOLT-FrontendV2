<template>
  <div class="p-8">
    <section class="flex flex-col">
      <h1>Bootcamps</h1>
      <section />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdminBootcamps',
  layout: 'admin',
  middleware: 'auth',
  head () {
    return {
      title: 'Bootcamps',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Bootcamps'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Bootcamps')
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
