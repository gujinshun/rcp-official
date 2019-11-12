<template>
    <section class="body">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">{{$t('title')}}</div>
                <div class="swiper-slide">
                    Slide 2
                </div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
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
    export default {
        name: "home",
        data() {
            return {
                swiper : null,
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

        }
    }
</script>

<style scoped lang="scss">
    .swiper-container, .body{
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
    }
</style>