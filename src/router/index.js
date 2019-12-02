import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'index',
    component:(resolve) => require(['../views/index/index.vue'], resolve)
  },
  {
    path: '/homepage',
    // name: 'homepage',
    component:(resolve) => require(['../views/Home.vue'], resolve),
    children:[
      {
        path: '/villageStar',
        name: 'villageStar',
        component:(resolve) => require(['../views/brand-project/found-villageStar/index.vue'], resolve)
      },
      {
        path: '/starInfo',
        name: 'starInfo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/star-info/index.vue'], resolve)
      },
      {
        path: '/volunteerVideo',
        name: 'volunteerVideo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/volunteer-video/index.vue'], resolve)
      },
      {
        path: '/starNewsDetail',
        name: 'starNewsDetail',
        component:(resolve) => require(['../views/brand-project/found-villageStar/star-detail/index.vue'], resolve)
      },
      {
        path: '/infoList',
        name: 'infoList',
        component:(resolve) => require(['../views/brand-project/found-villageStar/info-list/index.vue'], resolve)
      },
      {
        path: '/videoList',
        name: 'videoList',
        component:(resolve) => require(['../views/brand-project/found-villageStar/video-list/index.vue'], resolve)
      },
      {
        path: '/volunteerInfo',
        name: 'volunteerInfo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/volunteer-info/index.vue'], resolve)
      },{
        path: '/register',
        name: 'register',
        component:(resolve) => require(['../views/register/index.vue'], resolve)
      },
      {
        path: '/login',
        name: 'login',
        component:(resolve) => require(['../views/login/index.vue'], resolve)
      },
      {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component:(resolve) => require(['../views/forget-password/index.vue'], resolve)
      },
      {
        path: '/brandProject',
        name: 'brandProject',
        component:(resolve) => require(['../views/brand-project/index.vue'], resolve)
      },
      {
        path: '/volunteerNews',
        name: 'volunteerNews',
        component:(resolve) => require(['../views/volunteer-news/index.vue'], resolve)
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
});

export default router
