<template>
<div class="list" ref="wrapper">
  <div>
   <div class="area">
       <div class="title border-topbottom">当前城市</div>
       <div class="button-list">
           <div class="button-wrapper">
           <div class="button" @click="handleclick(locationcity)">{{locationcity}}</div>
           </div>
       </div>
   </div>
   <div class="area">
        <div class="title border-topbottom">热门城市</div>
       <div class="button-list">
           <div class="button-wrapper"  v-for="(item,index) of hotcity_info" :key=index>
           <div class="button"  @click="handleclick(item.name)">{{item.name}}</div>
           </div>
       </div>
   </div>
   <div class="area" v-for="(value,name) of cities" :key=name :ref="name">
       <div class="title border-topbottom">{{name}}</div>
       <ul class="item-list" >
           <li class="item border-bottom" v-for="item of value" :key=item.id
            @click="handleclick(item.name)"
           >{{item.name}}</li>
       </ul>
   </div>
   </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props:{
    hotcity_info:Array,
    cities:Object,
    letter:String
  },
  methods:{
    handleclick(n){
      this.$store.commit('mutationscity',n);
    //  console.log(n)
    this.$router.push('/');//跳转回home页面
    }
  },
   computed:{
    locationcity(){
      return this.$store.state.city
    }
  },
  mounted(){
   this.scroll=new BScroll(this.$refs.wrapper)
},
watch:{
  letter:function() {
    if(this.letter){
      const element = this.$refs[this.letter][0];
      console.log(element);
      this.scroll.scrollToElement(element);
    }
    console.log(this.letter);
  }
}
}
</script>

<style scoped lang="less">

.list{
    overflow: hidden;
    position: absolute;
    top: 1.70rem;
    left:0;
    right: 0;
    bottom: 0;

  .title{
   line-height: .54rem;
   background:#eee;
   padding-left: .2rem;
   color:#666;
   font-size: .26rem;
  }
  .border-topbottom{
      &:before{
    border-color:#ccc;
      }
       &:after{
    border-color:#ccc;
      }
  }

  .border-bottom{
       &:before{
    border-color:#ccc;
      }
  }

    .button-list{
    padding:.1rem .6rem .1rem .1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     .button-wrapper{
    width:33.33%;
       .button{
     margin: .1rem;
     padding: .1rem 0;
     text-align:center;
     border:.02rem solid #ccc;
     border-radius: .06rem;
      }
      }
  } 
  
  .item-list{
      line-height: .76rem;
      color:#666;
      padding-left: .2rem;
  }

  }
</style>