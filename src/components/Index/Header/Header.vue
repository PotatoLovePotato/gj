
<template>
    <!-- 头部 -->
    <header class="header">
        <h2>
            My<br>
            Robot
        </h2>
        <VNav :toggle='toggle' :tabClass='tabClass'></VNav>
    </header>
</template>

<script>
    import './css/style.css'
    import VNav from './Nav'
    export default {
        props:['toggle','tabClass'],
        components:{
            VNav
        }
    }
</script>
