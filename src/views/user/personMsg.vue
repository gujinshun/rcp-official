<template>
   <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">账户信息</div>
                  <img   @click="personMsgshow()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <div class="myTop">
                  <img src="./../../assets/images/portrait_icon.png" alt="" srcset="">
                  <div class="mt_text">
                    <div class="mtL">39508900@gmail.com</div>
                    <div class="myr">UID:59108309</div>
                  </div>
                </div>
             
                <div class="myLast">
                  <div class="last_l">
                      <img src="./../../assets/images/login_password@2x.png" alt="" srcset="">
                      <div class="mt_text">
                        <div class="mtL">登录密码</div>
                        <div class="myr">用于保护账户安全</div>
                      </div>
                  </div>
                  <div class="last_r">修改</div>
                </div>
                  <div class="myLast">
                  <div class="last_l">
                      <img src="./../../assets/images/transaction_password@2x.png" alt="" srcset="">
                      <div class="mt_text">
                        <div class="mtL">交易密码</div>
                        <div class="myr">用于保护法币交易安全</div>
                      </div>
                  </div>
                  <div class="last_r">修改</div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "personMsg",
  data() {
    return {
      msg: "手势号或密码错误",
    };
  },
  computed: {
    ...mapState([ "personMsg"])
  },
  methods: {
    personMsgshow() {
      this.$store.commit("personMsg", !this.personMsg);
    },

  }
};
</script>

<style lang="scss" scoped>
input::-webkit-input-placeholder {
  color: #628d62;
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
    width: 85vw;
    overflow: hidden;
    max-width: 824px;
    position: relative;
    height: 520px;
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
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      align-items: center;
      .myTop {
         width: 100%;
         padding:0 5%;
        margin:0  auto 10px 0 auto;
        height: 132px;
        display: flex;
        border-bottom: 1px solid rgba(0, 255, 0, 0.2);
        justify-content: flex-start;
        align-items: center;
        img {
          max-height: 70px;
          max-width: 70px;
          height: 15vw;
          width: 15vw;
    
          margin-right: 20px;
        }
        .mtL {
          font-size: 20px;
          font-weight: 500;
          color: rgba(0, 255, 0, 1);
          line-height: 20px;
        }
        .myr {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 255, 0, 0.2);
          line-height: 14px;
          margin-top: 14px;
        }
      }
      .myLast {
        height: 80px;
          width: 90%;
      margin:0   auto 10px 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .last_l {
            display: flex;
            align-items: center;
          img {
            height: 30px;
            width: 30px;
            margin-right: 20px;
          }
          .mt_text {
            .mtL {
              font-size: 14px;
              font-weight: 500;
              color: rgba(0, 255, 0, 1);
              line-height: 20px;
            }
            .myr {
              font-size: 14px;
              font-weight: 400;
              color: rgba(0, 255, 0, 0.2);
              line-height: 14px;
              margin-top: 10px;
            }
          }
        }

        .last_r {
          width: 68px;
          height: 34px;
          line-height: 34px;
          text-align: center;
          border: 1px solid rgba(0, 255, 0, 1);
          color: #00ff00;
        }
        .last_r:hover{
          background: #00ff00;
          color: #000000;

        }
      }
    }
  }
}
// xm  end
</style>
