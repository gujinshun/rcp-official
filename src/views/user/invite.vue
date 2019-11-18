<template>
    <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">邀请码</div>
                <img   @click="changecoinshow()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <div class="text">X 邀请码</div>
                <div class="coin">
                    <input type="text" :value="userData.inviteCode || '75442486-0878-440c-9db1-a7006c25a39f'" disabled>
                    <div class="copy"><copy :val="userData.inviteCode || '75442486-0878-440c-9db1-a7006c25a39f'">复制</copy></div>
                </div>
                <br />
                <br />
                <div class="text">Y 邀请码</div>
                <div class="coin">
                    <input type="text" :value="userData.inviteCode2 || '75442486-0878-440c-9db1-a7006c25a39f'" disabled>
                    <div class="copy"><copy :val="userData.inviteCode2 || '75442486-0878-440c-9db1-a7006c25a39f'">复制</copy></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        name: "invite",
        data() {
            return {
            };
        },
        computed: {
            ...mapState(['invite', 'userData'])
        },
        methods: {
            changecoinshow() {
                this.$store.commit("invite", !this.invite);
            },
        }
    };
</script>

<style lang="scss" scoped>
    .copy{
        cursor: pointer;
    }
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
            max-width:647px;
            height:470px;
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
                align-items: center;
                height: 430px;
                .coin{
                    width: 90%;
                    color:#00FF00;
                    padding: 30px 0;
                    input{
                        width: 90%;
                        max-width:529px;
                        background: #000000;
                        padding-left: 20px;
                        height:40px;
                        border:1px solid rgba(0,255,0,0.5);
                        margin-right: 20px;
                        color:#00FF00;
                        font-size:20px;
                        font-weight:400;
                        line-height:20px
                    }
                    div{
                        display: inline-block;
                        line-height: 40px;
                        height: 40px;;
                    }
                }
                .erweima{
                    width: 90%;
                    max-width:581px;
                    text-align: left;
                    .text{
                        margin: 40px  0 20px 0;
                    }
                    .img{
                        width:180px;
                        height:180px;
                        background:rgba(0,0,0,1);
                        border:1px solid rgba(0,255,0,1);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        img{
                            width:150px;
                            height:150px;
                        }
                    }

                }

            }
        }
    }
    @media screen and (max-width: $mediaWidth){
        .loginbox .login .login_content .coin {
            padding-top: 10px;
            text-align: center;
            input{
                width: 100%;
                margin: 0 auto;
                font-size: 12px;
                padding: 0 8px;
                text-align: center;
            }
        }
    }
    // xm  end
</style>
