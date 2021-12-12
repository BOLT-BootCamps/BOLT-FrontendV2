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
          <input type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Zoom Link
          </h1>
          <input type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Event Description
          </h1>
          <textarea rows="4" cols="50" class="input-description" />
        </section>
        <section>
          <h1 class="sort">
            Bootcamp
          </h1>
          <input type="text" class="input-text">
        </section>
        <section class="absolute bottom-4 right-4 text-white">
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block">
            Submit
          </button>
          <button class="bg-red-500 px-2 py-2 rounded-md inline-block">
            Discard
          </button>
        </section>
      </section>
      <h1 class="sort">
        Preview:
      </h1>
      <event-card
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
      event:
        {
          title: '',
          description: '',
          datetime: Date.now(),
          bootcamp: '',
          image: ''
        }
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
  }
}
</script>

<style scoped>
.input-text {
  @apply p-2 border rounded-md border-gray-200 bg-white;
}

</style>
