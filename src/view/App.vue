<template>
    <div class="vueContainer">
        这是vue里的文本
        <div class="cardCon">
            <div class="flipCon">
                <div class="face front"><img src="../images/card3.jpg"></div>
                <div class="face back">这是背面</div>
            </div>
        </div>
        <div class="musicCon">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        },
        mounted() {
        },
        methods:{
        }
    }
</script>
<style lang="scss" scoped>
    @import "../scss/_flip.scss";
    @import "../scss/_music.scss";
</style>