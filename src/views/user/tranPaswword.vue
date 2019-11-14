<template>
   <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">设置交易密码</div>
                  <img   @click="close"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <input type="text" placeholder="请输入交易密码" name="" id="">
                <input type="password"  placeholder="请再次确认交易密码" name="" id="">
                <div class="login_info" v-show='ismeg'>{{msg}}</div>
                <div class="button">确认</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      msg: "交易密码不一致",
      ismeg:false,
    };
  },
  computed: {
    ...mapState(["login", "isregister",'tranPaswwordshow'])
  },
  methods: {
    close() {
      this.$store.commit("tranPaswwordshow", !this.tranPaswwordshow);
    },
    registershow() {
      this.$store.commit("login", false);
      this.$store.commit("isregister", !this.isregister);
    }
  }
};
</script>

<style lang="scss" scoped>
input::-webkit-input-placeholder {
  color: #ccc;
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
    max-width: 400px;
    font-size: 14px;
    height: 300px;
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
      align-items: center;

      height: 260px;
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
        margin-top: 20px;
        padding-left: 10px;
        border: 1px solid rgba(0, 255, 0, 0.5);
        color: #00ff00;
        line-height: 14px;
        background: #000000;
        display: block;
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
        margin: 20px 0;
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
