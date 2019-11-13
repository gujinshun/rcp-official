<template>
    <section class="body">
        <div class="left-nav">
            <div class="nav-logo">
                <img src="./../assets/images/list_logo.png" alt="">
            </div>
            <div class="nav-item" v-for="(item, index) in navList" :key="index">
                <span @click="openSwiper(index)">{{item.name}}</span>
                <span class="right">></span>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="main-container">
                        <div class="logo">
                            <img src="./../assets/images/hone_middle_logo.png" alt="">
                        </div>
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
                <div class="swiper-slide">
                    <about />
                </div>
                <div class="swiper-slide">
                    <plan />
                </div>
                <div class="swiper-slide">
                    <tech-intro />
                </div>
                <div class="swiper-slide">
                    <team-intro />
                </div>
                <div class="swiper-slide">
                    <progress-intro />
                </div>
                <div class="swiper-slide">
                    <whitebook />
                </div>
                <div class="swiper-slide">
                    <bonus />
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!-- 登录/注册 -->
        <div class="user-box">
            <div  @click="loginshow()"> 登录</div>｜<div  @click="registershow"> 注册 ></div>
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
            <registerSucess></registerSucess>
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
    registerSucess
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
    };
  },
  computed: {
        ...mapState(["login","isregister"])
  },
  mounted() {
      console.log(this.login)
    console.log("-----");
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
}
.left-nav {
  width: 366px;
  padding: 90px 0px 60px 90px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 100;
  background-image: url("./../assets/images/home_bj.png");
  background-size: 100% 100%;
  .nav-logo {
    width: 62px;
    margin-bottom: 62px;
    img {
      width: 100%;
    }
  }
  .nav-item {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    width: 200px;
    display: flex;
    justify-content: space-between;
  }
}
.main-container {
  background-image: url("./../assets/images/home_earth_bj.png");
  background-size: 100% 100%;
  width: 100%;
  padding-left: 600px;
  text-align: left;
  .logo {
    width: 43.3%;

    margin-top: 135px;
    text-align: center;

    img {
      width: 100%;
    }
  }
  .progress {
    background-image: url("./../assets/images/hone_progres_colour.png");
    background-size: 100% 100%;
    width: 380px;
    margin-top: 12px;
    .progress-bar {
      height: 6px;
      background-color: #00ff00;
      width: 300px;
      opacity: 0.5;
    }
  }
  .coin-detail {
    display: flex;
    justify-content: space-between;
    width: 380px;
    margin-top: 10px;
    span {
      font-size: 12px;
      color: #628d62;
    }
  }
  .buy-num {
    width: 380px;
    margin-top: 20px;
    input {
      border: 1px solid #00ff00;
      background-color: #fff;
      color: #628d62;
      padding: 9px;
      width: 250px;
    }
    button {
      background-color: #00ff00;
      color: #000;
      padding: 10px 38px;
      appearance: none;
      border: none;
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
}
.user-box {
  font-size: 10px;
  color: #000;
  padding: 5px 10px;
  position: absolute;
  right: 0;
  top: 45px;
  z-index: 100;
  background-color: #00ff00;
}
.lang-box {
  padding: 5px 10px;
  font-size: 10px;
  color: #00ff00;
  border: 1px solid;
  position: absolute;
  right: 0;
  bottom: 45px;
  z-index: 100;
  cursor: pointer;
  i {
    width: 4px;
    height: 4px;
    display: inline-block;
    background-image: url("./../assets/images/triangle_green.png");
    background-size: 100% 100%;
    margin-left: 3px;
  }
}
.lang-box-content {
  width: 120px;
  border: 2px solid rgba(0, 255, 0, 1);
  position: absolute;
  right: 54px;
  bottom: 45px;
  z-index: 100;
  padding: 6px 12px;
  color: #00ff00;
  font-size: 8px;
  background-color: #000;
  p {
    line-height: 20px;
    cursor: pointer;
  }
  p:hover {
    opacity: 0.3;
  }
}
</style>
<style>
.swiper-container-vertical > .swiper-pagination-bullets {
  right: 30px;
}
.swiper-pagination-bullet {
  width: 6px;
  height: 6px;
  border: 1px solid rgba(0, 255, 0, 1);
  background-color: transparent;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: rgba(0, 255, 0, 1);
}
</style>

