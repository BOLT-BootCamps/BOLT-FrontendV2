<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Events
      </h1>
      <section class="flex flex-row">
        <div class="flex flex-row mr-4 items-center space-x-2">
          <p class="sort">
            Sort By:
          </p>
          <select id="sort" name="sort" class="dropdown">
            <option value="Date">
              Date
            </option>
            <option value="Not Date">
              Upcoming Events
            </option>
          </select>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <p class="sort">
            Bootcamp:
          </p>
          <select id="sort" name="sort" class="dropdown">
            <option value="Date">
              Date
            </option>
            <option value="Not Date">
              Not Date
            </option>
          </select>
        </div>
        <section class="flex flex-row ml-auto text-white space-x-2 items-center">
          <NuxtLink class="bg-blue-500 px-2 py-1 rounded-md" to="/admin/addEvent">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Event
          </NuxtLink>
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </section>
      </section>
      <event-card
        v-for="(event, ind) in events"
        :key="ind"
        :eventid="event.pkiEventID"
        :title="event.sEventName"
        :description="event.sDescription"
        :image="event.sImageUrl"
        :link="event.sZoomUrl"
        :startdate="event.dtStartDate"
        :enddate="event.dtEndDate"
        :bootcamp="event.sBootcampName"
        :bootcampid="event.fkiBootcampID"
        @fetch-events="fetchData"
      />

      <section />
    </section>
  </div>
</template>

<script>
import EventCard from '~/components/admin/EventCard.vue'
import { getEvents } from '~/utils/graphql'
export default {
  name: 'AdminEvents',
  components: { EventCard },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let events = []
    try {
      const response = await $axios.$post('graphql', { query: getEvents() })
      events = response.data.events
    } catch (e) {
      console.log(e.message)
    }

    return { events }
  },
  data () {
    return {
      events: []
    }
  },
  head () {
    return {
      title: 'Events',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Events'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Events')
  },
  methods: {
    async fetchData () {
      let events = []
      try {
        const response = await this.$axios.$post('graphql', { query: getEvents() })
        events = response.data.events
      } catch (e) {
        console.log(e.message)
      }
      this.events = events
    }
  }
}
</script>

<style scoped>
</style>
