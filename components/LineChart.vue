<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['data', 'options'],
  data () {
    return {
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
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
    this.renderChart(this.data, { ...this.lineChartOptions, ...this.options })
  }
}
</script>
