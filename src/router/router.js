
import Vue from 'vue';
import Router from 'vue-router';
import Chat from '../components/Chat';
import Index from '../components/Index';
import List from '../components/List'
import ListCon from '../components/List/ListCon'
import NewsList from '../components/List/NewsList'
import NewsInfo from '../components/List/NewsList/NewsInfo'

Vue.use(Router);

const login = new Router({
    routes: [
        {
            path: '/list',
            component: List,
            redirect: "/list/robot",
            children:[
                {
                    path: 'robot',
                    component: ListCon,
                    children:[
                        {
                            path: 'chat',
                            component: Chat
                        }
                    ]
                },
                {
                    path: 'newslist',
                    component: NewsList,
                    children:[
                        {
                            path: 'newsinfo/:id',
                            component: NewsInfo
                        },
                    ]
                },
                {
                    path: '*',
                    redirect: '/list/robot'
                }
            ]
        },
        {
            path: '*',
            redirect: '/list/robot'
        }
    ]
})

const unLogin = new Router({
    routes:[
        {
            path: '/',
            component: Index
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
const ls = localStorage;
export default ls.loginState === 'true' ? login : unLogin;