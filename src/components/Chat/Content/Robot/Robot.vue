<template>
    <div class='robot'>
        <span :style="{
                backgroundImage: `url(${imgsrc ? imgsrc : url })` 
            }"></span>
        <p class='msg'>
            {{res}}
            <a :href="url" v-if="url">{{url}}</a>
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgsrc: '',
                name: ''
            }
        },
        props:['res','url'],
        mounted:function(){
            this.imgsrc = this.$route.query.imgsrc;
            this.name = this.$route.query.name;
        }
    }
</script>
