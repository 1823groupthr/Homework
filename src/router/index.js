import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//引入组件
import WorkPage from 'pages/Workpage/Workpage'
import GroupPage from 'pages/Grouppage/Grouppage'
import HomePage from 'pages/Homepage/Homepage'
import PublishPage from 'pages/Publishpage/Publishpage'
import MyPage from 'pages/Mypage/Mypage'
export default new Router({
  routes: [
    {
      path: '/homepage',
      name: '/homepage',
      component: HomePage
    },
    {
      path: '/workpage',
      name: '/workpage',
      component: WorkPage
    },
    {
      path: '/grouppage',
      name: '/grouppage',
      component: GroupPage
    },
    {
      path: '/publishpage',
      name: '/publishpage',
      component: PublishPage
    },
    {
      path: '/mypage',
      name: '/mypage',
      component: MyPage
    },
    {
      path: '/',
      component: HomePage
    }
  ]
})
