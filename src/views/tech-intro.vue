<template>
    <div class="tech-intro-container">
        <div class="container">
            <div class="title inner-title-border">
                {{$t('tech-intro')}}
            </div>
            <div class="tech-item-list">
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang44')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang45')}}
                    </div>
                </div>
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang46')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang47')}}
                    </div>
                </div>
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang48')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang49')}}
                    </div>
                </div>
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang50')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang51')}}
                    </div>
                </div>
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang52')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang53')}}
                    </div>
                </div>
                <div class="tech-item">
                    <img src="./../assets/images/technology_programme.png" alt=""/>
                    <div class="item-title">
                        {{$t('lang54')}}
                    </div>
                    <div class="item-detail">
                        {{$t('lang55')}}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted (){
        },
        methods : {
        }
    }
</script>

<style lang="scss" scoped>
    .tech-intro-container{
        width: 100%;
        text-align: left;
        margin-left: 24%;
        position: relative;
        .container{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
        }
        .title{
            margin-top: 120px;
            display: inline-block;
            margin-bottom: 64px;
            font-size: 30px;
        }
        .tech-item-list{
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            .tech-item{
                width: 25%;
                text-align: center;
                margin-right: 8%;
                margin-bottom: 30px;
                img{
                    width: 124px;
                    margin-bottom: 35px;
                }
                .item-title{
                    font-size: 18px;
                    margin-bottom: 11px;
                }
                .item-detail{
                    font-size: 14px;
                    padding: 0 15px;
                }
            }
        }
    }

    @media screen and (max-width: $mediaWidth){
        .tech-intro-container{
            padding: 15px 3%;
            padding-top: 100px;
            .container{
                width: 100%;
                position: static;
                transform: none;
            }
            .title{
                font-size: 18px;
                text-align: center;
                display: block;
                margin: 0 auto 50px;
                width: 60%;
            }
            .tech-item-list{
                .tech-item{
                    text-align: center;
                    width: 100%;
                    margin-right: 0;
                    display: block;
                    img{
                        display: inline-block;
                        margin-bottom: 10px;
                        margin-top: 50px;
                    }
                }
            }

        }
    }
</style>
