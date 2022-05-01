<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: ['data', 'options'],
  data () {
    return {
      barChartOptions: {
        responsive: false,
        maintainAspectRatio: true,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1
              },
              gridLines: {
                display: true
              }
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, { ...this.barChartOptions, ...this.options })
  }
}
</script>
