<template>
<div>
<city-header></city-header>
<city-search></city-search>
<city-list :hotcity_info="hotcity_info" :cities="cities"></city-list>
<city-alphabet :cities="cities"></city-alphabet>
</div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
   data:function(){
    return{
      hotcity_info:[],
      cities:{},
    }
  },
    methods:{
    getCityInfo:function(){
      axios.get('/api/city.json')
      .then(this.getCityInfoSuncc)
    },
     getCityInfoSuncc:function(res){
      //  console.log(res);
       res=res.data;
       if(res.ret&&res.data){
         const data = res.data
         this.hotcity_info=res.data.hotcity_info;
         this.cities=res.data.cities;
        
       }
      //  console.log(this.icons_info);
     }
  },
  mounted(){
    this.getCityInfo()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
