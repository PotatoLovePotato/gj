<template>
    <!-- 头部 -->
    <header class="chat_header">
        <router-link :to="{path: '/list'}">
            <span class="chat_hd_back">&#xe663;</span>
        </router-link>
        <div>
            <h4>{{name}}</h4>
            <h6>{{state}}</h6>
        </div>

    </header>
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                state: ''
            }
        },
        mounted:function(){
            this.name = this.$route.query.name,
            this.state = this.$route.query.state ? 'Online Now' : 'Not online Now'
        }
    }
</script>
