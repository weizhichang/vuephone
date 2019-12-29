import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:'广州'
  },
  mutations: {
    mutationscity(state,n){
      return state.city = n;
    }
  },
  actions: {
  },
  modules: {
  }
})
