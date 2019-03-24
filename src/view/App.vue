<template>
    <div class="vueContainer">
        这是vue里的文本
        <div class="cardCon">
            <div class="flipCon">
                <div class="face front"><img src="../assets/images/card3.jpg"></div>
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
        <div>这是时间：{{time}}</div>
        <div class="triangle"></div>
        <div class="iconCon">
            <i class="iconfont icon-shouji1"></i>
            <i class="iconfont icon-saoma"></i>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                time: 0
            }
        },
        mounted() {
            setInterval(()=>{
                this.time += 1;
            }, 1000)
        },
        methods:{
            getNum: function(){

            }
        }
    }
</script>
<style lang = "scss" scoped>
    @import "../scss/main.scss";
    @import "../scss/_flip.scss";
    @import "../scss/_music.scss";
</style>