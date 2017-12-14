<template>
    <nav>
        <ul class="hd_nav_login clearfix">
            <li v-for=' (item,index) in data '>
                <a href="javascript:;" :class="{ hd_nav_active: tabClass == index }" @click='toggle(item.view,index, index)'>{{item.btn}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data(){
            return {
                data:[
                    {
                        btn: 'Sign In',
                        view: 'SignIn'
                    },
                    {
                        btn: 'Sign Up',
                        view: 'SignUp'
                    }
                ]
            }
        },
        props:['toggle','tabClass']
    }
</script>

