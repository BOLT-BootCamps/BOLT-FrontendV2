<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Calendar
      </h1>
      <section>
        <Calendar :attributes="toCalendar" />
      </section>
    </section>
  </div>
</template>

<script>
import Calendar from '~/components/Calendar.vue'
import { getEvents, getApplications, getBootcamps } from '~/utils/graphql'
export default {
  name: 'CalendarPage',
  components: { Calendar },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let events = []
    let applications = []
    let bootcamps = []
    try {
      const response = await $axios.$post('graphql', { query: getEvents() })
      events = response.data.events
    } catch (e) {
      console.log(e.message)
    }

    try {
      const response = await $axios.$post('graphql', { query: getApplications() })
      applications = response.data.applications
    } catch (e) {
      console.log(e.message)
    }

    try {
      const response = await $axios.$post('graphql', { query: getBootcamps() })
      bootcamps = response.data.bootcamps
    } catch (e) {
      console.log(e.message)
    }

    return { events, applications, bootcamps }
  },
  data () {
    return {
      events: [],
      applications: [],
      bootcamps: [],
      currentView: true
    }
  },
  head () {
    return {
      title: 'Calendar',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Calendar'
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

      for (let i = 0; i < this.applications.length; i++) {
        const application = this.applications[i]
        const dateItem = {
          key: application.pkiApplicationID,
          customData: {
            title: application.sApplicationName,
            class: 'bg-red-500 text-white',
            link: `/admin/applications/${application.pkiApplicationID}`
          },
          dates: { start: new Date(application.dtStartDate), end: new Date(application.dtEndDate) }
        }
        calendar.push(dateItem)
      }

      for (let i = 0; i < this.bootcamps.length; i++) {
        const bootcamp = this.bootcamps[i]
        const dateItem = {
          key: bootcamp.pkiBootcampID,
          customData: {
            title: bootcamp.sBootcampName,
            class: 'bg-green-500 text-white',
            link: `/admin/bootcamps/${bootcamp.pkiBootcampID}`
          },
          dates: { start: new Date(bootcamp.dtStartDate), end: new Date(bootcamp.dtEndDate) }
        }
        calendar.push(dateItem)
      }

      return calendar
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Calendar')
  },
  methods: {}
}
</script>

<style scoped>
</style>
