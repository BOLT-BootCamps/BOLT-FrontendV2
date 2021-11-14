<template>
  <div>
    <Tutorial />
  </div>
</template>

<script>
import Tutorial from '@/components/Tutorial.vue'
export default {
  name: 'Main',
  components: {
    Tutorial
  },
  middleware: 'auth'
}
</script>
