<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Add Application
      </h1>
      <section class="grid grid-cols-2 gap-4 bg-gray-50 relative w-full p-4">
        <section>
          <h1 class="sort">
            Application Title
          </h1>
          <input v-model="application.sApplicationName" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Application Description
          </h1>
          <textarea v-model="application.sDescription" rows="4" cols="50" class="input-text" />
        </section>
        <section>
          <h1 class="sort">
            Form Link
          </h1>
          <input v-model="application.sFormUrl" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Bootcamp
          </h1>
          <select v-model="application.fkiBootcampID">
            <option disabled value="" class="input-text">
              Please Select
            </option>
            <option v-for="(bootcamp,id) in bootcamps" :key="id" :value="bootcamp.pkiBootcampID" class="input-text">
              {{ bootcamp.sBootcampName }}
            </option>
          </select>
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
          <input v-model="application.sImageUrl" type="text" class="input-text">
        </section>
        <section class="absolute bottom-4 right-4 text-white">
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block" @click="submitApplication()">
            Submit
          </button>
          <NuxtLink class="bg-red-500 px-2 py-2 rounded-md inline-block" to="/admin/applications">
            Discard
          </NuxtLink>
        </section>
      </section>
      <h1 class="sort">
        Preview:
      </h1>
      <application-card
        :title="application.sApplicationName"
        :description="application.sDescription"
        :image="application.sImageUrl"
        :startdate="application.dtStartDate"
        :enddate="application.dtEndDate"
        :form="application.sFormUrl"
      />
      <section />
    </section>
  </div>
</template>

<script>
import ApplicationCard from '~/components/user/ApplicationCard.vue'
import RangePicker from '~/components/RangePicker.vue'
import { addApplication, getBootcampNames } from '~/utils/graphql'
export default {
  name: 'AdminAddApplication',
  components: { ApplicationCard, RangePicker },
  layout: 'admin',
  middleware: 'auth',
  async asyncData ({ params, $axios }) {
    let bootcamps = []
    try {
      const response = await $axios.$post('graphql', { query: getBootcampNames() })
      bootcamps = response.data.bootcamps
    } catch (e) {
      console.log(e.message)
    }
    return { bootcamps }
  },
  data () {
    return {
      application:
        {
          sApplicationName: '',
          sZoomLink: '',
          sDescription: '',
          dtStartDate: new Date().toISOString(),
          dtEndDate: new Date().toISOString(),
          sFormUrl: '',
          sImageUrl: '',
          sBootcampName: '',
          fkiBootcampID: 0
        },
      bootcamps: [],
      submitted: false
    }
  },
  head () {
    return {
      title: 'Add Application',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Add Application'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Applications')
  },
  methods: {
    async submitApplication () {
      if (this.submitted) {
        return
      }
      this.submitted = true
      try {
        await this.$axios.$post('graphql',
          {
            query: addApplication(),
            variables: {
              ...this.application,
              dtStartDate: new Date(this.application.dtStartDate).toISOString(),
              dtEndDate: new Date(this.application.dtEndDate).toISOString()
            }
          })
        this.$router.push({
          path: '/admin/applications/'
        })
      } catch (e) {
        console.log(e.message)
      }
    }
  }
}
</script>

<style scoped>
.input-text {
  @apply p-2 border rounded-md border-gray-400 bg-white;
}

</style>
