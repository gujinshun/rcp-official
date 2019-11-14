<template>
    <section>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home2",
        data() {
            return {
                swiper: null,
            }
        },
        mounted() {
            this.swiper = new Swiper(".swiper-container", {
                direction: "vertical",
                slidesPerView: 1,
                spaceBetween: 0,
                mousewheel: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
        },
    }
</script>

<style scoped lang="scss">
</style>