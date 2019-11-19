<template>
    <div class="whitebook-container">
        <div class="container">
            <div class="title inner-title-border">
                {{$t('whitebook')}}
            </div>
            <div class="content">
                <img src="./../assets/images/white_paper_ai.png" alt="">
                <div class="see-more" @click="morewhite">
                    {{$t('more')}}
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
            morewhite (){
                var url = this.$i18n.locale == 'ru' ? 'ALD Белый.pdf' : this.$i18n.locale == 'en' ? 'ALD white paper.pdf' : 'ALD白皮书繁体中文版.pdf'
                url = '/pdf/' + url;
                location.href = url;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .whitebook-container{
        width: 100%;
        margin-left: 24%;
        position: relative;
        text-align: left;
        .container{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
        }
        .title{
            margin-top: 90px;
            display: inline-block;
            margin-bottom: 188px;
            font-size: 30px;
        }
        .content{

            img{
                width: 100%;
            }
            .see-more{
                width: 160px;
                margin: 0 auto;
                padding: 8px 0;
                color: #000;
                font-size: 14px;
                background-color: #00FF00;
                text-align: center;
                cursor: pointer;
                font-weight: 500;
            }
        }
    }
    @media screen and (max-width: $mediaWidth){
        .whitebook-container{
            padding: 15px 3%;
            display: flex;
            align-items: center;
            justify-content: center;
            .container{
                text-align: center;
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

        }
    }
</style>
