
import Vue from 'vue'
import router from './router/router.js'
import App from './App'
new Vue({
    el: '#app',
    router,
    template: `<App />`,
    components: {
        App
    }
})