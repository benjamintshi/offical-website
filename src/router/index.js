import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path: '/villageStar',
        name: 'villageStar',
        component:(resolve) => require(['../views/found-villageStar/index.vue'], resolve)
      },
      {
        path: '/starInfo',
        name: 'starInfo',
        component:(resolve) => require(['../views/found-villageStar/star-info/index.vue'], resolve)
      },
      {
        path: '/volunteerVideo',
        name: 'volunteerVideo',
        component:(resolve) => require(['../views/found-villageStar/volunteer-video/index.vue'], resolve)
      },
      {
        path: '/videoList',
        name: 'videoList',
        component:(resolve) => require(['../views/found-villageStar/video-list/index.vue'], resolve)
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
