<template>
    <section class="body">
        <div class="left-nav">
            <div class="nav-logo">
                <img src="./../assets/images/list_logo.png" alt="">
            </div>
            <div class="nav-item"
                 v-for="(item, index) in navList"
                 :key="index"
                 :class="{'nav-active': index == activeIndex}"
                 @click="openSwiper(index)">
                <span>{{item.name}}</span>
                <span class="right">></span>
            </div>
        </div>
        <!--<animation-home2></animation-home2>-->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-1">
                    <!--<animation-home></animation-home>-->
                    <div class="main-container">
                        <div class="main-content">
                            <div class="logo">
                                <img src="./../assets/images/hone_middle_logo.png" alt="">
                            </div>
                            <div class="content">
                                <div class="progress">
                                    <div class="progress-bar">
                                    </div>
                                </div>
                                <div class="coin-detail">
                                    <span>剩余：{{basicInfo.sum ? (basicInfo.sum - basicInfo.num) : '-'}} ALD</span>
                                    <span>{{basicInfo.sum ? Math.floor(basicInfo.num / basicInfo.sum) : '-'}}%</span>
                                </div>
                                <div class="buy-num">
                                    <input type="text" placeholder="输入购买数量" v-model="amount" />
                                    <button :disabled="!(Number(amount) > 0)" @click="exchange">购买</button>
                                </div>
                                <div class="percent">
                                    <span>≈ {{Number(amount) > 0 && basicInfo.price ? amount / ( 1 / basicInfo.price) : '-'}} ALD</span>
                                    <span>1BTC : {{basicInfo.sum ? basicInfo.price : '-'}} ALD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide bg-2">
                    <about />
                </div>
                <div class="swiper-slide bg-3">
                    <plan />
                </div>
                <div class="swiper-slide">
                    <tech-intro />
                </div>
                <div class="swiper-slide ">
                    <progress-intro />
                </div>
                <div class="swiper-slide ">
                    <whitebook />
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 登录/注册 -->
        <div class="user-box">
             <div v-if="!userData.uid" @click="loginshow()"> 登录</div> <span v-if="!userData.uid">｜</span> <div v-if="!userData.uid"  @click="registershow"> 注册</div>
             <div v-if="userData.uid" @click="userMenu = !userMenu" class="user-center">{{userData.mail}}</div>
        </div>
        <!-- 个人中心 -->
        <div class="user-coin-detail" v-show="userMenu">
            <div class="user-coin">
                <p>BTC 余额：{{userData.assets && userData.assets.btc || 0}}</p>
                <p>ALD 余额：{{userData.assets && userData.assets.ald || 0}}</p>
            </div>
            <div class="user-index">
                <!--<p>账户信息 <span> > </span></p>-->
                <p @click="$store.commit('invite', true)">邀请码 <span> > </span></p>
                <p @click="$store.commit('changecoin', true)">充币地址 <span> > </span></p>
                <!--<p>充币记录 <span> > </span></p>-->
                <!--<p>买入记录 <span> > </span></p>-->
                <!--<p>退出 <span> > </span></p>-->
            </div>
        </div>
        <!-- 语言选择 -->
        <!--<div class="lang-box" @click="showLang = !showLang">-->
            <!--中文 <i></i>-->
        <!--</div>-->
        <!--<div class="lang-box-content" v-show="showLang">-->
            <!--<p v-for="item in ['中文', 'English', 'русский язык']"-->
               <!--:key="item"-->
               <!--@click="showLang = !showLang">-->
                <!--{{item}}-->
            <!--</p>-->
        <!--</div>-->
        <div class="">
            <login  v-if="login" ></login>
            <register  v-if="isregister" ></register>
            <registerSucess v-if="registersucess" ></registerSucess>
            <tranPaswword v-if='tranPaswwordshow'></tranPaswword>
            <forgetPass v-if="isfindpaw"></forgetPass>

            <changeCoin v-if="changecoin"></changeCoin>

            <coinRecord v-if="coinRecode"></coinRecord>
            <personMsg v-if="personMsg"></personMsg>

            <invite v-if="invite"></invite>
        </div>
    </section>
</template>

