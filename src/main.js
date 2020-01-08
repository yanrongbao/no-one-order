import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'

import router from './router'

import VueSocketIO from 'vue-socket.io'

import storage from './model/storage'

const roomId = window.location.hash.split('=')[1]

storage.set('roomId', roomId)

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://a.itying.com/?roomId=' + roomId,
    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
    // options: { path: "/my-app/" } //Optional options
}))

Vue.use(VueResource)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
