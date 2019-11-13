<template>
  <div class="container">
    <div class="title inner-title-border">
        白皮书
    </div>
    <div class="whitebook-container">
        <img src="./../assets/images/white_paper_ai.png" alt="">
        <div class="see-more">
            查看更多
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

<style lang="scss">
.container{
    background-image: url('./../assets/images/home_technology_bj.png');
    background-size: 100% 100%;
    width: 100%;
    padding-left: 466px;
    
    .title{
        margin-top: 90px;
        display: inline-block;
        margin-bottom: 32px;
    }
    .whitebook-container{
        img{
            width: 70%;
        }
        .see-more{
            width: 160px;
            padding: 8px 0;
            color: #000;
            font-size: 12px;
            background-color: #00FF00;
            text-align: center;
            margin-left: 200px;
            cursor: pointer;
            font-weight: 500;
        }
    }
}
</style>
