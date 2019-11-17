<template>
    <div class="about-container">
        <div class="container">
            <div class="about-title inner-title-border">
                ALD全球战略计划
            </div>
            <div class="about-content inner-title-border">
                基于区块链技术，ALD能够做到全球范围内的金融数据化、平台产业化，其中产业包括但不限于互联网娱乐行 业、时尚奢侈品行业、电子金融行业、资讯广告行业、 实体行业等。有如搭积木般的功能应用模式，ALD将充 分利用全球化的商业数据，一步步让各项应用嵌落在生 态链上，如此形成一个以数字金融为核心的ALD数字资 产王国。
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .about-container{
        width: 100%;
        text-align: left;
        margin-left: 20%;
        .container{
            max-width: 890px;
            margin: 0 auto;
        }
        .about-title{
            margin-top: 264px;
            display: inline-block;
            margin-bottom: 40px;
            font-size: 30px;
        }
        .about-content{
            font-size: 18px;
            text-align: left;
            padding: 24px;
            line-height: 2;
        }
    }
    @media screen and (max-width: $mediaWidth){
        .about-container {
            display: flex;
            align-items: center;
            justify-content: center;
            .container{
                width: 94%;
            }
            .about-title{
                font-size: 18px;
                margin: 0 0 20px 0;
            }
            .about-content{
                padding: 15px;
                font-size: 16px;
                line-height: 1.6;
            }
        }
    }
</style>
