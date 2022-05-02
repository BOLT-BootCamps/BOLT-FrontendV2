<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  props: ['data', 'options'],
  data () {
    return {
      scatterChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, { ...this.scatterChartOptions, ...this.options })
  }
}
</script>
