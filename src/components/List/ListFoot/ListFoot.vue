<template>
    <footer class="list_foot">
        <div class="list_foot_wrap">
            <div>
                <router-link to="/list/robot">
                    <span>&#xe600;</span>
                </router-link>
            </div>
            <div>
                <router-link to="/list/newslist">
                    <span>&#xe631;</span>
                </router-link>
            </div>
            <div>
                <span>&#xe732;</span>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods:{
            toggle: function (x){
                this.active[this.old] = false;
                this.active[x] = true;
                this.old = x;
            }
        }
    }
</script>


<style>
    .list_foot .router-link-exact-active{
        color: #85b2f6;
    }
    .router-link-active{
        color: #333;
    }
    a{
        color: #333;
    }
    .list_foot a::active{
        color: #333;
    }
    .list_foot{
        width: 100%;
        height: 84px;
        padding: 0 32px;
        box-shadow: 0 -2px 10px #f4f8fe;
        background: #fff;
        box-sizing: border-box;
        position: fixed;
        left: 0;bottom: 0;
    }
    .list_foot_wrap{
        display: flex;
    }
    .list_foot_wrap div{
        flex: 1;
        text-align: center;
        font-size: 40px;
        line-height: 84px;
    }
    .list_foot_wrap div span{
        display: inline-block;
        width: 84px;
        font-family: 'iconfont';
    }
</style>