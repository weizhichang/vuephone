<template>
  <div class="de-header">
    <router-link to="./">
      <a class="de-header-left de-iconfont iconfont">&#xe624;</a>
    </router-link>
    <h1 class="de-header-title">长隆野生动物世界</h1>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
  }
</script>

<style lang="less" scoped>
  .de-header {
    position: fixed;
    width: 100%;
    top: 0px;
    left: 0px;
    display: block;
    opacity: 0.555556;
    height: .88rem;
    background: @bgColor;
    z-index: 91;

    .de-header-left {
      left: 0;
      top: 0;
      width: .8rem;
      height: .88rem;
      line-height: .88rem;
      position: absolute;
      font-size: .36rem;
      color: #fff;
      text-align: center;
    }

    .de-iconfont {
      font-size: .4rem;
      padding-left: .2rem;
      color: #fff;
    }

    .de-header-title {
      overflow: hidden;
      margin: 0 1rem;
      line-height: .88rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: .32rem;
      text-align: center;
      color: #fff;
    }
  }
</style>