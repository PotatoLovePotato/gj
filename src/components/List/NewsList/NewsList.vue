<template>
    <div>
        <div class="news_wrap">
            <div class="news_wrap_scroll">
                <ul v-infinite-scroll="more" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <li v-if="data" v-for="item in data">
                        <h4>
                            <router-link :to="{
                                path: `newslist/newsinfo/${item.id}`,
                                query: {
                                    title: item.title
                                }
                            }">
                                {{item.title}}
                            </router-link>
                        </h4>
                        <p>{{item.description}}</p>
                    </li>
                </ul>
                <div class="notmore" v-if="loadEnd">
                    <span>
                        身体被掏空了
                    </span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { Toast } from 'mint-ui';
    import './css/newslist.css';
    Vue.use(InfiniteScroll);

    export default {
        data(){
            return {
                data: null,
                listId: '100000000000',
                loading: false,
                loadEnd: false
            }
        },
        methods:{
            req:function(){
                fetch(`http://692060.ichengyun.net/api/cms/news/newslist_lazy.php?lastid=${this.listId}`)
                    .then(res => res.json() )
                    .then(data => {
                        Indicator.close();
                        this.loading = false;
                        this.data = this.data ? this.data.concat(data) : data;
                        this.listId = data[data.length - 1] ? data[data.length - 1].id : '';
                        if(!this.listId){
                            this.loadEnd = true;
                        }
                    })
                    .catch( err => {
                        console.log(err);
                        MessageBox({
                            title: '提示',
                            message: '遇到了一个错误,请检查网络.点击重试?',
                            showCancelButton: true
                        }).then(action => {
                            if(action === 'confirm'){
                                this.more();
                            }else if(action === 'cancel'){
                                Indicator.close();
                            }
                            
                        });
                    })
            },
            more:function(){
                if(this.loadEnd) return false;
                Indicator.open();
                this.loading = true;
                this.req()
            }
        },
    }
</script>

