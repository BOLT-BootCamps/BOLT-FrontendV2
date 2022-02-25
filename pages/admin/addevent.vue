<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Add Event
      </h1>
      <section class="grid grid-cols-2 gap-4 bg-gray-50 relative w-full p-4">
        <section>
          <h1 class="sort">
            Event Title
          </h1>
          <input v-model="event.sEventName" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Zoom Link
          </h1>
          <input v-model="event.sZoomLink" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Event Description
          </h1>
          <textarea v-model="event.sDescription" rows="4" cols="50" class="input-text" />
        </section>
        <section>
          <h1 class="sort">
            Bootcamp
          </h1>
          <select v-model="event.bootcamp">
            <option disabled value="">
              Please Select
            </option>
            <option v-for="(id, bootcamp) in bootcamps" :key="id" :value="bootcamp.pkiBootcampID">
              {{ bootcamp.sBootcampName }}
            </option>
          </select>
        </section>
        <section>
          <h1 class="sort">
            Date
          </h1>
          <RangePicker />
        </section>
        <section>
          <h1 class="sort">
            Image Link
          </h1>
          <input v-model="event.sImageUrl" type="text" class="input-text">
        </section>
        <section class="absolute bottom-4 right-4 text-white">
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block" @click="submitEvent()">
            Submit
          </button>
          <NuxtLink class="bg-red-500 px-2 py-2 rounded-md inline-block" to="/admin/events">
            Discard
          </NuxtLink>
        </section>
      </section>
      <h1 class="sort">
        Preview:
      </h1>
      <event-card
        :title="event.sEventName"
        :description="event.sDescription"
        :image="event.sImageUrl"
        :link="event.sZoomLink"
        :datetime="event.dtStartDate"
        :bootcamp="event.sBootcampName"
      />
      <section />
    </section>
  </div>
</template>

<script>
import EventCard from '~/components/user/EventCard.vue'
import RangePicker from '~/components/RangePicker.vue'
import { addEvent, getBootcampNames } from '~/utils/graphql'

export default {
  name: 'AdminAddEvents',
  components: { EventCard, RangePicker },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let bootcamps = []
    try {
      bootcamps = await $axios.$post('graphql', { query: getBootcampNames() }).data
    } catch (e) {
      console.log(e.message)
    }
    return { bootcamps }
  },
  data () {
    return {
      event:
        {
          title: '',
          link: '',
          description: '',
          datetime: Date.now(),
          bootcamp: '',
          image: ''
        },
      bootcamps:
      []
    }
  },
  head () {
    return {
      title: 'AddEvent',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Add Event'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Events')
  },
  methods: {
    submitEvent ($axios) {
      try {
        $axios.$post('graphql', { mutation: addEvent(this.event) })
      } catch (e) {
        console.log(e.message)
      }
      console.log('submitted')
    }
  }
}
</script>

<style scoped>
.input-text {
  @apply p-2 border rounded-md border-gray-400 bg-white;
}

</style>
