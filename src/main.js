// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/* eslint-disable  */
Vue.config.productionTip = false
import 'common/index.css'
import 'common/reset.js'

import { Lazyload, MessageBox, Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Lazyload)
Vue.prototype.$msg = MessageBox
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import axios from 'axios'
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
