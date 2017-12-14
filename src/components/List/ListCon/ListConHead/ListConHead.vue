<template>
    <div class='recent'>
        <h3 class="list_tit">REСENT CONTACT</h3>
        <div class="recent_info">
            <div class="recent_info_wrap clearfix" :style="{
                width: `${176 * recent.length - 26}px`
            }">
                <div v-for="i in recent" class="item itemState" :class="{itemStateR: !i.state}" :style="{
                    backgroundImage: `url(${i.img})`
                }" @click="addRecent(i)">
                    <router-link :to="{
                        path: '/list/robot/chat',
                        query:{
                            imgsrc: i.img,
                            name: i.name,
                            state: i.state
                        }
                    }"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['recent','addRecent']
    }
</script>

<style>
    
    .list_con{
        padding: 116px 32px;
    }
    .list_tit{
        width: 574px;
        height: 55px;
        line-height: 56px;
        font-size: 28px;
        margin: 0 auto;
        font-weight: normal;
        text-align: center;
        border-bottom: 1px solid #c8cfd9;
    }
    .recent_info{
        overflow-x: scroll;
        transition: all .3s;
    }
    .recent_info_wrap{
        padding: 50px 0;
    }
    .recent_info_wrap .itemState:after{
        top: 5%;
        right: 5%;
    }
    .item{
        width: 150px;
        height: 150px;
        line-height: 150px;
        float: left;
        border-radius: 50%;
        margin-right: 26px;
        margin-bottom: 20px;
        background-position: center;
        background-repeat: no-repeat;
    }
    .item:last-child{
        margin-right: 0;
    }
    .item a{
        display: block;
        height: 150px;
    }
</style>
