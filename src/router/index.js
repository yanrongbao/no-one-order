import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//配置路由
const routes = [
    { path: '/start', component: resolve => require(['../components/Start.vue'], resolve) },
    { path: '/home', component: resolve => require(['../components/Home.vue'], resolve) },
    { path: '/hot', component: resolve => require(['../components/Hot.vue'], resolve) },
    { path: '/order', component: resolve => require(['../components/Order.vue'], resolve) },
    { path: '/pcontent', component: resolve => require(['../components/Pcontent.vue'], resolve) },
    { path: '/search', component: resolve => require(['../components/Search.vue'], resolve) },
    { path: '/cart', component: resolve => require(['../components/Cart.vue'], resolve) },
    { path: '/editpeopleinfo', component: resolve => require(['../components/editPeopleInfo.vue'], resolve) },
    { path: '*', redirect: '/start' }
]

//实例化router
export default new Router({
    routes
})