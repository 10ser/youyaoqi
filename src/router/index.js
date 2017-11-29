import Vue from 'vue'
import Router from 'vue-router'
// 首页
const Home = resolve => require(['pages/Home/Home.vue'], resolve)
// 搜索页
const Search = resolve => require(['pages/Search/Search.vue'], resolve)
// 个人主页
const Mine = resolve => require(['pages/Mine/Mine.vue'], resolve)
// 登录页面
const Login = resolve => require(['pages/Login/Login.vue'], resolve)
// 注册页面
const Regsiter = resolve => require(['pages/Login/Regsiter.vue'], resolve)
// 漫画详情页面
const BookShow = resolve => require(['pages/Book-show/Book-show.vue'], resolve)
// 分类页面
const Classify = resolve => require(['pages/Classify/Classify.vue'], resolve)
// 书架页面
const Fav = resolve => require(['pages/Fav/Fav.vue'], resolve)
// 阅读页面
const Read = resolve => require(['pages/Read/Read.vue'], resolve)
// 目录页面
const Catalogue = resolve => require(['pages/Catalogue/Catalogue.vue'], resolve)
// 排行页面
const Rank = resolve => require(['pages/Rank/Rank.vue'], resolve)
// 评论页面
const Comment = resolve => require(['pages/Book-show/Comment.vue'], resolve)
// VIP页面
const VIP = resolve => require(['pages/Vip/Vip.vue'], resolve)
// 充值页面
const Recharge = resolve => require(['pages/Vip/Recharge.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/book-show/:books_id',
      name: 'Book',
      component: BookShow
    },
    {
      path: '/regsiter',
      name: 'Regsiter',
      component: Regsiter
    },
    {
      path: '/classify/:classId',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/fav',
      name: 'Fav',
      component: Fav
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: Catalogue
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/vip',
      name: 'Vip',
      component: VIP
    },
    {
      path: '/recharge',
      name: 'Recharge',
      component: Recharge
    }
  ]
})
