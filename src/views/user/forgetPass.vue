<template>
   <div class="loginbox">
        <div class="login" :class="next?'height1':''">
            <div class="login_title">
                <div class="login_title_l">{{next ?"密码重置":"ALD找回密码"}}</div>
                <img @click="registershow"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content" :class="next?'height2':''">
                <div class="chosetype" v-if="!next">
                  <div :class="type?'active':''" @click="changtype"> 手机找回</div>|
                  <div :class="type?'':'active'"  @click="changtype">邮箱找回</div>
                </div>
                 <input type="text" v-if="type && !next" placeholder="请输入手机号" name="" id="">
                <input type="text" v-if="!type && !next" placeholder="请输入邮箱账号" name="" id="">
                 <div class="code"  v-if="type && !next">
                   <input type="text" placeholder="请输入手机验证码" name="" id="">
                   <div>获取验证码</div>
                </div>
                   <div class="code"  v-if="!type && !next">
                   <input type="text" placeholder="请输入邮箱验证码" name="" id="">
                   <div>获取验证码</div>
                </div>
                <input type="password" v-if="next" placeholder="请输入密码" name="" id="">
                <input type="password" v-if="next" placeholder="请再次确认密码" name="" id="">
                 <div class="login_info">{{msg}}</div>
                   <div class="button" v-if="!next" @click="tonext">下一步</div>
                  <div class="button" v-if="next" @click="findpaw">确定</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "register",

  data() {
    return {
      msg: "",
      changenav: false,
      type: true,
      close: false,

      title: "ALD找回密码"
    };
  },
  computed: {
    ...mapState(["login", "isregister", "registersucess", "isfindpaw",'next'])
  },
  methods: {
    tonext(){
       this.$store.commit("next", !this.next);
    },
    changtype() {
      this.type = !this.type;
    },
    registershow() {
      this.$store.commit("isfindpaw", !this.isfindpaw);
         this.$store.commit("next", false);
    },
    tochangenav() {
      this.changenav = !this.changenav;
    },
    findpaw() {
      this.$store.commit("isfindpaw", !this.isfindpaw);
        this.$store.commit("next", false);
    }
  }
};
</script>

<style lang="scss" scoped>
.height2{
  height: 268px !important;
  padding-top: 20px;
}
.height1{
  height: 300px !important;
}
input::-webkit-input-placeholder {
  color: #628d62;
}

.noshow {
  display: none !important;
}
/* xm start */
.loginbox {
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  .login {
    background: #000000;
    width: 85%;
    max-width: 400px;
    height: 358px;
    font-size: 14px;
    background: rgba(0, 0, 0, 1);
    border: 2px solid rgba(0, 255, 0, 1);
    .login_title {
      width: 100%;
      height: 40px;
      background: rgba(0, 255, 0, 1);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .login_title_l {
        font-size: 18px;
        font-weight: 500;

        color: rgba(0, 0, 0, 1);
        line-height: 18px;
      }
    }
    .login_content {
  
      color: #628d62;
      height: 320px;

      .xieyi {
        display: flex;
        width: 300px;
        height: 20px;
        align-items: center;
        margin: 0 auto;
        input {
          width: 18px;
          height: 18px;
          background: rgba(0, 0, 0, 1);
          border: 3px solid rgba(0, 255, 0, 1);
          margin: 0;
          background: #fff;
        }
        .re_text2 {
          font-weight: 400;
          color: rgba(0, 255, 0, 1);
        }
      }
      .chosetype {
        width: 80%;
        margin: 40px auto;
        text-align: center;
        font-size: 18px;
        div {
          display: inline-block;
          padding: 0 20px;
        }
        .active {
          color: #00ff00;
        }
      }
      .code {
        display: flex;
        width: 300px;
        margin: 20px auto;
        height: 41px !important;
        border: 1px solid rgba(0, 255, 0, 0.5);
        div {
          width: 30%;
          text-align: center;
          line-height: 40px;
          display: inline-block;
          vertical-align: top;
          color: #00ff00;
          border-left: 1px solid rgba(0, 255, 0, 0.5);
        }
        input {
          margin: 0;
          height: 38px;
          border: none;
        }
      }
      .phone {
        display: flex;
        width: 300px;
        margin: 20px auto;
        height: 41px !important;
        position: relative;
        border: 1px solid rgba(0, 255, 0, 0.5);
        div {
          width: 20%;
          text-align: center;
          line-height: 40px;
          display: inline-block;
          vertical-align: top;
          border-right: 1px solid rgba(0, 255, 0, 0.5);
        }
        input {
          margin: 0;
          height: 38px;
          border: none;
        }

        .phone_nav {
          width: 300px;
          position: absolute;
          margin: 0 auto;
          top: 45px;
          // overflow-y: scroll;
          height: 264px;
          background: rgba(0, 0, 0, 1);
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 255, 0, 1);
          .serch {
            border: 1px solid red;
            width: 270px;

            height: 28px;
            border-radius: 2px;
            border: 1px solid rgba(0, 255, 0, 0.5);
            display: flex;
            margin: 10px auto;
            padding: 0px 10px;
            align-items: center;
            input {
              height: 26px;
            }
            img {
              width: 20px;
              height: 20px;
            }
          }
          .phone_nav_text {
            width: 100%;
            display: flex;
            padding: 0 20px;
            line-height: 34px;
            height: 34px;
            color: #628d62;
            border: none;
            justify-content: space-between;
            div {
              border: none;
            }
          }
          .phone_nav_text:hover {
            background: rgba(0, 255, 0, 0.08);
          }
        }
      }
      .login_info {
        font-size: 12px;
        font-weight: 400;
        text-align: left;
        width: 75%;

        color: rgba(255, 88, 88, 1);
        line-height: 12px;
        margin-top: 10px;
      }
      .ininof {
        border: 1px solid rgba(255, 88, 88, 1) !important;
      }
      input {
        width: 80%;
        max-width: 300px;
        height: 40px;
        padding-left: 10px;
        border: 1px solid rgba(0, 255, 0, 0.5);
        color: #00ff00;
        line-height: 14px;
        background: #000000;
        display: block;
        margin: 20px auto;
      }
      .forgetPas {
        width: 80%;
        max-width: 300px;
        font-weight: 400;
        color: rgba(98, 141, 98, 1);
        line-height: 14px;
        text-align: right;
        display: block !important;
      }
      .button {
        width: 80%;
        max-width: 300px;
        height: 40px;
        background: rgba(0, 255, 0, 0.5);
        text-align: center;
        line-height: 40px;
        margin: 20px auto;
        color: #000000;
      }
      .button:hover {
        cursor: pointer;
      }
      .login_text:hover {
        cursor: pointer;
      }
      .forgetPas:hover {
        cursor: pointer;
      }
      .login_text {
        font-weight: 400;
        color: rgba(0, 255, 0, 1);
      }
    }
  }
}
// xm  end
</style>
