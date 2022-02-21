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
        :title="event.name"
        :description="event.description"
        :image="event.image"
        :link="event.link"
        :datetime="event.start_date"
        :bootcamp="event.bootcamp"
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
      events = await $axios.$post('graphql', { query: getEvents() }).data
    } catch (e) {
      console.log(e.message)
    }

    return { events }
  },
  data () {
    return {
      events: [
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          datetime: Date.now(),
          bootcamp: 'McGill',
          link: 'https://zoom.us/',
          image: 'https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo='
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          link: 'https://zoom.us/',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          link: 'https://zoom.us/',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          link: 'https://zoom.us/',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          link: 'https://zoom.us/',
          image: 'image'
        }
      ]
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
  }
}
</script>

<style scoped>
</style>
