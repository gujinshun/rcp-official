import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    isregister: false,
  },
  mutations: {
    login(state, val) {
      state.login = val;
      console.log(state.login,'---state.login')
    },
    isregister(state, val) {
      state.isregister = val;
    }
},
  actions: {

  }
})
