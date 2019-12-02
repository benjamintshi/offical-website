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
        path: '/brandProject',
        name: 'brandProject',
        component:(resolve) => require(['../views/brand-project/index.vue'], resolve)
      },
      {
        path: '/villageStar',
        name: 'villageStar',
        component:(resolve) => require(['../views/brand-project/found-villageStar/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/starInfo',
        name: 'starInfo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/star-info/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/volunteerVideo',
        name: 'volunteerVideo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/volunteer-video/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/starNewsDetail',
        name: 'starNewsDetail',
        component:(resolve) => require(['../views/brand-project/found-villageStar/star-detail/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/starNewsList',
        name: 'starNewsList',
        component:(resolve) => require(['../views/brand-project/found-villageStar/star-news-list/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/infoList',
        name: 'infoList',
        component:(resolve) => require(['../views/brand-project/found-villageStar/info-list/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/videoList',
        name: 'videoList',
        component:(resolve) => require(['../views/brand-project/found-villageStar/video-list/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
      },
      {
        path: '/volunteerInfo',
        name: 'volunteerInfo',
        component:(resolve) => require(['../views/brand-project/found-villageStar/volunteer-info/index.vue'], resolve),
        meta: {
          parentName: "brandProject"
        }
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
        path: '/volunteerNews',
        name: 'volunteerNews',
        component:(resolve) => require(['../views/volunteer-news/index.vue'], resolve)
      },
      {
        path: '/newsDetail',
        name: 'newsDetail',
        component:(resolve) => require(['../views/volunteer-news/news-detail/index.vue'], resolve),
        meta: {
          parentName: "volunteerNews"
        }
      },
      {
        path: '/trainDetail',
        name: 'trainDetail',
        component:(resolve) => require(['../views/volunteer-news/train-detail/index.vue'], resolve),
        meta: {
          parentName: "volunteerNews"
        }

      },
      {
        path: '/policyFileDetail',
        name: 'policyFileDetail',
        component:(resolve) => require(['../views/volunteer-news/file-detail/index.vue'], resolve),
        meta: {
          parentName: "volunteerNews"
        }
      },
      {//新时代文明实践中心
        path: '/practiceCenter',
        name: 'practiceCenter',
        component:(resolve) => require(['../views/practice-center/index.vue'], resolve),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
   // base: process.env.VUE_APP_BASE_URL,
  routes
});
console.log('test:'+ process.env.VUE_APP_BASE_URL);
export default router
