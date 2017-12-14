
<template>
    <div>
        <VHeader :toggle='toggle' :tabClass='tabClass'></VHeader>
        <Sign :path='path'></Sign>
    </div>
</template>

<script>
    import VHeader from './Header'
    import Sign from './Sign'
    export default {
        data(){
            return {
                path: 'SignIn',
                tabClass: 0
            }
        },
        methods:{
            toggle: function (path, inx) {
                this.path = path;
                this.tabClass = inx;
            }
        },
        components:{
            VHeader,
            Sign
        }
    }
</script>
