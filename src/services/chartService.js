import { chartData } from '../data/fake-data'
class chartService {

  // get the chart data from API service for now accessing the data from static file
  getChartData () {
    const data = chartData
    return data
  }
}

export default new chartService()
