<template>
    <div class="progress-container">
        <div class="container">
            <div class="title inner-title-border">
                {{$t('progress')}}
            </div>
            <div class="progress-intro-container">
                <div class="progress-box left-box">
                    <div class="time">2019.03</div>
                    <div class="progress-text">
                        <p>{{$t('lang56')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box right-box">
                    <div class="time">2019.05</div>
                    <div class="progress-text">
                        <p>{{$t('lang57')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box left-box">
                    <div class="time">2019.08</div>
                    <div class="progress-text">
                        <p>{{$t('lang58')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box right-box">
                    <div class="time">2019.10</div>
                    <div class="progress-text">
                        <p>{{$t('lang59')}} </p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box left-box">
                    <div class="time">2019.12</div>
                    <div class="progress-text">
                        <p>{{$t('lang60')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box right-box">
                    <div class="time">2020.01</div>
                    <div class="progress-text">
                        <p>{{$t('lang61')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box left-box">
                    <div class="time">2020.02</div>
                    <div class="progress-text">
                        <p>{{$t('lang62')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box right-box">
                    <div class="time">2020.03</div>
                    <div class="progress-text">
                        <p>{{$t('lang63')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="progress-box left-box">
                    <div class="time">2020.05</div>
                    <div class="progress-text">
                        <p>{{$t('lang64')}}</p>
                    </div>
                    <i></i>
                </div>
                <div class="axis">
                    <span class="round"></span>
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
    .progress-container{
        width: 100%;
        text-align: left;
        margin-left: 24%;
        position: relative;
        .container{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
        .title{
            margin-top: 90px;
            display: inline-block;
            margin-bottom: 40px;
        }
        .progress-intro-container{
            overflow: hidden;
            position: relative;
            .progress-box{
                width: 40%;
                font-size: 14px;
                position: relative;
                float: left;
                .time{
                    font-size: 18px;
                    text-align: right;
                    margin-bottom: 10px;
                }
                .progress-text{
                    border: 2px solid rgba(0,255,0,1);
                    padding: 24px;
                    background-color: #000;
                }
                i{
                    background-image: url('./../assets/images/point_circular_1.png');
                    background-size: 100% auto;
                    background-repeat: no-repeat;
                    display: inline-block;
                    width: 20%;
                    height: 17px;
                    position: absolute;
                    right: -25%;
                    top: 38px;
                }
            }
            .left-box{
                margin-right: 10%;
            }
            .right-box{
                margin-top: 92px;
                margin-inline-start: 10%;
                .time{
                    text-align: left;
                }
                i{
                    background-image: url('./../assets/images/point_circular_2.png');
                    left: -25%;
                }
            }
            .axis{
                position: absolute;
                left: 50%;
                width: 1px;
                z-index: 100;
                .round{
                    width: 8px;
                    height: 8px;
                    border-radius: 8px;
                    display: inline-block;
                    background-color: #00FF00;
                    vertical-align: text-top;
                    margin-left: -4px;
                }
                height: 100%;
                border-right: 1px dashed #00FF00;
            }
        }
    }
    @media screen and (max-width: $mediaWidth){
        .progress-container{
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
            .progress-intro-container{
                .progress-box{
                    .progress-text{
                        padding: 8px;
                    }
                }
            }

        }
    }
</style>

