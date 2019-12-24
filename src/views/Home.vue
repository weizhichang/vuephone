<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header :city="city"></home-header>
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
import axios from 'axios'

export default {
  name: 'home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeDujia,
    HomePiao,
  },
  data:function(){
    return{
      city:''
    }
  },
  methods:{
    getHomeInfo:function(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSuncc)
    },
     getHomeInfoSuncc:function(res){
       console.log(res);
       res=res.data;
       if(res.ret&&res.data){
         const data = res.data
         this.city=res.data.city;
       }
       console.log(res);
     }
  },
  mounted(){
    this.getHomeInfo()
  },
}
</script>
