import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import fastClick from 'fastclick'
import './assets/styles/iconfont.css'
import './assets/styles/variables.less'
// import 'reset-css';

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,//在ES6中，键名等于值时，可以简写成一个，也可以写成router:router
  store,
  render: h => h(App)
}).$mount('#app')




