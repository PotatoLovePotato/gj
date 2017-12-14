<template>
    <div>
        <div class="list_con">
            <ListConHead :recent="recent" :addRecent="addRecent"></ListConHead>
            <Listcontent :imgData="all" :addRecent="addRecent"></Listcontent>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import ListConHead from './ListConHead'
    import Listcontent from './Listcontent'
    export default {
        data(){
            return {
                recent: [],
                all:[
                    {
                        img: require('./img/img1.png'),
                        name: "Alisa",
                        state: false,
                        id: 1
                    },
                    {
                        img: require('./img/img2.png'),
                        name: "Kristian",
                        state: true,
                        id: 2
                    },
                    {
                        img: require('./img/img3.png'),
                        name: "Tony",
                        state: false,
                        id: 3
                    },
                    {
                        img: require('./img/img4.png'),
                        name: "Erick",
                        state: true,
                        id: 4
                    },
                    {
                        img: require('./img/img5.png'),
                        name: "Madalena",
                        state: true,
                        id: 5
                    },
                    {
                        img: require('./img/img6.png'),
                        name: "Agathas",
                        state: true,
                        id: 6
                    },
                    {
                        img: require('./img/img7.png'),
                        name: "Recreate",
                        state: true,
                        id: 7
                    },
                    {
                        img: require('./img/img8.png'),
                        name: "Budapest",
                        state: true,
                        id: 8
                    },
                    {
                        img: require('./img/img9.png'),
                        name: "Webstorm",
                        state: false,
                        id: 9
                    },
                    {
                        img: require('./img/img10.png'),
                        name: "Hbuild",
                        state: true,
                        id: 10
                    },
                    {
                        img: require('./img/img11.png'),
                        name: "Vscode",
                        state: false,
                        id: 11
                    },
                    {
                        img: require('./img/img12.png'),
                        name: "Atom",
                        state: true,
                        id: 12
                    }
                ]
            }
        },
        methods:{
            addRecent:function(obj){
                const ls = localStorage;
                if(ls.recentList){
                    for(let i = 0,len = this.recent.length; i < len; i++){
                        if(this.recent[i].id == obj.id){
                            this.recent.splice(i,1);
                            this.recent.unshift(obj);
                            ls.recentList = JSON.stringify(this.recent);
                            return false;
                        }
                    }
                    this.recent.unshift(obj);
                    ls.recentList = JSON.stringify(this.recent);
                }else{
                    this.recent.unshift(obj);
                    ls.recentList = JSON.stringify(this.recent);
                }
            }
        },
        mounted:function(){
            this.recent = localStorage.recentList ? JSON.parse(localStorage.recentList) : []
        },
        components:{
            ListConHead,
            Listcontent
        }
    }
</script>

<style>
    .list_con{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        position: fixed;
        left: 0;top: 0;
        box-sizing: border-box;
    }
</style>
