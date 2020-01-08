import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/index.less';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import http from './utils/http.js'
import  './permission.js'

Vue.prototype.http = http   //放入全局
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
