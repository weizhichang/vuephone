<template>
  <div class="de-headfigure">
    <div class="de-headfigure-wrap" id="imgcontainer">
      <img class="de-headfigure-img"
        src="//img1.qunarzz.com/sight/p0/1912/74/74646c81315f3d5fa3.water.jpg_600x330_cfa2e501.jpg" alt="长隆野生动物世界">
    </div>
    <div class="de-headfeagure-info">
      <div class="de-headfeagure-title">
        长隆野生动物世界(AAAAA景区)
      </div>
    </div>
    <div class="de-imgswipeicon">
      <span class="de-iconfont de-imgswipeicon-icon iconfont">&#xe67b;</span>
      <em class="de-imgswipeicon-number">113</em>
    </div>
  </div>
</template>

<script>
  export default {
   name:'DetailPicture',
  }
</script>

<style lang="less" scoped>
  .de-headfigure {
    position: relative;
    line-height: 1;

    .de-headfigure-wrap {
      overflow: hidden;
      height: 0;
      width: 100%;
      padding-bottom: 55%;
      line-height: 1;

      .de-headfigure-img {
        width: 100%;
        vertical-align: top;
      }
    }

    .de-headfeagure-info {
      position: absolute;
      right: .2rem;
      bottom: .36rem;
      left: .2rem;
      min-height: .4rem;

      .de-headfeagure-title {
        position: relative;
        z-index: 1;
        line-height: .4rem;
        color: #fff;
        font-size: .36rem;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.70);
      }
    }

    .de-imgswipeicon {
      position: absolute;
      left: .2rem;
      bottom: .86rem;
      width: 1.2rem;
      height: .4rem;
      background: rgba(0, 0, 0, .5);
      border-radius: .2rem;
      font-size: .24rem;
      color: #fff;
      line-height: .4rem;
      text-align: center;

      .de-imgswipeicon-icon {
        position: relative;
        top: .02rem;
      }

      .de-imgswipeicon-number {
        margin-left: .1rem;
      }
    }

    &::after {
      content: "\0020";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      min-height: .6rem;
      background-color: transparent;
      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, .8)));
      background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    }
  }
</style>