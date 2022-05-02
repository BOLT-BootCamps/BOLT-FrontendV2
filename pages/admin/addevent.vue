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
          <input v-model="event.sZoomUrl" type="text" class="input-text">
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
            <option disabled value="" class="input-text">
              Please Select
            </option>
            <option v-for="(bootcamp,id) in bootcamps" :key="id" :value="bootcamp.pkiBootcampID" class="input-text">
              {{ bootcamp.sBootcampName }}
            </option>
          </select>
        </section>
        <section>
          <h1 class="sort">
            Date
          </h1>
          <RangePicker :start="event.dtStartDate" :end="event.dtEndDate" @start="event.dtStartDate = $event" @end="event.dtEndDate = $event" />
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
        :bootcamp="event.sBootcampName"
        :link="event.sZoomUrl"
        :startdate="event.dtStartDate"
        :enddate="event.dtEndDate"
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
      const response = await $axios.$post('graphql', { query: getBootcampNames() })
      bootcamps = response.data.bootcamps
    } catch (e) {
      console.log(e.message)
    }
    return { bootcamps }
  },
  data () {
    return {
      event:
        {
          sEventName: '',
          sDescription: '',
          dtStartDate: new Date().toISOString(),
          dtEndDate: new Date().toISOString(),
          sImageUrl: '',
          sZoomUrl: '',
          fkiBootcampID: 0,
          sBootcampName: ''
        },
      bootcamps: [],
      submitted: false
    }
  },
  head () {
    return {
      title: 'Add Event',
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
    async submitEvent () {
      if (this.submitted) {
        return
      }
      this.submitted = true
      try {
        await this.$axios.$post('graphql',
          {
            query: addEvent(),
            variables: {
              ...this.event,
              dtStartDate: new Date(this.event.dtStartDate).toISOString(),
              dtEndDate: new Date(this.event.dtEndDate).toISOString()
            }
          })
        this.$router.push({
          path: '/admin/events'
        })
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style scoped>
.input-text {
  @apply p-2 border rounded-md border-gray-400 bg-white;
}

</style>
