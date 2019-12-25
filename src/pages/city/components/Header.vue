<template>
<div class="header">
    <router-link to="/">
  <div class="header-left">
    <span class="iconfont back-icon">&#xe624;</span>
  </div>
  </router-link>
  <div class="header-input">
    国内城市
    </div>
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
    display:flex;
    height:@headerheight;
    line-height: @headerheight;
    background:@bgColor;
    color:#fff;
    
  .header-left{
  width:.64rem;

   .back-icon{
      text-align: center;
      font-size: .4rem;
      padding-left: .2rem;
      color: #fff;
    }
  }

  .header-input{
      width: 100%;
      height: .64rem;
      line-height: .64rem;
      margin-top:.12rem;
      margin-left: .2rem;
      padding-left: -0.2rem;
      border-radius: .1rem;
      color:#fff;
      text-align: center;
    }
  }
  
</style>