<template>
<div class="header">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe624;</span>
  </div>
  <div class="header-input">
    <span class="iconfont">&#xe632;</span>
    <input  class="search-input" type="text" name="search" placeholder="搜索目的地"
    onfocus="this.placeholder=''" onblur="this.placeholder='搜索目的地';">
    </div>
    <router-link to='/city'>
  <div class="header-right">
    {{locationcity}}
   <span class="iconfont arrow-icon">&#xe64a;</span>
  </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
    city:String
  },
  computed:{
    locationcity(){
      return this.$store.state.city
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/styles/variables';

  .header{
    display:flex;
    height:@headerheight;
    line-height:@headerheight;
    background:@bgColor;
    color:#fff;
    
  .header-left{
  width:.64rem;

   .back-icon{
      text-align: center;
      font-size: .4rem;
      padding-left: .2rem;
    }
  }

  .header-input{
      flex: 1;
      position: relative;
      height: .64rem;
      line-height: .64rem;
      margin-top:.12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background-color:#fff;
      border-radius: .1rem;
      color:#ccc;

      .iconfont{
       position: absolute;
       margin: auto;
       top:0;
       left:0;
       z-index: 1;
       padding-left: .2rem;
       width: .64rem;
      }

      .search-input{
        width: 100%;
        height: .62rem;
        line-height: .62rem;
        text-align: center;
        border-radius: .06rem;
        position: absolute;
        margin: auto;
        top:0;
        left:0;
        bottom:0;
        right:0;
      }
      .search-input-text
    }

  .header-right{
    width:1.24rem;
    text-align:center;
    color:#fff;

    .arrow-icon{
      font-size: .24rem;
      margin-left: -0.05rem;
    }
   }
  }
  
</style>