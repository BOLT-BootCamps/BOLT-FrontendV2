<template>
  <div>
    <div v-if="verified">
      <div>
        verified
      </div>
    </div>
    <div v-else>
      Not verified
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {
  },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      verified: false
    }
  }
}
</script>

<style>

</style>
