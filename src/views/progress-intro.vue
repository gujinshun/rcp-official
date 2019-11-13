<template>
  <div class="container">
    <div class="title inner-title-border">
        发展历程
    </div>
    <div class="team-item-list">
        
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

<style lang="scss">
.container{
    background-image: url('./../assets/images/home_technology_bj.png');
    background-size: 100% 100%;
    width: 100%;
    padding-left: 466px;
    text-align: left;
    
    .title{
        margin-top: 132px;
        display: inline-block;
        margin-bottom: 32px;
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
                width: 70px;
                margin-bottom: 15px;
            }
            .item-title{
                font-size: 14px;
                margin-bottom: 6px;
            }
            .item-detail{
                font-size: 12px;
            }
        }
    }
}
</style>
