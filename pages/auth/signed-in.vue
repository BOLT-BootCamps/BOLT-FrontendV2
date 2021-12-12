<template>
  <div>
    <p>Signing in...</p>
    <p v-if="message !== ''">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    if (this.$route.hash !== '') {
      this.message = this.$route.hash
    }
  }
}
</script>
