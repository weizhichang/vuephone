import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,//在ES6中，键名等于值时，可以简写成一个，也可以写成router:router
  store,
  render: h => h(App)
}).$mount('#app')




