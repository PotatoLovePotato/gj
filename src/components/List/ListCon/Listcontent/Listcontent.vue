<template>
    <div class="list_wrap">
        <div class="list_all">
        <h3 class="list_tit">REСENT CONTACT</h3>
        <div class="list_all_info">
            <div class="list_all_info_wrap clearfix">
                <div class="add_robot">&#xe601;</div>
                <dl v-for="item in imgData" class="items">
                    <dt class="itemMax itemState" :class="{itemStateR: !item.state}" :style="{
                        backgroundImage: `url(${item.img})`
                    }" @click="addRecent(item)" >
                        <router-link :to="{
                            path: '/list/robot/chat',
                            query:{
                                imgsrc: item.img,
                                name: item.name,
                                state: item.state
                            }}"></router-link>
                    </dt>
                    <dd>{{item.name}}</dd>
                </dl>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    
    export default {
        props:['imgData','addRecent']
    }
</script>


<style>
    
    .itemState{
        position: relative;
    }
    .itemState:after{
        content: '';
        width: 24px;
        height: 24px;
        border: 2px solid #fff;
        background: #53de38;
        border-radius: 50%;
        position: absolute;
        right: 10%;top: 5%;
    }
    .itemStateR:after{
        background: #fc5857;
    }
    .add_robot{
        width: 188px;
        height: 188px;
        border: 3px dashed #c8cfd9;
        border-radius: 50%;
        font-family: 'iconfont';
        font-size: 48px;
        text-align: center;
        line-height: 188px;
        color: #85b2f6;
        float: left;
        margin-right: 48px;
    }
    .list_all_info{
        overflow: hidden;
    }
    .list_all_info_wrap{
        padding-top: 40px;
        margin-right: -48px;
    }
    .list_all_info_wrap dl{
        float: left;
        margin-right: 48px;
        font-size: 25px;
        text-align: center;
    }
    .itemMax{
        width: 194px;
        height: 194px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat; 
    }
    .itemMax a{
        display: block;
        height: 194px;
    }
    .items{
        margin-bottom: 28px;
    }
    .items dd{
        padding: 18px 0;
    }
    
</style>
