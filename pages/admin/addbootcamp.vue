<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Add Bootcamp
      </h1>
      <section class="grid grid-cols-2 gap-4 bg-gray-50 relative w-full p-4 shadow-md">
        <section>
          <h1 class="sort">
            Bootcamp Title
          </h1>
          <input v-model="bootcamp.sBootcampName" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Zoom Link
          </h1>
          <input v-model="bootcamp.sDefaultZoomUrl" placeholder="Default Zoom Link" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Bootcamp Description
          </h1>
          <textarea v-model="bootcamp.sDescription" rows="4" cols="50" class="input-text" />
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
          <input v-model="bootcamp.sImageUrl" type="text" class="input-text">
        </section>
        <section class="absolute bottom-4 right-4 text-white">
          <button class="bg-green-500 px-2 py-2 rounded-md inline-block" @click="submitBootcamp()">
            Submit
          </button>
          <NuxtLink class="bg-red-500 px-2 py-2 rounded-md inline-block" to="/admin/bootcamps">
            Discard
          </NuxtLink>
        </section>
      </section>
      <h1 class="sort">
        Preview:
      </h1>
      <bootcamp-card
        :title="bootcamp.sBootcampName"
        :description="bootcamp.sDescription"
        :image="bootcamp.sImageUrl"
        :link="bootcamp.sDefaultZoomUrl"
        :startdate="bootcamp.dtStartDate"
        :enddate="bootcamp.dtEndDate"
        :applicants="100"
      />
      <section />
    </section>
  </div>
</template>

<script>
import BootcampCard from '~/components/admin/BootcampCard.vue'
import RangePicker from '~/components/RangePicker.vue'
import { addBootcamp } from '~/utils/graphql'
export default {
  name: 'AdminAddBootcamp',
  components: { BootcampCard, RangePicker },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      bootcamp:
        {
          sBootcampName: '',
          sDescription: '',
          dtStartDate: new Date().toISOString(),
          dtEndDate: new Date().toISOString(),
          sImageUrl: '',
          sDefaultZoomUrl: ''
        },
      submitted: false
    }
  },
  head () {
    return {
      title: 'AddBootcamp',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT Add Bootcamp'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Bootcamps')
  },
  methods: {
    async submitBootcamp () {
      if (this.submitted) {
        return
      }
      this.submitted = true
      try {
        await this.$axios.$post('graphql',
          {
            query: addBootcamp(),
            variables: {
              ...this.bootcamp,
              dtStartDate: new Date(this.bootcamp.dtStartDate).toISOString(),
              dtEndDate: new Date(this.bootcamp.dtEndDate).toISOString()
            }
          })

        this.$router.push({
          path: '/admin/bootcamps'
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
