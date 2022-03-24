
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

// 饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '../static/css/other.css'

//导入Vuex
import store from './store/index'
// 饿了么
Vue.use(ElementUI);

Vue.prototype.$axios = axios;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
