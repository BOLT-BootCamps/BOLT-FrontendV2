<template>
  <div class="event-card">
    <section class="event-glance">
      <div class="glance-text">
        {{ new Date(startdate).toDateString() }}
      </div>
      <div class="date py-4">
        {{ formatAMPM(startdate) }}
      </div>
      <div class="glance-text">
        {{ bootcamp }}
      </div>
    </section>
    <section class="p-4 flex w-full relative space-y-2">
      <section>
        <div class="event-title">
          {{ title }}
        </div>
        <p class="w-96">
          {{ description.substring(0,200) }}...
        </p>
        <div class="flex absolute bottom-4 space-x-2">
          <button class="border-2 border-black rounded-md hover:bg-gray-500 py-2 px-4 hover:text-white transition-colors font-medium" @click="showModal = true">
            View Event
          </button>
          <button class="border-2 border-blue-500 rounded-md py-2 px-4 hover:bg-blue-500 hover:text-white transition-colors font-medium">
            Zoom Link
          </button>
        </div>
      </section>
      <section class="ml-auto ">
        <img :src="image" alt="Event Image" class="w-96 object-cover h-full rounded-lg bg-blue-400">
      </section>
    </section>
    <Modal v-show="showModal" @close-modal="showModal=false" />
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
export default {
  components: { Modal },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    startdate: {
      type: String,
      required: true
    },
    enddate: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    bootcamp: {
      type: String,
      required: true
    },
    colour: {
      type: String,
      default: 'blue-50'
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
  },
  methods: {
    formatAMPM (datetime) {
      const date = new Date(datetime)
      let hours = date.getHours()
      let minutes = date.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours || 12 // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes
      const strTime = hours + ':' + minutes + ' ' + ampm
      return strTime
    }
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
