<template>
    <div>
        <ListHead></ListHead>
        <router-view></router-view>
        <ListFoot></ListFoot>
    </div>
</template>

<script>
    import ListHead from './ListHead'
    import ListFoot from './ListFoot'
    export default {
        components:{
            ListHead,
            ListFoot
        },
        activated(){
            console.log('list')
        }
    }
</script>
