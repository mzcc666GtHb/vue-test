// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import apiConfig  from '@/api'
import '~/mint-ui/lib/style.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(iView, {
  transfer: true,
  size: 'default'
});
 // import axios from 'axios'

Vue.config.productionTip = false
// Vue.prototype.$http = axios
Vue.use(Mint)
Vue.use(apiConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
