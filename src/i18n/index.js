import Vue from "vue"
import VueI18n from "vue-i18n"

import zh from './lang/zh';
import ru from './lang/ru';
import zhTw from './lang/zh-tw';
import en from './lang/en';

Vue.use(VueI18n);

export default  new VueI18n({
    locale: localStorage.getItem('lang') || 'ru',
    messages : {
        zh,
        ru,
        zhTw,
        en,
    }
})