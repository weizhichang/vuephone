<template>
<div class="header">
    国内城市
    <router-link to="/">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe624;</span>
  </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'CityHeader',
  props:{
    city:String
  }
}
</script>

<style scoped lang="less">

   .header{
    position: relative;
    overflow: hidden;
    height:@headerheight;
    line-height: @headerheight;
    text-align: center;
    background:@bgColor;
    color:#fff;
    
    
  .header-left{
  position:absolute;
  left: 0;
  top: 0;
  width:.64rem;
  text-align: center;

   .back-icon{
      font-size: .4rem;
      padding-left: .2rem;
      color: #fff;
    }
  }

  }
    
</style>