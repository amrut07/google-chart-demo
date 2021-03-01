import actions from './actions'
import mutations from './mutations'
import state from './state'

export default ({ chartService, namespaced = true } = {}) => {
  return {
    namespaced,
    state,
    actions: actions({ chartService }),
    mutations,
  }
}
