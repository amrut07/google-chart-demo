// get the chart data and commit in vuex
const actions = ({ chartService }) => {
    return {
      async getLineChart ({ commit }) {
        const chartData =  await chartService.getChartData()
        commit('setLineChart', chartData)
      },
    }
  }
  
  export default actions
  