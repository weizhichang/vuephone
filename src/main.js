import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/variables.less';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';




// import 'reset-css';

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.devtools = true

new Vue({
  router,//在ES6中，键名等于值时，可以简写成一个，也可以写成router:router
  store,
  render: h => h(App)
}).$mount('#app')




