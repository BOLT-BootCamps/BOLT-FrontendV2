<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Bootcamps
      </h1>
      <section class="flex flex-row">
        <section class="flex flex-row ml-auto text-white space-x-2 items-center">
          <NuxtLink class="bg-blue-500 px-2 py-1 rounded-md" to="/admin/addBootcamp">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Bootcamp
          </NuxtLink>
        </section>
      </section>
      <bootcamp-card
        v-for="(bootcamp, ind) in bootcamps"
        :key="ind"
        :bootcampid="bootcamp.pkiBootcampID"
        :title="bootcamp.sBootcampName"
        :description="bootcamp.sDescription"
        :image="bootcamp.sImageUrl"
        :link="bootcamp.sDefaultZoomUrl"
        :startdate="bootcamp.dtStartDate"
        :enddate="bootcamp.dtEndDate"
        :applicants="bootcamp.applicants"
        @fetch-bootcamps="fetchData"
      />
    </section>
  </div>
</template>

<script>
import BootcampCard from '~/components/admin/BootcampCard.vue'
import { getBootcamps } from '~/utils/graphql'
export default {
  name: 'AdminBootcamps',
  components: { BootcampCard },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let bootcamps = []

    try {
      const response = await $axios.$post('graphql', { query: getBootcamps() })
      bootcamps = response.data.bootcamps
      bootcamps = bootcamps.filter(function (currentElement) {
        return currentElement.pkiBootcampID > 0
      })
    } catch (e) {
      console.log(e.message)
    }

    return { bootcamps }
  },
  data () {
    return {
      bootcamps: []
    }
  },

  head () {
    return {
      title: 'Bootcamps',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Bootcamps'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Bootcamps')
  },
  methods: {
    async fetchData () {
      let bootcamps = []
      try {
        const response = await this.$axios.$post('graphql', { query: getBootcamps() })
        bootcamps = response.data.bootcamps
        bootcamps = bootcamps.filter(function (currentElement) {
          return currentElement.pkiBootcampID > 0
        })
      } catch (e) {
        console.log(e.message)
      }
      this.bootcamps = bootcamps
    }
  }
}
</script>

<style scoped>
</style>
