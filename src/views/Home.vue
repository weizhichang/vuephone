<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header></home-header>
    <home-icons></home-icons>
    <home-swiper></home-swiper>
     <home-dujia></home-dujia>
     <home-piao></home-piao>
  </div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './Icons.vue'
import HomeDujia from './Dujia.vue'
import HomePiao from './Piao.vue'

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeDujia,
    HomePiao,
  }
}
</script>
