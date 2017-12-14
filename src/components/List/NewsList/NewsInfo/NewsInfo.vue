<template>

    <mt-popup v-model="popupVisible" :position="position" :modal="false">
        <div class="news_info">
            <div class="news_info_wrap">
                <div class="news_info_title">
                    
                        <span class="news_info_back" @click="visible">&#xe663;</span>
                    
                    <p>{{title}}</p>
                </div>
                <h4>
                    {{data.newstitle}}
                </h4>
                <div v-html="data.content"></div>
            </div>
        </div>
    </mt-popup>
    
</template>

<script>
    import Vue from 'vue'
    import { Popup } from 'mint-ui'
    import 'mint-ui/lib/style.css'
    Vue.component(Popup.name, Popup);
    import './css/newsInfo.css'
    export default {
        data(){
            return {
                data: {},
                popupVisible: true,
                position: 'right',
                modal: true,
                title: ''
            }
        },
        mounted() {
            this.title = this.$route.query.title;
            fetch('http://692060.ichengyun.net/api/cms/news/newsdetail.php',{
                method: "POST",
                headers:{
                    "Content-type": 'application/x-www-form-urlencoded;charset=utf-8'
                },
                body: `id=${this.$route.params.id}`
            })
                .then( res => res.json() )
                .then( data => {
                    this.data = data;
                })
        },
        methods:{
            visible:function (){
                this.popupVisible = false;
                setTimeout(() => {
                    this.$router.back();
                }, 200);
                
            }
        }
    }
</script>


