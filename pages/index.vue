<template>
  <div class="dark">
    <Tutorial/>
    <Login/>
  </div>
</template>

<script>
import Tutorial from '@/components/Tutorial.vue'
import Login from '@/pages/auth/login.vue'
export default {
  name: 'Main',
  components: {
    Tutorial,
    Login
  },
}
</script>
