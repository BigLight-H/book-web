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
import $ from 'jquery'
import 'view-design/dist/styles/iview.css';
import axios from 'axios'


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
});

router.afterEach( ( to, from, next ) => {
  setTimeout(()=>{
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?15a169ba14d71dd1d04a4551f17fa6a0";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  },0);
} );
