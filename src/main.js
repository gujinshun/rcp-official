import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios/index'
import './assets/css/common.scss'
const copy = () => import(/* webpackChunkName: "ewm" */ './components/copy');
import i18n from './i18n/'


Vue.component('copy', copy);
Vue.config.productionTip = false;

import { mapState } from "vuex";
Vue.mixin({
    computed: {
        ...mapState(["uid", 'basicInfo'])
    },
    methods : {
        loginInfo() {
            this.axios({
                url : "/service/loginInfo",
                params : {
                    uid : this.uid,
                },
            }).then(res => {
                this.$store.commit("userData", res.data);
                // console.log(res);
                if(/invite/g.test(location.href) && !!!res.data.uid){
                    this.$store.commit("isregister", true);
                };
            }).catch(err => {
                this.$store.commit("userData", {});
                // console.log(err.message);
                if(/invite/g.test(location.href)){
                    this.$store.commit("isregister", true);
                };
            });
        },
        getBasicInfo() {
            this.axios({
                url : "/service/basicInfo",
                data : {
                },
            }).then(res => {
                this.$store.commit("basicInfo", res.data);
                // console.log(res);
                setTimeout(() => {
                    this.getBasicInfo();
                }, 3000);
            }).catch(err => {
                this.$store.commit("basicInfo", {});
                console.log(err.message);
                setTimeout(() => {
                    this.getBasicInfo();
                }, 3000);
            });
        },
    }
});


new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
