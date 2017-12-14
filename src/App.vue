<template>
    <transition name="late">
        <router-view></router-view>
    </transition>
</template>


<style>

.late-enter-active, .late-leave-active{
    transition: all 0.5s ease
}
         
.late-enter, .late-leave-active{
    transform: translateX(-100%)
}

</style>