// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'
//
// Vue.config.productionTip = false
//
// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import querystring from 'querystring'
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(VueRouter); //使用iview组件
Vue.use(ViewUI);
Vue.prototype.$qs = querystring;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
