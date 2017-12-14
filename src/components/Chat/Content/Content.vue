<template>
    <div class="content">
        <ul class='contentWrap'>

            <li v-for='i in res'>
                <div v-for="user in i.user">
                    <User  :ems='user.msg' v-if='i.user !== undefined'></User>
                </div>
                <div v-for="robot in i.robot">
                    <Robot  :res='robot.msg' :url='robot.url' v-if='i.robot !== undefined'></Robot>
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import User from './User'
    import Robot from './Robot'

    export default {
        props:['res'],
        components:{
            User,
            Robot
        }
    }
</script>
