import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //首页
  {
    path: '/',
    name: 'index',
    component:(resolve) => require(['../views/index/index.vue'], resolve),
  },
  {
    path: '/map',
    name: 'map',
    component:(resolve) => require(['../views/index/map/index.vue'], resolve),
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
      },
      {//新时代文明实践中心
        path: '/practiceCenterDetail',
        name: 'practiceCenterDetail',
        component:(resolve) => require(['../views/practice-center/detail/index.vue'], resolve),
      },
      {//学习园地cultivate-list
        path: '/studyCenter',
        name: 'studyCenter',
        component:(resolve) => require(['../views/study-center/index.vue'], resolve),
      },
      {//学习园地-线下培训
        path: '/cultivateList',
        name: 'cultivateList',
        component:(resolve) => require(['../views/study-center/cultivate-list/index.vue'], resolve),
        meta: {
          parentName: "studyCenter"
        }
      },
      {//学习园地-理论文献
        path: '/literatureLst',
        name: 'literatureLst',
        component:(resolve) => require(['../views/study-center/literature-list/index.vue'], resolve),
        meta: {
          parentName: "studyCenter"
        }
      },
      {//学习园地-培训详情
        path: '/cultivateDetail',
        name: 'cultivateDetail',
        component:(resolve) => require(['../views/study-center/cultivate-detail/index.vue'], resolve),
        meta: {
          parentName: "studyCenter"
        }
      },
      {//学习园地-文献正文
        path: '/literatureDetail',
        name: 'literatureDetail',
        component:(resolve) => require(['../views/study-center/literature-detail/index.vue'], resolve),
        meta: {
          parentName: "studyCenter"
        }
      },
      {//活动信息
        path: '/activityInfo',
        name: 'activityInfo',
        component:(resolve) => require(['../views/activity-info/index.vue'], resolve),

      },
      {//活动信息详情
        path: '/activityDetail',
        name: 'activityDetail',
        component: (resolve) => require(['../views/activity-info/detail/index.vue'], resolve),
        meta: {
          parentName: "activityInfo"
        }
      },
      {//活动招募
        path: '/activityRecruit',
        name: 'activityRecruit',
        component:(resolve) => require(['../views/activity-recruit/index.vue'], resolve),
      },
      {//活动招募详情
        path: '/volunteerRecruitDetail',
        name: 'volunteerRecruitDetail',
        component: (resolve) => require(['../views/activity-recruit/detail/index.vue'], resolve),
        meta: {
          parentName: "activityRecruit"
        }
      },
      {//志愿团队
        path: '/volunteerTeam',
        name: 'volunteerTeam',
        component:(resolve) => require(['../views/activity-recruit/volunteer-team/index.vue'], resolve),
        meta: {
          parentName: "activityRecruit"
        }
      },
      {//志愿团队详情
        path: '/volunteerTeamDetail',
        name: 'volunteerTeamDetail',
        component:(resolve) => require(['../views/activity-recruit/team-detail/index.vue'], resolve),
        meta: {
          parentName: "activityRecruit"
        }
      },
      {//志愿团队详情
        path: '/volunteerApply',
        name: 'volunteerApply',
        component:(resolve) => require(['../views/activity-recruit/apply/index.vue'], resolve),
        meta: {
          parentName: "activityRecruit"
        }
      },
      {//个人中心
        path: '/personalCenter',
        // name: 'personalCenter',
        component:(resolve) => require(['../views/personal-center/index.vue'], resolve),
        children:[
          {
            path: '/personalInfo',
            name: 'personalInfo',
            component:(resolve) => require(['../views/personal-center/personal-info/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 个人服务介绍
          {
            path: '/serviceDesc',
            name: 'serviceDesc',
            component:(resolve) => require(['../views/personal-center/service-desc/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 参加过的团队
          {
            path: '/joinedTeam',
            name: 'joinedTeam',
            component:(resolve) => require(['../views/personal-center/joined-team/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 服务记录
          {
            path: '/serviceRecord',
            name: 'serviceRecord',
            component:(resolve) => require(['../views/personal-center/service-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 参与活动记录
          {
            path: '/activityRecord',
            name: 'activityRecord',
            component:(resolve) => require(['../views/personal-center/activity-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 积分累计记录honour-record
          {
            path: '/integralRecord',
            name: 'integralRecord',
            component:(resolve) => require(['../views/personal-center/integral-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 表彰记录
          {
            path: '/honourRecord',
            name: 'honourRecord',
            component:(resolve) => require(['../views/personal-center/honour-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 评价反馈记录certificate
          {
            path: '/evaluationRecord',
            name: 'evaluationRecord',
            component:(resolve) => require(['../views/personal-center/evaluation-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 证书
          {
            path: '/certificate',
            name: 'certificate',
            component:(resolve) => require(['../views/personal-center/certificate/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
          // 证书
          {
            path: '/trainRecord',
            name: 'trainRecord',
            component:(resolve) => require(['../views/personal-center/train-record/index.vue'], resolve),
            meta: {
              parentName: "personalCenter"
            }
          },
        ]
      },
      {//个人消息
        path: '/news',
        name: 'news',
        component:(resolve) => require(['../views/other/news/index.vue'], resolve),
      },
      {//个人消息
        path: '/inform',
        name: 'inform',
        component:(resolve) => require(['../views/other/inform/index.vue'], resolve),
      },
      {//联系我们
        path: '/contactUs',
        name: 'contactUs',
        component:(resolve) => require(['../views/other/contact-us/index.vue'], resolve),
      },
      {//信息查询
        path: '/queryInfo',
        name: 'queryInfo',
        component:(resolve) => require(['../views/query-info/index.vue'], resolve),
      },
      {//搜索
        path: '/search',
        name: 'search',
        component:(resolve) => require(['../views/search/index.vue'], resolve),
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'hash',
   // base: process.env.VUE_APP_BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // keep-alive 返回缓存页面后记录浏览位置
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    // 异步滚动操作
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 1 });
      }, 0);
    });
  }
});
console.log('test:'+ process.env.VUE_APP_BASE_URL);
export default router
