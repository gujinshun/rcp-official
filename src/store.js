import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        uid: "",
        buyRecord: false,
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
        profitRecord:false,
        aldAddressState:false,
        userData : {},
        basicInfo : {}
    },
    mutations: {
        aldAddressState(state, val) {
            state.aldAddressState = val;
        },
        profitRecord(state, val) {
            state.profitRecord = val;
        },
        buyRecord(state, val) {
            state.buyRecord = val;
        },
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
