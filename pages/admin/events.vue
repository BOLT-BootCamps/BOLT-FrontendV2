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
          <select id="sort" v-model="sort" name="sort" class="dropdown">
            <option value="Date">
              Date
            </option>
            <option value="Alphabetical">
              Alphabetical
            </option>
          </select>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <p class="sort">
            Bootcamp:
          </p>
          <select id="sort" v-model="bootcampFilter" name="sort" class="dropdown">
            <option value="" class="input-text">
              All Bootcamps
            </option>
            <option v-for="(bootcamp, id) in bootcamps" :key="id" :value="bootcamp.pkiBootcampID" class="input-text">
              {{ bootcamp.sBootcampName }}
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
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block" @click="currentView = !currentView">
            <svg
              v-if="currentView == true"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </section>
      </section>
      <section v-if="currentView === true" class="flex flex-col space-y-4">
        <event-card
          v-for="(event, ind) in sortEvents"
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
      </section>
      <section v-else>
        <Calendar :attributes="toCalendar" />
      </section>

      <section />
    </section>
  </div>
</template>

<script>
import EventCard from '~/components/admin/EventCard.vue'
import Calendar from '~/components/Calendar.vue'
import { getEvents, getBootcampNames } from '~/utils/graphql'
export default {
  name: 'AdminEvents',
  components: { EventCard, Calendar },
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
    let bootcamps = []
    try {
      const response = await $axios.$post('graphql', { query: getBootcampNames() })
      bootcamps = response.data.bootcamps
    } catch (e) {
      console.log(e.message)
    }
    return { events, bootcamps }
  },
  data () {
    return {
      events: [],
      sort: 'Date',
      bootcampFilter: '',
      bootcamps: [],
      currentView: true
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
  computed: {
    toCalendar () {
      const calendar = []
      for (let i = 0; i < this.events.length; i++) {
        const event = this.events[i]
        const dateItem = {
          key: event.pkiEventID,
          customData: {
            title: event.sEventName,
            class: 'bg-blue-500 text-white',
            link: `/admin/events/${event.pkiEventID}`
          },
          dates: { start: new Date(event.dtStartDate), end: new Date(event.dtEndDate) }
        }
        calendar.push(dateItem)
      }

      return calendar
    },
    sortEvents () {
      let newEvents = this.events
      if (this.sort === 'Date') {
        newEvents = newEvents.sort((a, b) => {
          if (a.dtStartDate === b.dtStartDate) {
            return (a.dtEndDate > b.dtEndDate) ? 1 : -1
          }
          return (a.dtStartDate > b.dtStartDate) ? 1 : -1
        })
      } else if (this.sort === 'Alphabetical') {
        newEvents = newEvents.sort((a, b) => ((a.sEventName > b.sEventName) ? 1 : -1))
      }

      if (this.bootcampFilter !== '') {
        newEvents = newEvents.filter((el) => {
          if (el.fkiBootcampID === this.bootcampFilter) {
            return true
          }
          return false
        })
      }
      return newEvents
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
