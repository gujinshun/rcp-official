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
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide bg-1">
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
                              <span>剩余：850032.00 ALD</span>
                              <span>80%</span>
                          </div>
                          <div class="buy-num">
                              <input type="text" placeholder="输入购买数量" />
                              <button>购买ALD</button>
                          </div>
                          <div class="percent">
                              BTC兑换比例：1:4000
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
                <div class="swiper-slide">
                    <team-intro />
                </div>
                <div class="swiper-slide ">
                    <progress-intro />
                </div>
                <div class="swiper-slide ">
                    <whitebook />
                </div>
                <div class="swiper-slide ">
                    <bonus />
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 登录/注册 -->
        <div class="user-box">
            <div @click="loginshow()"> 登录</div>｜<div  @click="registershow"> 注册 ></div>
            <!-- <div v-show = "!login" class="user-center"><i></i>个人中心 </div> -->
        </div>
        <!-- 个人中心 -->
        <div class="user-coin-detail" v-show="false">
          <div class="user-coin">
            <p>BTC余额：0.000000</p>
            <p>ADL余额：0.000000</p>
          </div>
          <div class="user-index">
            <p>账户信息 <span> > </span></p>
            <p>邀请码 <span> > </span></p>
            <p>充币地址 <span> > </span></p>
            <p>充币记录 <span> > </span></p>
            <p>买入记录 <span> > </span></p>
            <p>退出 <span> > </span></p>
          </div>
        </div>
        <!-- 语言选择 -->
        <div class="lang-box" @click="showLang = !showLang">
            中文 <i></i>
        </div>
        <div class="lang-box-content" v-show="showLang">
            <p v-for="item in ['中文', 'English', 'русский язык']"
               :key="item"
               @click="showLang = !showLang">
                {{item}}
            </p>
        </div>
        <div class="">
            <login  v-show="login" ></login> 
            <register  v-show="isregister" ></register>
            <registerSucess v-show="registersucess" ></registerSucess>
            <tranPaswword v-show='tranPaswwordshow'></tranPaswword>
            <forgetPass v-show="isfindpaw"></forgetPass>
            <changeCoin v-show="changecoin"></changeCoin>
            <coinRecord v-show="coinRecode"></coinRecord>
            <personMsg v-show="personMsg"></personMsg>
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


export default {
  name: "home",
  components: {
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
    personMsg
  },
  data() {
    return {
      swiper: null,
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
          name: "团队介绍",
          index: "team-intro"
        },
        {
          name: "发展历程",
          index: "progress"
        },
        {
          name: "白皮书",
          index: "whitebook"
        },
        {
          name: "推荐奖励",
          index: "bonus"
        }
      ],
      showLang: false,
      activeIndex: 0
    };
  },
  computed: {
        ...mapState(["login","isregister",'registersucess','tranPaswwordshow','isfindpaw','changecoin','coinRecode','personMsg'])
  },
  mounted() {
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
  },
  methods: {
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
        display: inline-block
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
  padding: 90px 0px 74px 90px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 100;
  background-image: url("./../assets/images/home_bj.png");
  background-size: 100% 100%;
  .nav-logo {
    max-width: 124px;
    margin-bottom: 152px;
    img {
      width: 100%;
    }
  }
  .nav-item {
    font-size: 28px;
    margin-bottom: 30px;
    cursor: pointer;
    max-width: 400px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
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
  .main-content{
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }
  .logo {
    width: 468px;
    // margin-top: 277px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .content{
    width: 406px;
    margin-left: 31px;
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
    width: 406px;
    
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
      padding: 9px;
      width: 275px;
    }
    button {
      background-color: #00ff00;
      color: #000;
      padding: 10px 33px;
      appearance: none;
      border: none;
      box-sizing: border-box;
    }
  }
  .percent {
    font-size: 12px;
    color: #00ff00;
    margin-top: 10px;
  }
}
.swiper-container,
.body {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  background-size: 100% 100%;
  width: 100%;
  background-image: url("./../assets/images/home_technology_bj.png");
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

