<template>
  <div class="p-8">
    <section class="flex flex-col space-y-4">
      <div class="flex flex-row">
        <h1 class="title pb-4">
          {{ event.sEventName }}
        </h1>
        <div class="flex bg-green-500 text-white ml-auto items-center rounded-sm py-1 px-16">
          <p class="text-2xl">
            UPCOMING
          </p>
        </div>
      </div>
      <section class="event-full">
        <div>
          <img :src="event.sImageUrl" alt="Event Image" class="w-96 object-cover h-full rounded-lg bg-gray-400">
        </div>
        <div>
          <div class="event-title">
            {{ event.sBootcampName }}
          </div>
          <div>
            {{ event.sZoomUrl }}
          </div>
          <div class="event-title">
            {{ new Date(event.dtStartDate).toDateString() }}
            -
            {{ new Date(event.dtEndDate).toDateString() }}
          </div>
          <div class="event-title">
            {{ formatAMPM(event.dtStartDate) }}
            -
            {{ formatAMPM(event.dtEndDate) }}
          </div>
          {{ event.sDescription }}
          <div class="flex absolute bottom-4 space-x-2">
            <button class="border-2 border-black rounded-md hover:bg-gray-500 py-2 px-4 hover:text-white transition-colors font-medium">
              Add to Calendar
            </button>
            <button class="border-2 border-black rounded-md hover:bg-gray-500 py-2 px-4 hover:text-white transition-colors font-medium">
              Share on Facebook
            </button>
            <button class="border-2 border-black rounded-md hover:bg-gray-500 py-2 px-4 hover:text-white transition-colors font-medium">
              Share on Instagram
            </button>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <BarChart :data="barChartData" :options="barChartOptions" :height="400" :width="400" />
      </section>
    </section>
  </div>
</template>

<script>
import { formatAMPM } from '~/utils/date'
import { getEvent, getBootcampNames } from '~/utils/graphql'
import BarChart from '~/components/BarChart.vue'

export default {
  name: 'AdminViewEvents',
  components: { BarChart },
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

    let event = {}
    try {
      const response = await $axios.$post('graphql',
        {
          query: getEvent(),
          variables: { id: parseInt(params.eventid) }
        })
      event = response.data.event
    } catch (e) {
      console.log(e.message)
    }
    return { bootcamps, event }
  },
  data () {
    return {
      event: {
        sEventName: '',
        sDescription: '',
        sImageUrl: '',
        sBootcampName: '',
        sZoomUrl: '',
        dtStartDate: new Date().toISOString(),
        dtEndDate: new Date().toISOString()
      },
      bootcamps: [],
      submitted: false,
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03'
        ],
        datasets: [
          {
            label: 'Visualizaciones',
            data: [2, 1, 16, 3, 4, 5, 0, 0, 4, 12, 2],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 255, 0, 1)',
            borderWidth: 2
          }
        ]
      }

    }
  },
  head () {
    return {
      title: 'View Event',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'BOLT View Event'
        }
      ]
    }
  },
  mounted () {
    this.$nuxt.$emit('current-link', 'Events')
  },
  methods: {
    formatAMPM
  }
}
</script>

<style scoped>
.input-text {
  @apply p-2 border rounded-md border-gray-400 bg-white;
}

.event-full {
  @apply h-full bg-white rounded-lg flex flex-row shadow-md p-4 space-x-4 relative;
  width: 1000px;
  min-height: 24rem;
}

.event-title {
  @apply font-semibold text-2xl
}

.event-glance {
  @apply rounded-lg bg-lightblue-800 w-56;
  @apply text-gray-50 flex flex-col p-4;
}

</style>
