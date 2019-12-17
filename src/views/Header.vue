<template>
<div class="header">
  <div class="heder-left">返回</div>
  <div class="heder-input">内容</div>
  <div class="heder-right">城市</div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'HomeHeader'
}
</script>

<style  scoped lang="less">
  .header{
    display:flex;
    height:1rem;
    line-height: 1rem;
    background-color: #00bcd4;
    color:#fff;

    .header-left{
    width:0.64rem;
  }

  .header-input{
      flex:1;
      background-color:#fff;
      border-radius: 1rem;
    }

  .header-right{
    width:1.24rem;
    text-align:center;
  }
  }

  
</style>
