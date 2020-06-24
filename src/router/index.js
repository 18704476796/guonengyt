import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/index/Index.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 解决方案
      path: '/solution',
      name: 'Solution',
      component: resolve => require(['@/pages/solution/Solution.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 免费体验
      path: '/feelTrial',
      name: 'FeelTrial',
      component: resolve => require(['@/pages/feelTrial/FeelTrial.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 客户案例
      path: '/customerCase',
      name: 'CustomerCase',
      component: resolve => require(['@/pages/customerCase/CustomerCase.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 新闻动态
      path: '/newsTrends',
      name: 'NewsTrends',
      component: resolve => require(['@/pages/newsTrends/NewsTrends.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 公司介绍
      path: '/companyIntroduce',
      name: 'CompanyIntroduce',
      component: resolve => require(['@/pages/companyIntroduce/CompanyIntroduce.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 加入我们
      path: '/joinUs',
      name: 'JoinUs',
      component: resolve => require(['@/pages/joinUs/JoinUs.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 联系我们
      path: '/contactUs',
      name: 'ContactUs',
      component: resolve => require(['@/pages/contactUs/ContactUs.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 服务流程
      path: '/service',
      name: 'Service',
      component: resolve => require(['@/pages/service/Service.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 详情页
      path: '/detail-pages',
      name: 'DetailPages',
      component: resolve => require(['@/pages/detail-pages/DetailPages.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    },
    { // 合作伙伴
      path: '/partner',
      name: 'Partner',
      component: resolve => require(['@/pages/partner/Partner.vue'], resolve),
      meta: {
        requireAuth: false // 判断是否需要登录
      }
    }
  ]
})
