import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uid: "",
        login: false,
        invite: false,
        isregister: false,
        registersucess:false,
        tranPaswwordshow:false,
        isfindpaw:false,
        next: false,
        changecoin:false,
        coinRecode:false,
        personMsg:false,
        userData : {},
        basicInfo : {}
    },
    mutations: {
        uid(state, val) {
            state.uid = val;
        },
        basicInfo(state, val) {
            state.basicInfo = val;
        },
        invite(state, val) {
            state.invite = val;
        },
        userData(state, val) {
            state.userData = val;
        },
        personMsg(state, val) {
            state.personMsg = val;
        },
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
