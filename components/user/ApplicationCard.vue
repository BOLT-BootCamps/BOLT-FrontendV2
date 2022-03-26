<template>
  <div class="event-card">
    <section class="event-glance">
      <div class="glance-text">
        {{ new Date(startdate).toDateString() }}
      </div>
      <div class="date py-4">
        {{ formatAMPM(startdate) }}
      </div>
    </section>
    <section class="p-4 flex w-full relative space-y-2">
      <section>
        <div class="event-title">
          {{ title }}
        </div>
        <p class="w-96">
          {{ description ? description.substring(0,200) : "" }}...
        </p>
        <div class="flex absolute bottom-4 space-x-2">
          <button class="border-2 border-black rounded-md hover:bg-gray-500 py-2 px-4 hover:text-white transition-colors font-medium">
            Edit Application
          </button>
        </div>
      </section>
      <section class="ml-auto ">
        <img :src="image" alt="Event Image" class="w-96 object-cover h-full rounded-lg bg-blue-400">
      </section>
    </section>
  </div>
</template>

<script>
import { formatAMPM } from '~/utils/date'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    startdate: {
      type: String,
      required: true
    },
    enddate: {
      type: String,
      required: true
    },
    form: {
      type: String,
      default: ''
    },
    colour: {
      type: String,
      default: 'blue-50'
    }
  },
  computed: {
  },
  methods: {
    formatAMPM
  }
}
</script>

<style scoped>
.event-card {
  @apply h-56 bg-blue-100 rounded-lg flex flex-row shadow-md;
  width: 1000px;
}
.event-glance {
  @apply rounded-lg bg-lightblue-800 w-56;
  @apply text-gray-50 flex flex-col p-4;
}

.glance-text {
  @apply font-semibold text-base;
}

.date {
  @apply font-semibold text-4xl;
}

.event-title {
  @apply font-semibold text-2xl
}
</style>
