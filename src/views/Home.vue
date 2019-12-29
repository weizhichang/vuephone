<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header></home-header>
    <home-icons :icons_info="icons_info"></home-icons>
    <home-swiper :swiper_images="swiper_images"></home-swiper>
     <home-dujia :dujia_info="dujia_info"></home-dujia>
     <home-piao :piao_info="piao_info"></home-piao>
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
      piao_info:[],
      icons_info:{},
      dujia_info:[],
      swiper_images:[],
    }
  },
  methods:{
    getHomeInfo:function(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSuncc)
    },
     getHomeInfoSuncc:function(res){
      //  console.log(res);
       res=res.data;
       if(res.ret&&res.data){
         const data = res.data
         this.piao_info = data.piao_info;
         this.icons_info=data.icons_info;
         this.dujia_info=data.dujia_info;
         this.swiper_images=data.swiper_images;
        
       }
      //  console.log(this.icons_info);
     }
  },
  mounted(){
    this.getHomeInfo()
  },
}
</script>
