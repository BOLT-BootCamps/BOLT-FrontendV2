<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Add Application
      </h1>
      <section class="grid grid-cols-2 gap-4 bg-gray-50 relative w-full p-4">
        <section>
          <h1 class="sort">
            Event Title
          </h1>
          <input v-model="application.title" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Event Description
          </h1>
          <textarea v-model="application.description" rows="4" cols="50" class="input-text" />
        </section>
        <section>
          <h1 class="sort">
            Form Link
          </h1>
          <input v-model="application.form" type="text" class="input-text">
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
          <input v-model="application.image" type="text" class="input-text">
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
      <application-card
        :title="application.title"
        :description="application.description"
        :image="application.image"
        :datetime="application.datetime"
        :form="application.form"
      />
      <section />
    </section>
  </div>
</template>

<script>
import ApplicationCard from '~/components/user/ApplicationCard.vue'
import RangePicker from '~/components/RangePicker.vue'
export default {
  name: 'AdminAddApplication',
  components: { ApplicationCard, RangePicker },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      application:
        {
          title: '',
          link: '',
          description: '',
          datetime: Date.now(),
          form: '',
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
    submitEvent () {
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
