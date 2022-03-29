<template>
  <client-only>
    <DatePicker v-model="newRange" is-range>
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
  </client-only>
</template>

<script>
export default {
  props: {
    start: {
      type: String,
      default: new Date().toISOString()
    },
    end: {
      type: String,
      default: new Date().toISOString()
    }
  },
  emits: ['update:start', 'update:end'],
  computed: {
    newRange: {
      get () {
        return {
          start: this.start,
          end: this.end
        }
      },
      set (value) {
        this.$emit('start', value.start.toISOString())
        this.$emit('end', value.end.toISOString())
      }
    }
  }
}
</script>
