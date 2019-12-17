<template>
<div class="header">
  <div class="header-left">返回</div>
  <div class="header-input">内容</div>
  <div class="header-right">城市</div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped lang="less">

  .header{
    display:flex;
    height:0.64rem;
    line-height: 0.64rem;
    background-color: #00bcd4;
    color:#fff;

  .header-left{
    width:10%;
  }

  .header-input{
      // flex: 1;
      width: 80%;
      background-color:#fff;
      border-radius: 1rem;
    }

  .header-right{
    width:10%;
    text-align:center;
   }
  }
  
</style>