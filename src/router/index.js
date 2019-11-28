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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:(resolve) => require(['../views/found-villageStar/index.vue'], resolve)
      },
      {
        path: '/starInfo',
        name: 'starInfo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:(resolve) => require(['../views/found-villageStar/star-info/index.vue'], resolve)
      },
      {
        path: '/volunteerVideo',
        name: 'volunteerVideo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component:(resolve) => require(['../views/found-villageStar/volunteer-video/index.vue'], resolve)
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
