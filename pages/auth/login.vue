<template>
  <div>
    <section class="flex flex-col">
      <button class="btn" @click="login()">
        Login
      </button>
      <button class="btn" @click="register()">
        Register
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  auth: 'guest',
  layout: 'guest',
  methods: {
    login () {
      this.$auth.loginWith('auth0')
      return 'logging in'
    },
    register () {
      this.$auth.loginWith('auth0', {
        params: {
          mode: 'signup',
          screen_hint: 'signup',
          prompt: 'login'
        }
      })
      return 'logging in'
    }
  }
}
</script>

<style scoped>
.btn {
  @apply bg-white shadow-lg rounded-2xl py-6 px-32 m-4 hover:bg-gray-100;
  @apply text-2xl font-semibold;
}
</style>