<script>
    import { mapState } from "vuex";
    import Swiper from "swiper";
    import "swiper/css/swiper.min.css";
    import about from "./about.vue";
    import techIntro from "./tech-intro.vue";
    import plan from "./plan";
    import teamIntro from "./team-intro";
    import whitebook from "./whitebook";
    import bonus from "./bonus";
    import progressIntro from "./progress-intro";
    import login from "./user/login.vue";
    import register from "./user/register.vue";
    import registerSucess from "./user/registerSucess.vue";
    import tranPaswword from "./user/tranPaswword.vue";
    import forgetPass from "./user/forgetPass.vue";
    import changeCoin from "./user/changeCoin.vue";
    import coinRecord from "./user/coinRecord.vue";
    import personMsg from "./user/personMsg.vue";
    import AnimationHome from "../components/animation-home";
    import AnimationHome2 from "../components/animation-home2";
    import Invite from "./user/invite";


    export default {
        name: "home",
        components: {
            Invite,
            AnimationHome2,
            AnimationHome,
            register,
            about,
            techIntro,
            plan,
            teamIntro,
            whitebook,
            bonus,
            progressIntro,
            login,
            registerSucess,
            tranPaswword,
            forgetPass,
            changeCoin,
            coinRecord,
            personMsg,
        },
        data() {
            return {
                swiper: null,
                amount : "",
                userMenu : false,
                navList: [
                    {
                        name: "首页",
                        index: "home"
                    },
                    {
                        name: "关于ALD",
                        index: "about"
                    },
                    {
                        name: "ALD全球战略计划",
                        index: "plan"
                    },
                    {
                        name: "技术介绍",
                        index: "tech-intro"
                    },
                    {
                        name: "发展历程",
                        index: "progress"
                    },
                    {
                        name: "白皮书",
                        index: "whitebook"
                    },
                ],
                showLang: false,
                activeIndex: 0
            };
        },
        computed: {
            ...mapState(["login","isregister",'registersucess','tranPaswwordshow','isfindpaw','changecoin','coinRecode','personMsg', 'userData', 'invite', 'basicInfo'])
        },
        mounted() {
            this.getBasicInfo();
            if(window.innerWidth > 1024){
                this.swiper = new Swiper(".swiper-container", {
                    direction: "vertical",
                    slidesPerView: 1,
                    spaceBetween: 0,
                    mousewheel: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    }
                });
            };
        },
        methods: {
            exchange() {
                if(!this.userData.uid){
                    this.$store.commit("login",!this.login);
                    return;
                }
                if(this.userData.assets && this.amount <= this.userData.assets.btc){
                    alert("BTC余额不足");
                    return;
                }
                this.axios({
                    url : "/service/exchange",
                    params : {
                        uid : this.uid,
                        amount : this.amount,
                    },
                }).then(res => {
                    this.$store.commit("userData", this.res.data);
                    console.log(res);
                }).catch(err => {
                    console.log(err.message);
                });
            },
            loginshow() {
                this.$store.commit("login",!this.login);
            },
            registershow(d) {
                this.$store.commit("isregister",!this.isregister);
            },
            toLogin() {
                this.$router.push({ name: "toLogin" });
            },
            openSwiper(index) {
                this.activeIndex = index;
                this.swiper.slideTo(index, 1000, false);
            }
        }
    };
