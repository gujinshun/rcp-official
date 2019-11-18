<template>
    <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">ALD登陆</div>
                <img  @click="loginshow()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <input type="text" placeholder="邮箱" name="mail" v-model="mail">
                <input type="password"  placeholder="密码" name="password" v-model="password">
                <div class="login_info">{{msg}}</div>
                <!--<div class="forgetPas" @click="findPaw">忘记密码？</div>-->
                <div class="button" @click="loginSubmit">登录{{loginState ? '...' : ''}}</div>
                <div class="login_text"  @click="registershow()">注册</div>
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
                loginState : false,
                mail : "",
                password : "",
                msg: "",
                close: false
            };
        },
        computed: {
            ...mapState(["login", "isregister",''])
        },
        watch : {
            msg (n, o){
                if(n != ""){
                    setTimeout(() => {
                        this.msg = "";
                    }, 3000);
                };
            },
        },
        methods: {
            loginSubmit (){
                var {mail, password} = this;
                if(mail == ""){
                    this.msg = "邮箱错误";
                    return;
                };

                if(password == ""){
                    this.msg = "密码错误";
                    return;
                };
                this.loginState = true;
                this.axios({
                    url : "/service/login",
                    params : {
                        mail,
                        password,
                    },

                }).then(data => {
                    console.log(data);
                    this.loginState = false;
                    this.$store.commit("uid", data.data.uid);
                    this.loginshow();
                    this.loginInfo();
                }).catch(err => {
                    this.msg = err.message;
                    this.loginState = false;
                    console.log(err);
                });
            },
            loginshow() {
                console.log(!this.login, "!this.login");
                this.$store.commit("login", !this.login);
            },
            findPaw(){
                this.$store.commit("login", false);
                this.$store.commit("isfindpaw", !this.isfindpaw);
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
            max-width: 400px;
            font-size: 14px;
            height: 368px;
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
                img{
                    padding: 10px;
                    cursor: pointer;
                }
            }
            .login_content {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;

                height: 324px;
                .login_info {
                    font-size: 12px;
                    font-weight: 400;
                    text-align: left;
                    width: 75%;

                    color: rgba(255, 88, 88, 1);
                    line-height: 12px;
                    margin-top: 10px;
                    margin-bottom: 0;
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
                    background:#00ff00;
                    cursor: pointer;
                }
                .login_text:hover {
                    cursor: pointer;
                }
                .forgetPas:hover {
                    cursor: pointer;
                    color:#00ff00;
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
