<template>
    <!-- 登陆 -->
    <div class="sign signIn">
        <div class="signIn_info">
            <p>
                <i>&#xe640;</i>
                <input type="text" name="email" placeholder="Input e-mail address" v-model="usermsg.user" @keyup="keyFn">            
            </p>
            <p>
                <i>&#xe705;</i>
                <input type="password" name="pwd" placeholder="Input password" v-model="usermsg.pwd" @keyup="keyFn">
            </p>

            <button @click="req(usermsg)" >SIGN IN</button>
            
            <div>
                <a href="javascript:;">Forgot Password</a>
            </div>
        </div>
        <transition name="fade">
            <Err v-if="err"></Err>
        </transition>
    </div>
</template>

<script>
    import Err from '../Err'
    export default {
        data(){
            return {
                usermsg: {
                    user: '',
                    pwd: ''
                },
                err: false
            }
        },
        methods:{
            keyFn:function (e) {
                e.keyCode === 13 && this.req(this.usermsg)
            },
            errToggle:function (){ 
                this.err = true;
                let timer = setTimeout( () => {
                    this.err = false;
                    clearTimeout(timer);
                },1000)
            },
            req:function(obj){
                fetch('http://692060.ichengyun.net/api/cms/news/login.php',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                    },
                    body: `username=${obj.user}&password=${obj.pwd}`
                })
                    .then( res => res.json() )
                    .then( data => {
                        data.userid ? ( localStorage.loginState = true, this.$router.go(0) ) : (localStorage.loginState = false, this.errToggle() );
                    })
            }
        },
        components:{
            Err
        }
    }
</script>

<style>
    
    .fade-enter-active, .fade-leave-active{
        transition: all 0.5s ease
    }
            
    .fade-enter, .fade-leave-active{
        opacity: 0;
    }

</style>
