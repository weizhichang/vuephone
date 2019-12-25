<template>
<div class="search">
   <input type="text" class="search-input" placeholder="输入城市名或拼音">
</div>
</template>

<script>
export default {
  name: 'CitySearch',
  props:{
    city:String
  }
}
</script>

<style scoped lang="less">

.search{
    height:@headerheight;
    line-height: @headerheight;
    background:#00c5c3;
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

      input:-webkit-input-placeholder{
            color:#ccc;
            font-family: "PingFangSC-Regular";
      }
    }
  }

  
</style>