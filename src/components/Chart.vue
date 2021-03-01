<template>
  <div class="chart-main">
      <select name="charts" @change="renderAPI($event)">
        <option value="overall_sales"> overall sales </option>
        <option value="overall_orders"> overall orders </option>
        <option value="page_views"> page views </option>
        <option value="page_rec_clickthru_rate"> page rec clickthru rate </option>
      </select>
    <div id="line-chart" style="width: 900px; height: 500px">
    </div>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
import chartConfig from '../config/chartConfig'
export default {
  name: 'Chart',
  data () {
    return {
      chartConfig,
      selectedOption: ''
    }
  },
  async mounted () {
    await this.$store.dispatch('lineChart/getLineChart')
    this.renderAPI()
  },
  computed: {
    ...mapState({
      lineChart: state => state.lineChart
    }),
  },
  methods: {

      renderAPI ($event) {
        this.selectedOption = $event?.target?.value
        // eslint-disable-next-line no-undef
        google.charts.load('current', {'packages':['corechart', 'line']})
        // eslint-disable-next-line no-undef
        google.charts.setOnLoadCallback(this.drawChart)
      },

      // draw the chart as the user selection
      drawChart () {

        const chartConfig = this.chartConfig[this.selectedOption || this.chartConfig.default]
        const arrayData = this.getAxisData(this.lineChart.xaxis ||chartConfig.xLabel, chartConfig.yLabel, chartConfig.yTitle)

        // eslint-disable-next-line no-undef
        var data = new google.visualization.DataTable()
        data.addColumn('string', this.lineChart.xaxis ||chartConfig.xLabel)
        data.addColumn('number', chartConfig.yLabel)
        data.addRows(arrayData)

        // Chart options
        const options = {
          title: chartConfig.title,
          legend: { 
            position: 'top',
            alignment:'center'
          },
          vAxis: {
            minValue: 0,
            gridlines: {
              count: 4,
            },
            minorGridlines: {
              count: 0
            }
          },
          pointsVisible: true
        };

        // eslint-disable-next-line no-undef
        const chart = new google.visualization.LineChart(document.getElementById('line-chart'))
        // eslint-disable-next-line no-undef
        chart.draw(data, options)
      },

      // get the array data according x axis and y axis data
      getAxisData (xLabel, yLabel) {
        const data = this.lineChart.chartData
        let arrayData = data.map((obj) => {
          let values = []
          values.push(obj[xLabel], obj[yLabel])
          return values
        })
        return arrayData
      } 
  }
}
</script>
<style>
.chart-main {
  margin: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
