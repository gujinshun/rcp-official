<template>
    <span class="copy-component" v-clipboard:copy="val" v-clipboard:success="onCopy" v-clipboard:error="onError"><slot></slot></span>
</template>
<script>
    import Vue from 'vue';
    import VueClipboard from 'vue-clipboard2';
    Vue.use(VueClipboard);
    export default {
        name: "copy",
        props : {
            val : {
                default : ''
            }
        },
        methods : {
            onCopy (e){
                // this.$emit("msg", this.lang.copySuccess);
                alert(this.$t('lang26'));
            },
            onError (e){
                // this.$emit('msg', e.message || this.lang.copyError);
                alert(this.$t('lang27'));
            },
        }
    }
</script>
<style scoped>
    .copy-component{
        display: inline-block;
        font-style: normal;
    }
</style>
