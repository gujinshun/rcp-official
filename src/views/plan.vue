<template>
    <div class="about-container">
        <div class="container">
            <div class="about-title inner-title-border">
                {{$t('plan')}}
            </div>
            <div class="about-content inner-title-border">
                {{$t('lang43')}}
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
