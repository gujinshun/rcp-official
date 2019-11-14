<template>
   <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">ALD注册</div>
                  <img   @click="close()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <img src="./../../assets/images/success_icon@2x.png" alt="" srcset="">
                <div class="login_info">你已经注册成功！</div>
                <div class="forgetPas">账户信息</div>
                <div class="sucessT">您的账户名：39508900@gmail.com</div>
                <div class="suct2">您还可以进行一下操作：</div>
                <div class="suct2">以在我的账户>>选择设置交易密码。</div>
                <div class="button" @click="istranPaswwordshow">设置交易密码</div>
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
    };
  },
  computed: {
    ...mapState([ "registersucess",'tranPaswwordshow'])
  },
  methods: {
    istranPaswwordshow(){
        this.$store.commit("registersucess", false);
        this.$store.commit("tranPaswwordshow", !this.tranPaswwordshow);
    },
    close(){
         this.$store.commit("registersucess", !this.registersucess);
    },
    registersucessshow() {
       this.$store.commit("isregister", false);
      this.$store.commit("registersucess", !this.registersucess);
    },
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
    height: 444px;
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
      height: 404px;
      img{
        width: 50px;
        height: 50px;

      }
      .login_info {
        
        margin-top: 20px;
        font-size:18px;
font-weight:500;
color:rgba(0,255,0,1);
line-height:18px;
margin-bottom: 40px;
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
          color: #00ff00;
        line-height: 14px;
        font-size: 16px;
        text-align: left;
        display: block !important;
        margin-bottom: 20px;
      }
          .sucessT{
        width: 80%;
        max-width: 300px;
        font-weight: 400;
          color: #00ff00;
        line-height: 20px;
        font-size: 16px;
        text-align: left;
        display: block !important;
        margin-bottom: 20px;
      }
      .suct2{
              width: 80%;
        max-width: 300px;
         text-align: left;
        font-size:12px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(98,141,98,1);
line-height:24px;
      }
      .button {
        width: 80%;
        max-width: 300px;
        height: 40px;
        background: #00FF00;
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
