import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    isregister: false,
    registersucess:false,
    tranPaswwordshow:false,
    isfindpaw:false,
    next: false,
    changecoin:false,
    coinRecode:false,
  },
  mutations: {
    coinRecode(state, val) {
      state.coinRecode = val;
    },
    changecoin(state, val) {
      state.changecoin = val;
    },
    next(state, val) {
      state.next = val;
    },
    isfindpaw(state, val) {
      state.isfindpaw = val;
    },
    tranPaswwordshow(state, val) {
      state.tranPaswwordshow = val;
    },
    login(state, val) {
      state.login = val;
    },
    isregister(state, val) {
      state.isregister = val;
    },
    registersucess(state, val) {
      state.registersucess = val;
    },
},
  actions: {

  }
})
