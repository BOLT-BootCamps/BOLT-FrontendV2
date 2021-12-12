<template>
  <DatePicker v-model="range" is-range>
    <template #default="{ inputValue, inputEvents }">
      <div class="flex items-center">
        <input
          :value="inputValue.start"
          class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
          v-on="inputEvents.start"
        >
        <svg
          class="w-4 h-4 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <input
          :value="inputValue.end"
          class="border px-2 py-1 w-32 rounded focus:outline-none focus:border-indigo-300"
          v-on="inputEvents.end"
        >
      </div>
    </template>
  </DatePicker>
</template>

<script>
import { DatePicker } from 'v-calendar'
export default {
  components: {
    DatePicker
  },
  data () {
    return {
      range: {
        start: new Date(),
        end: new Date()
      }
    }
  }
}
</script>
