<template>
    <div class="loginbox">
        <div class="login">
            <div class="login_title">
                <div class="login_title_l">{{$t('lang32')}}</div>
                <img   @click="coinRecodeshow()"  src="./../../assets/images/0ff(3).png" alt="">
            </div>
            <div class="login_content">
                <div class="record">
                    <div class="tielt1">
                        <div class="time">{{$t('lang29')}}</div>
                        <div class="num">{{$t('lang30')}}</div>
                    </div>
                    <div class="title" v-for="item in data" :key='item.time'>
                        <div class="time">{{item.time}}</div>
                        <div class="num">{{(item.assets && item.assets.ald ) || '-'}} ALD</div>
                    </div>
                </div>
                <div class="changepage" v-if="false">
                    <div class="page" v-for="(item) in 10" :key='item'>{{item}}</div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        name: "profitRecord",
        data() {
            return {
                close: false,
                data :[],
            };
        },
        computed: {
            ...mapState(["profitRecord"])
        },
        mounted (){
            this.profit_history();
        },
        methods: {
            coinRecodeshow() {
                this.$store.commit("profitRecord", !this.profitRecord);
            },
            profit_history (){
                this.axios({
                    url : "/service/profit_history",
                }).then(res => {
                    // console.log(res);
                    this.data = res.data.data;
                }).catch(err => {
                    this.data = [];
                });
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
            width: 94%;
            overflow: hidden;
            max-width: 824px;
            position: relative;
            height: 520px;
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
                font-size: 14px;
                height: 400px;
                .record{
                    overflow-y: auto;
                    overflow-x: hidden;
                    max-height: 600px;
                    -ms-scrollbar-face-color: rgba(0, 255, 0, 1);
                    -ms-scrollbar-highlight-color: rgba(0, 255, 0, 1);
                    &::-webkit-scrollbar {
                        width: 10px;
                        background-color: transparent;
                    }
                    &::-webkit-scrollbar-track {
                        border-radius: 10px;
                        box-shadow: inset 0 0 6px rgba(0, 255, 0, 0.15);
                        background-color: rgba(0, 255, 0, 0.6);
                    }
                    &::-webkit-scrollbar-thumb {
                        width: 10px;
                        border-radius: 10px;
                        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.05);
                        background-color: rgba(0, 255, 0, 1);
                    }
                }
                .tielt1 {
                    height: 40px;
                    padding: 0 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: rgba(0, 255, 0, 0.2);
                }
                .title {
                    height: 30px;
                    padding: 0 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #00ff00;
                }
                .changepage {
                    width: 100%;
                    height: 52px;
                    border-top: 1px solid rgba(0, 255, 0, 0.2);
                    display: flex;
                    justify-content: flex-end;
                    /*position: absolute;*/
                    align-items: center;
                    bottom: 0;
                    .page {
                        width: 32px;
                        height: 32px;
                        color: #00ff00;
                        background: rgba(0, 255, 0, 0.2);
                        line-height: 32px;
                        text-align: center;
                        margin-right: 10px;
                    }
                    .page:hover {
                        background: rgba(0, 255, 0, 1);
                        color: #000000;
                    }
                }
            }
        }
    }
    // xm  end
</style>
