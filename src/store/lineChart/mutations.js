const mutations = {
  setLineChart (state, payload) {
    state.xaxis = payload.xaxis
    state.chartData = payload.records
  }
}

export default mutations
