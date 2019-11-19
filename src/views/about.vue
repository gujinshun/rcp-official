<template>
    <div class="about-container">
        <div class="container">
            <div class="about-title inner-title-border">
                {{$t('about')}}
            </div>
            <div class="about-content inner-title-border">
                {{$t('lang42')}}
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data (){
            return {}
        }
    }
</script>
<style lang="scss" scoped>
    .about-container{
        margin-left: 20%;
        position: relative;
        text-align: left;
        width: 100%;
        .container{
            width: 46.5%;;
            margin: 0 auto;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
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
            line-height: 28px;
            font-weight: 400;
            padding: 24px;
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
