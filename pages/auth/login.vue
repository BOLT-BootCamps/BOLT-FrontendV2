<template>
  <div>
    <section>
      <button @click="getLogin()">
        Login
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  auth: 'guest',
  methods: {
    getLogin () {
      this.$auth.loginWith('auth0')
      return 'logging in'
    }
  }
}
</script>
