<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header></home-header>
    <home-icons></home-icons>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from './Header.vue'
import HomeSwiper from './Swiper.vue'
import HomeIcons from './Icons.vue'



export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
  }
}
</script>
