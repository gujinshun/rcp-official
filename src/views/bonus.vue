<template>
  <div class="container">
      <div class="inner-container">
        <div class="title inner-title-border">
            推荐奖励：直推买入奖励10%
        </div>
        <div class="bonus-container">
            <div class="bonus-total">
                <div class="bonus-item">
                    <p>3584</p>
                    <p>总推荐人物</p>
                </div>
                <div class="bonus-item">
                    <p>8008</p>
                    <p>总推荐奖励</p>
                </div>
            </div>
            <div class="bonus-list">
                <div class="bonus-row row-title">
                    <span>时间</span>
                    <span>邮箱</span>
                    <span>奖励</span>
                </div>
                <div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
                </div>
                <div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
                </div><div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
                </div><div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
                </div><div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
                </div><div class="bonus-row">
                    <span>2019-11-10 08:00</span>
                    <span>39508900@gmail.com</span>
                    <span>800</span>
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
                itemList: [{
                    name: '解决方案',
                    detail: '基于以上对区块链行业现状的分析，ALD将提出结合自身公链优势的合理解决方案',
                },{
                    name: '共识算法对比',
                    detail: '依靠人工神经网络 &遗传算法寻找清 算和支付的最优解',
                },{
                    name: '创世节点',
                    detail: '全球创世节点，共48个，为ALD区块链网络提供初始算力',
                },{
                    name: '多功能生态平台',
                    detail: '全球范围的金融数据化、平台产业化，不限于互联网娱乐、时尚奢侈品、电子金融、实体行业等',
                },{
                    name: '安全、逻辑、稳定的系统架构',
                    detail: '为了解决区块链技术在应用落地过程中可能面临的 各种阻碍，ALD区块链平台采用两层结构',
                },{
                    name: '高融合性拓展',
                    detail: '跨境支付、全球贸易、供应链金融、征信、人工智能\物联网、医疗健康、IP版权、等超广泛的应用场景',
                }]
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
    width: 100%;
    text-align: left;
    margin-left: 24%;
    position: relative;
    .inner-container{
        width: 46.5%;
        margin: 0 auto;
        // position: absolute;
        // left: 50%;
        // transform: translateX(-50%);
    }
    .title{
        margin-top: 90px;
        display: inline-block;
        margin-bottom: 40px;
        width: 100%;
        font-size: 30px;
    }
    .bonus-container{
        border:2px solid #00FF00;
        .bonus-total{
            border-bottom: 2px solid #00FF00;
            display: flex;
            padding: 30px 157px;
            text-align: center;
            justify-content: space-between;
            .bonus-item{
                p:first-child{
                    font-size: 62px;
                    margin-bottom: 15px;
                }
                p:last-child{
                    font-size: 20px;
                }
            }
        }
        .bonus-list{
            .bonus-row{
                display: flex;
                justify-content:  space-between;
                font-size: 20px;
                padding: 20px 24px;
            }
            .row-title{
                color: #00FF00;
                opacity: 0.5;
                
            }
        }
    }
}
</style>
