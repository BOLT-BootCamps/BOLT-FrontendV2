<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Applications
      </h1>
      <section class="flex flex-row">
        <section class="flex flex-row ml-auto text-white space-x-2 items-center">
          <NuxtLink class="bg-blue-500 px-2 py-1 rounded-md" to="/admin/addApplication">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Application
          </NuxtLink>
        </section>
      </section>
      <application-card
        v-for="(application, ind) in applications"
        :key="ind"
        :title="application.title"
        :description="application.description"
        :image="application.image"
        :datetime="application.datetime"
        :form="application.form"
        :applicants="application.applicants"
      />

      <section />
    </section>
  </div>
</template>

<script>
import ApplicationCard from '~/components/admin/ApplicationCard.vue'
export default {
  name: 'AdminApplications',
  components: { ApplicationCard },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      applications: [
        {
          title: 'McGill Application',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          datetime: Date.now(),
          applicants: 31,
          form: 'form link',
          image: 'https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo='
        },
        {
          title: 'UBC Application',
          description: 'Lorem ipsum',
          datetime: Date.now(),
          applicants: 30,
          form: 'form link',
          image: 'image'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Applications',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Applications'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Applications')
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
