<template>
  <div>
    <section class="flex flex-col">
      <div class="verify">
        <h1 class="header">
          Registration Complete
        </h1>
        <p>
          We've sent an email to {{ email }} to verify your email
          address and activate your account. The link in the email will expire after 24 hours.
        </p>
        <button class="text-blue-700 my-4" @click="login()">
          Login
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'VerifyEmail',
  layout: 'guest',
  middleware: 'auth',
  data () {
    return {
      email: 'zhehaizhang1@gmail.com'
    }
  },
  methods: {
    login () {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>

<style scoped>
.verify {
  @apply bg-white shadow-lg rounded-2xl py-6 px-6 m-4 max-w-prose hover:bg-gray-100;
}

.header {
  @apply text-2xl font-semibold;
}
</style>
