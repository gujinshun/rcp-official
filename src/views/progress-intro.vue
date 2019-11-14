<template>
  <div class="progress-container">
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
            width: 361px;
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
                background-size: 100% 100%;
                display: inline-block;
                width: 68px;
                height: 20px;
                position: absolute;
                right: -88px;
                top: 38px;
            }
        }
        .left-box{
            margin-right: 168px;
        }
        .right-box{
            margin-top: 92px;
            .time{
                text-align: left;
            }
            i{
                background-image: url('./../assets/images/point_circular_2.png');
                left: -90px;
            }
        }
        .axis{
            position: absolute;
            left: 442px;
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
</style>

