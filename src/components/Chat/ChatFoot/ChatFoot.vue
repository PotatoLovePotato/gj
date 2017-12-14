<template>
    <!-- 底部 -->
    <footer class='footer'>
        <div class="message">
            <input type="text" name="message" placeholder="Write a message ..." v-model="word" v-on:keyup='requset'>
            <span>&#xe61f;</span>
        </div>
        <div class="tools">
            <div>&#xe64b;</div>
            <div>&#xe645;</div>
            <div>&#xe647;</div>
            <div>&#xe750;</div>
            <div>&#xe6de;</div>
            <div>&#xe689;</div>
        </div>
    </footer>
</template>

<script>
    export default {
        data(){
            return {
                word: ''
            }
        },
        props:['req'],
        methods:{
            requset:function (e) {
                if(e.keyCode == 13){
                    if(this.word === '') return false;
                    this.req(this.word)
                    this.word = '';
                }
            }
        }
    }
</script>

