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
              Not Date
            </option>
          </select>
        </div>
        <div class="flex flex-row items-center space-x-2">
          <p class="sort">
            Event:
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
      </section>
      <event-card
        v-for="(event, ind) in events"
        :key="ind"
        :title="event.title"
        :description="event.description"
        :image="event.image"
        :datetime="event.datetime"
        :bootcamp="event.bootcamp"
      />

      <section />
    </section>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard.vue'
export default {
  name: 'AdminEvents',
  components: { EventCard },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      events: [
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          image: 'https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo='
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
          image: 'image'
        },
        {
          title: 'Microsoft Worksop',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          bootcamp: 'McGill',
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
