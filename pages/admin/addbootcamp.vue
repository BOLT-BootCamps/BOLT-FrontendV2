<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <h1 class="title pb-4">
        Add Bootcamp
      </h1>
      <section class="grid grid-cols-2 gap-4 bg-gray-50 relative w-full p-4">
        <section>
          <h1 class="sort">
            Bootcamp Title
          </h1>
          <input v-model="bootcamp.title" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Zoom Link
          </h1>
          <input v-model="bootcamp.link" type="text" class="input-text">
        </section>
        <section>
          <h1 class="sort">
            Bootcamp Description
          </h1>
          <textarea v-model="bootcamp.description" rows="4" cols="50" class="input-text" />
        </section>
        <section>
          <h1 class="sort">
            Bootcamp
          </h1>
          <input v-model="bootcamp.bootcamp" type="text" class="input-text">
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
          <input v-model="bootcamp.image" type="text" class="input-text">
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
        :title="bootcamp.title"
        :description="bootcamp.description"
        :image="bootcamp.image"
        :datetime="bootcamp.datetime"
        :bootcamp="bootcamp.bootcamp"
      />
      <section />
    </section>
  </div>
</template>

<script>
import BootcampCard from '~/components/user/BootcampCard.vue'
import RangePicker from '~/components/RangePicker.vue'
export default {
  name: 'AdminAddBootcamp',
  components: { BootcampCard, RangePicker },
  layout: 'admin',
  middleware: 'auth',
  data () {
    return {
      bootcamp:
        {
          title: '',
          link: '',
          description: '',
          datetime: Date.now(),
          bootcamp: '',
          image: ''
        }
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
    submitBootcamp () {
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