</script>
<style scoped lang="scss">
    .user-box{
        div{
            display: inline-block;
            cursor: pointer;
        }
        .user-center{
            i{
                background-image: url('./../assets/images/portrait_icon.png');
                background-size: 100% 100%;
                display: inline-block;
                width: 12px;
                height: 12px;
                vertical-align: middle;
                margin-right: 8px;
            }
        }
    }
    .user-coin-detail{
        background:rgba(0,0,0,1);
        border:3px solid rgba(0,255,0,1);
        width: 240px;
        position: absolute;
        right: 164px;
        top: 90px;
        padding: 24px 0;
        z-index: 100;
        font-size: 16px;
        .user-coin{

            padding: 0 24px;
            p{
                margin-bottom: 24px;
            }
            border-bottom: 2px solid rgba(0,255,0,1)
        }
        .user-index{
            padding: 0 24px;
            margin-top: 12px;
            p{
                padding: 12px 0;
                overflow: hidden;
                span{
                    float: right;
                }
            }
        }
    }
    .left-nav {
        width: 37.6%;
        /*padding: 90px 0px 74px 90px;*/
        padding-left: 3%;
        padding-right: 15%;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 100;
        background-image: url("./../assets/images/home_bj.png");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .nav-logo {
            max-width: 124px;
            /*margin-bottom: 152px;*/
            img {
                width: 100%;
            }
        }
        .nav-item {
            font-size: 28px;
            /*margin-bottom: 30px;*/
            cursor: pointer;
            /*max-width: 400px;*/
            display: flex;
            justify-content: space-between;
            padding: 16px;
            width: 100%;
        }
        .nav-active{
            background-image: url("./../assets/images/choice_colour.png");
            background-size: 100% 100%;
        }
    }

    .main-container {
        text-align: left;
        margin-left: 20%;
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .main-content{
            /*position: absolute;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            left: 50%;*/
        }
        .logo {
            max-width: 468px;
            width: 100%;
            // margin-top: 277px;
            text-align: center;
            img {
                width: 100%;
            }
        }
        .content{
            width: 100%;
            /*margin-left: 31px;*/
        }
        .progress {
            background-image: url("./../assets/images/hone_progres_colour.png");
            background-size: 100% 100%;

            margin-top: 23px;

            .progress-bar {
                height: 8px;
                background-color: #00ff00;
                width: 300px;
                opacity: 0.5;
            }
        }
        .coin-detail {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-top: 10px;
            span {
                font-size: 14px;
                color: #628d62;
            }
        }
        .buy-num {
            margin-top: 20px;
            input {
                border: 1px solid #00ff00;
                background-color: #fff;
                color: #628d62;
                padding: 14px;
                /*width: 275px;*/
                width: 70%;
                display: block;
                float: left;
            }
            button {
                background-color: #00ff00;
                color: #000;
                padding: 15px 0;
                appearance: none;
                border: none;
                text-align: center;
                box-sizing: border-box;
                width: 30%;
                cursor: pointer;
                display: block;
                float: left;
                &[disabled]{
                    cursor: default;
                    background-color: rgba(0, 255, 0, 0.5);
                    color: #333;
                }
            }
        }
        .percent {
            font-size: 12px;
            color: #00ff00;
            padding-top: 10px;
            clear: left;
            display: flex;
            justify-content: space-between;
        }
    }
    .swiper-container,
    .body {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 10;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        background-size: 100% 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.6);
        /*background-image: url("./../assets/images/home_technology_bj.png");*/
    }
    .bg-1{
        background-image: url("./../assets/images/home_earth_bj.png");
    }
    .bg-2{
        background-image: url('./../assets/images/home_about_bj.png');
    }
    .bg-3{
        background-image: url("./../assets/images/home_global_bj.png");
    }
    .user-box {
        font-size: 20px;
        color: #000;
        padding: 10px 20px;
        position: absolute;
        right: 0;
        top: 45px;
        z-index: 100;
        background-color: #00ff00;
    }
    .lang-box {
        padding: 10px 20px;
        font-size: 20px;
        color: #00ff00;
        border-left: 1px solid;
        border-top: 1px solid;
        border-bottom: 1px solid;
        position: absolute;
        right: 0;
        bottom: 45px;
        z-index: 100;
        cursor: pointer;
        i {
            width: 8px;
            height: 8px;
            display: inline-block;
            background-image: url("./../assets/images/triangle_green.png");
            background-size: 100% 100%;
            margin-left: 3px;
        }
    }
    .lang-box-content {
        width: 240px;
        border: 2px solid rgba(0, 255, 0, 1);
        position: absolute;
        right: 104px;
        bottom: 45px;
        z-index: 100;
        padding: 12px 0;
        color: #00ff00;
        font-size: 16px;
        background-color: #000;
        p {
            line-height: 40px;
            padding: 0 24px;
            cursor: pointer;
        }
        p:hover {
            opacity: 0.3;
            background:rgba(0,255,0,1);
            color: #fff;
        }
    }
</style>
<style>
    .swiper-container-vertical > .swiper-pagination-bullets {
        right: 30px;
    }
    .swiper-pagination-bullet {
        width: 8px;
        height: 8px;
        border: 1px solid rgba(0, 255, 0, 1);
        background-color: transparent;
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        background: rgba(0, 255, 0, 1);
    }
</style>
<style scoped lang="scss">
    @media screen and (max-width: $mediaWidth){
        .bg-1{
            background-size: auto 100%;
            background-position: right bottom;
        }
        .bg-2{
            background-size: auto 100%;
            background-position: center center;
        }
        .bg-3{
            background-size: auto 100%;
            background-position: top center;
        }
        .user-box{
            font-size: 14px;
            top: 15px;
            padding: 8px 10px;
        }
        .left-nav{
            width: 100%;
            position: fixed;
            left: 0;
            right: 0;
            background: #000;
            background: rgba(0, 0, 0, 0.9);
            padding-top: 5px;
            padding-right: 3%;
            transform: translateX(-100%);
            .nav-logo{
                /*display: none;*/
                width: 100px;
            }
            .nav-item{
                font-size: 18px;
            }
        }
        .swiper-slide > div{
            margin-left: 0 !important;
        }
        .main-container {
            .main-content{
                width: 80%;
            }
        }
        .swiper-container{
            /*overflow-y: visible;*/
        }
        .swiper-wrapper{
            display: block;
            overflow-y: scroll;
            overflow-x: hidden;
        }
        .swiper-slide{
            min-height: 100%;
            height: auto;
        }
    }
</style>

