<template>
    <section class="body">
        <div class="left-nav">
            <div class="nav-logo">
                <img src="./../assets/images/list_logo.png" alt="">
            </div>
            <div class="nav-item" v-for="(item, index) in navList" :key="index">
                <span @click="openSwiper(index)">{{item.name}}</span>
                <span style="text-align:right">></span>
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    Slide 1
                </div>
                <div class="swiper-slide">
                    <about />
                </div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">
                    <tech-intro />
                </div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
                <div class="swiper-slide">Slide 10</div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </section>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/css/swiper.min.css';
    import about from './about.vue';
    import techIntro from './tech-intro.vue';
    export default {
        name: "home",
        components: {about, techIntro},
        data() {
            return {
                swiper : null,
                navList: [{
                    name: '首页',
                    index: 'home',
                },{
                    name: '关于ALD',
                    index: 'about',
                },{
                    name: 'ALD全球战略计划',
                    index: 'plan',
                },{
                    name: '技术介绍',
                    index: 'tech-intro',
                },{
                    name: '团队介绍',
                    index: 'team-intro',
                },{
                    name: '发展历程',
                    index: 'progress',
                },{
                    name: '白皮书',
                    index: 'whitebook',
                },{
                    name: '推荐奖励',
                    index: 'bonus',
                }]
            }
        },
        mounted (){
            console.log("-----");
            this.swiper = new Swiper('.swiper-container', {
                direction: 'vertical',
                slidesPerView: 1,
                spaceBetween: 0,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        },
        methods : {
            openSwiper(index) {
                this.swiper.slideTo(index, 1000, false)
            }

        }
    }
</script>

<style scoped lang="scss">
    .left-nav{
        width: 366px;
        padding: 90px 0px 60px 90px;
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        z-index: 100;
        background-image: url('./../assets/images/home_bj.png');
        background-size: 100% 100%;
        .nav-logo{
            width: 62px;
            margin-bottom: 62px;
            img{
                width:100%;
            }
        }
        .nav-item{
            font-size: 14px;
            height: 60;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .swiper-container, .body{
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
    }
    
</style>
<style>
.swiper-container-vertical>.swiper-pagination-bullets{
    right: 30px;
}
.swiper-pagination-bullet{
        
        width: 6px;
        height: 6px;
        border:1px solid rgba(0,255,0,1);
        background-color: transparent;
        opacity: 1;
    }
    .swiper-pagination-bullet-active{
        background: rgba(0,255,0,1);
    }
</style>