<template>
    <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">{{$t('lang75')}}</div>
                <img   @click="changecoinshow()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <div class="coin">
                    <input type="text" v-model="address"  :disabled="userData.walletAddress">
                    <div class="copy" @click="setAddress" v-if="!userData.walletAddress">{{$t('lang74')}}{{setAddressState ? '...' : ''}}</div>
                </div>
                <!--<div class="erweima">-->
                <!--<div class="text">二维码</div>-->
                <!--<div class="img">-->
                <!--<img src="./../../assets/images/erweima.png" alt="" srcset="">-->
                <!--</div>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        name: "aldAddress",
        data() {
            return {
                address : "",
                setAddressState : false,
            };
        },
        computed: {
            ...mapState(['aldAddressState', 'userData'])
        },
        created (){
            console.log(this.userData);
            if(this.userData.walletAddress){
                this.address = this.userData.walletAddress;
            }
        },
        methods: {
            changecoinshow() {
                this.$store.commit("aldAddressState", !this.aldAddressState);
            },
            setAddress (){
                if(this.setAddressState) return;
                if(this.address.length <= 0){
                    alert(this.$t('lang76'));
                    return;
                }
                this.setAddressState = true;
                this.axios({
                    url : '/service/addWalletAddress',
                    params : {
                        address : this.address
                    }
                }).then(data => {
                    console.log(data);
                    this.setAddressState = false;
                    this.$store.commit("aldAddressState", false);
                    alert(this.$t('lang77'));
                }).catch(e => {
                    this.setAddressState = false;
                    alert(e.message || this.$t('lang78'));
                })
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
                        width: 80%;
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
                        @media screen and (max-width: 1024px){
                            width: 100%;
                            display: block;
                            text-align: center;
                        }
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
        .loginbox .login .login_content .coin input{
            width: 100%;
            margin: 0 auto;
            font-size: 12px;
            padding: 0 8px;
        }
    }
    // xm  end
</style>
