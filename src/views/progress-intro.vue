<template>
  <div class="container">
    <div class="title inner-title-border">
        发展历程
    </div>
    <div class="progress-intro-container">
        <div class="progress-box left-box">
            <div class="time">2019.11</div>
            <div class="progress-text">
                <p>商业目标：成立ALD CHAIN</p>
                <p>推出ALD项目</p>
                <p>发布ALD官方网站国际版并上线运营</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box right-box">
            <div class="time">2019.12</div>
            <div class="progress-text">
                <p>ALD社区全面上线</p>
                <p>HASH竞猜活动上线</p>
                <p>接龙新年活动</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box left-box">
            <div class="time">2020.01</div>
            <div class="progress-text">
                <p>发布ALD挖矿开采数据资产平台</p>
                <p>ALD理财上线运营</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box right-box">
            <div class="time">2020.06</div>
            <div class="progress-text">
                <p>ALD新币发布</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box left-box">
            <div class="time">2020.07</div>
            <div class="progress-text">
                <p>发布ALD挖矿开采数据资产平台</p>
                <p>ALD理财上线运营</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box right-box">
            <div class="time">2019.08</div>
            <div class="progress-text">
                <p>ALD社区全面上线</p>
                <p>HASH竞猜活动上线</p>
                <p>接龙新年活动</p>
            </div>
            <i></i>
        </div>
        <div class="progress-box left-box">
            <div class="time">2020.09</div>
            <div class="progress-text">
                <p>发布ALD挖矿开采数据资产平台</p>
                <p>ALD理财上线运营</p>
            </div>
            <i></i>
        </div>
        <div class="axis">
            <span class="round"></span>
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
.container{
    background-image: url('./../assets/images/home_technology_bj.png');
    background-size: 100% 100%;
    width: 100%;
    padding-left: 466px;
    text-align: left;
    
    .title{
        margin-top: 51px;
        display: inline-block;
        margin-bottom: 32px;
    }
    .progress-intro-container{
        width: 80%;
        overflow: hidden;
        .progress-box{
            width: 240px;
            font-size: 12px;
            position: relative;
            float: left;
            .time{
                font-size: 12px;
                text-align: right;
                margin-bottom: 10px;
            }
            .progress-text{
                border:2px solid rgba(0,255,0,1);
                padding: 13px;
                background-color: #000;
            }
            i{
                background-image: url('./../assets/images/point_circular_1.png');
                background-size: 100% 100%;
                display: inline-block;
                width: 38px;
                height: 11px;
                position: absolute;
                right: -50px;
                top: 25px;
            }
        }
        .left-box{
            margin-right: 60px;
        }
        .right-box{
            margin-left: 40px;
            margin-top: 50px;
            .time{
                text-align: left;
            }
            i{
                background-image: url('./../assets/images/point_circular_2.png');
                left: -50px;
            }
        }
        .axis{
            position: absolute;
            right: 0;
            left: 52.5%;
            width: 1px;
            .round{
                width: 5px;
                height: 5px;
                border-radius: 5px;
                display: inline-block;
                background-color: #00FF00;
                vertical-align: text-top;
                margin-left: -2px;
            }
            height: 100%;
            border-right: 1px dashed #00FF00;
        }
    }
}
</style>

