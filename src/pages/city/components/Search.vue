<template>
<div>
<div class="search">
   <input type="text" class="search-input"  v-model="keyword"  placeholder="输入城市名或拼音"
   onfocus="this.placeholder=''" onblur="this.placeholder='输入城市名或拼音';">
</div>
<div class="search-content" v-show="keyword" ref="search">
  <ul class="item-list">
    <li class="border-bottom" v-for="item of list" :key=item.index
    @click="handleclick(item.name)"
    >{{item.name}}</li>
    <li class="border-bottom" v-show="noresult">无法查询到该城市</li>
  </ul>
</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props:{
    cities:Object
  },
  data:function(){
    return{
      keyword:'',
      list:[],
      timer:null,
    }
  },
  mounted(){
   this.scroll=new BScroll(this.$refs.search)
},
  methods:{
      onFocus:function(){
      this.placeholder='';
      console.log(1);
      },
      placeHolder:function(){
      this.placeholder='输入城市名或拼音';
      console.log(this.placeholder);
      },
      handleclick(n){
      this.$store.commit('mutationscity',n);
    //  console.log(n)
    this.$router.push('/');//跳转回home页面
    }
  },
  computed:{
       noresult:function(){
        return  !this.list.length
      }
  },
  watch:{
    keyword:function() {
       if(this.keyword){
       if(this.timer){
         clearTimeout(this.timer)
       }
       this.timer = setTimeout(()=>{
         const result=[]
         for(let i in this.cities){
           this.cities[i].forEach((value)=>{
             if(value.spell.indexOf(this.keyword) > -1 ||value.name.indexOf(this.keyword) > -1 ){
               result.push(value)
             } 
           })
         }
         this.list = result
         },100)
       }else
         {this.list =[];}//如果输入值为空，则清空list数组
      } 
    }
}
</script>

<style scoped lang="less">

.search{
    height:@headerheight;
    line-height: @headerheight;
    // background:@bgColor;
    color:#fff;
    position: relative;

    .search-input{
      height: .64rem;
      line-height: .64rem;
      background-color:#fff;
      border-radius: .1rem;
      text-align: center;
      width: 96%;
      position: absolute;
      margin: auto;
      top:0;
      left:0;
      bottom:0;
      right:0;

    }
     .search-input-text
  }

  .search-content{
    overflow: hidden;
    position:absolute;
    top:1.69rem;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: #eee;


    .item-list{
      line-height: .76rem;
      color:#666;
      padding-left: .2rem;
      background: #fff;

     .border-bottom{
       &:before{
    border-color:#ccc;
      }
  }
    }
  }

  
</style>