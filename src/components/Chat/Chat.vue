<template>
    <div>
        <ChatHead></ChatHead>
        <VContent :res='arr' ></VContent>
        <ChatFoot :req='req' ></ChatFoot>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ChatHead from './ChatHead'
    import VContent from './Content'
    import ChatFoot from './ChatFoot'
    import './css/chat.css'
    export default {
        data(){
            ( () => {
                this.$nextTick(() => {
                    var container = this.$el.querySelector(".contentWrap");
                    container.scrollTop = container.scrollHeight;
                })
            })();
            return {
                arr: [],
                name: this.$route.query.name
            }
        },
        mounted:function(){
            const ls = localStorage;
            this.arr = ls[this.name] ? JSON.parse(ls[this.name]) : [];
        },
        methods:{
            req:function (x) {
                this.arr.push({
                    user:[],
                    robot: []
                });
                this.arr[this.arr.length - 1].user.push({msg: x})
                fetch(`http://692060.ichengyun.net/api/r/r.php?data=${x}`)
                    .then( res => res.json() )
                    .then( data => {
                        this.arr[this.arr.length - 1].robot.push({
                            msg: data.text,
                            url: data.url
                        })
                        Vue.set(this.arr, this.arr.length - 1, this.arr[this.arr.length - 1])
                        localStorage[this.name] = JSON.stringify(this.arr);
                    })
            },
            chat:function(x){
                
            }
        },
        components:{
            ChatHead,
            VContent,
            ChatFoot
        },
        watch:{
            arr(){
                this.$nextTick(() => {
                    var container = this.$el.querySelector(".contentWrap");
                    container.scrollTop = container.scrollHeight;
                })

            }
        }
    }
</script>
