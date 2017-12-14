<template>
    <component :is="path"></component>
</template>

<script>
    import SignIn from './SignIn'
    import SignUp from './SignUp'
    export default {
        props:['path'],
        components:{
            SignIn,
            SignUp
        }
    }
</script>
