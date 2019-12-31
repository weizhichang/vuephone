<template>
  <div class="de-main">
    <div class="header-back iconfont">
      <span class="header-back-bg"></span>
      <span class="header-back-icon"></span>
    </div>
    <!-- <div class="de-announce-con"></div>
    <div class="list-container"></div> -->
  </div>
</template>

<script>
  export default {
    name: 'DetailBackicon',
  }
</script>

<style lang="less" scoped>

  .header-back {
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    line-height: .72rem;
    position: absolute;
    font-size: .36rem;
    color: #fff;
    text-align: center;

    .headerback-bg {
      display: block;
      width: .72rem;
      height: .72rem;
      background-color: #000;
      opacity: .5;
      -webkit-border-radius: .36rem;
      -moz-border-radius: .36rem;
      border-radius: .36rem;
    }

    .headerback-icon {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: .72rem;
      line-height: .72rem;
      text-align: center;
    }
  }   
</style>