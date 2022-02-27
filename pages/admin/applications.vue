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
        :title="application.sApplicationName"
        :description="application.sDescription"
        :image="application.sImageUrl"
        :datetime="application.dtStartDate"
        :form="application.sFormUrl"
        :applicants="application.iNumApplicants"
      />

      <section />
    </section>
  </div>
</template>

<script>
import ApplicationCard from '~/components/admin/ApplicationCard.vue'
import { getApplications } from '~/utils/graphql'
export default {
  name: 'AdminApplications',
  components: { ApplicationCard },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let applications = []
    try {
      const response = await $axios.$post('graphql', { query: getApplications() })
      applications = response.data.applications
    } catch (e) {
      console.log(e.message)
    }
    console.log(applications)
    return { applications }
  },
  data () {
    return {
      applications: [
        {
          sApplicationName: 'McGill Application',
          sDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          dtStartDate: Date.now(),
          iNumApplicants: 31,
          sFormUrl: 'form link',
          sImageUrl: 'https://media.istockphoto.com/photos/man-speaking-at-a-business-conference-picture-id499517325?b=1&k=20&m=499517325&s=170667a&w=0&h=jMCaZov25c5VR1CP-4axUdJPEKSpBWbzzWAubQS3-oo='
        },
        {
          sApplicationName: 'UBC Application',
          sDescription: 'Lorem ipsum',
          dtStartDate: Date.now(),
          iNumApplicants: 30,
          sFormUrl: 'form link',
          sImageUrl: 'image'
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
