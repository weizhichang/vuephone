<template>
<div>
<div class="search">
   <input type="text" class="search-input"  v-model="keyword"  placeholder="输入城市名或拼音"
   onfocus="this.placeholder='';" onblur="this.placeholder='输入城市名或拼音';">
</div>
<div class="search-content">
  <ul class="item-list">
    <li class="border-bottom" v-for="item of list" :key=item.index>{{item.name}}</li>
  </ul>
</div>
</div>
</template>

<script>
export default {
  name: 'CitySearch',
  props:{
    cities:Object
  },
  data:function(){
    return{
      keyword:'',
      list:[],
      timer:null
    }
  },
  methods:{
      onFocus:function(){
      this.placeholder='';
      console.log(1);
      },
      placeHolder:function(){
      this.placeholder='输入城市名或拼音';
      console.log(this.placeholder);
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
    z-index: 1;
    background: #fff;

    .item-list{
      line-height: .76rem;
      color:#666;
      padding-left: .2rem;

     .border-bottom{
       &:before{
    border-color:#ccc;
      }
  }
    }
  }

  
</style>