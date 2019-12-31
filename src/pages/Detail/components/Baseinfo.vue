<template>
    <div class="de-baseinfo">
      <div class="mpg-flexbox mp-flex-card">
        <div class="mpg-flexbox-item mp-flexlink-con">
          <a href="https://" class="mp-card-link"></a>
          <div>
            <span class="mp-commentcard-score">5.0</span>
            <span class="mp-commentcard-text">分</span>
            <span class="mp-commentcard-desc">超赞</span>
          </div>
          <div>
            <span class="mp-totalcommentnum">134195条评论</span>
            <span class="mp-totalcommentnum">28条攻略</span>
            <span class="mp-rightarrow  iconfont">&#xe603;</span>
          </div>
        </div>
        <div class="mpg-flexbox-item mp-border-left mp-flexlink-con">
          <a href="//touch.piao.qunar.com/touch/sight/introduction.htm?sightId=4281924223" class="mp-card-link"></a>
          <div>
            <span class="mp-sightcard-title">景点简介</span>
          </div>
          <div>
            <span class="mp-sightcard-text">开放时间、贴士</span>
            <span class="mp-rightarrow confont" style="right: 0;">&#xe603;</span>
          </div>
        </div>
      </div>
      <div class="mp-baseinfo-address mp-border-top" id="card-adress">
        <p class="mp-baseinfo-address-txt"><span
            class="mp-iconfont mp-baseinfo-address-icon iconfont">&#xe61b;</span>广东省广州市番禺区迎宾路长隆旅游度假村旁<span
            class="mp-iconfont mp-baseinfo-address-arrow iconfont">&#xe603;</span></p>
      </div>
    </div>
</template>

<script>
export default {
    name:'DetailBaseinfo',
}
</script>

<style lang="less" scoped>
 .de-baseinfo {
    position: relative;
    top: -.1rem;
    padding: .1rem .2rem 0 .2rem;
    margin-bottom: .1rem;
    background: #fff;
    -webkit-border-radius: .1rem .1rem 0 0;
    -moz-border-radius: .1rem .1rem 0 0;
    border-radius: .1rem .1rem 0 0;

    .mp-flex-card {
      padding-top: .1rem;
      padding-bottom: .2rem;

    }

    .mpg-flexbox {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;

      .mp-flexlink-con {
        position: relative;


        .mp-card-link {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .mp-commentcard-score {
          font-size: .44rem;
          color: #ff8300;
          line-height: .44rem;
        }

        .mp-commentcard-text {
          font-size: .28rem;
          color: #ff8300;
          line-height: .48rem;
        }

        .mp-commentcard-desc {
          font-size: .28rem;
          color: #ff8300;
          line-height: .48rem;
          margin-left: .2rem;
        }

        .mp-totalcommentnum {
          font-size: .24rem;
          color: #9e9e9e;
          line-height: .32rem;
          margin-right: .2rem;
        }

        .mp-totalcommentnum {
          font-size: .24rem;
          color: #9e9e9e;
          line-height: .32rem;
          margin-right: .2rem;
        }

        .mp-flexlink-con .mp-rightarrow {
          position: absolute;
          top: .3rem;
          right: .2rem;
          color: #9e9e9e;
          font-size: .24rem;
        }
      }

      .mpg-flexbox-item,
      .mpg-flexbox-layout {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;
      }
    }

    .mp-baseinfo-address {
      display: block;
      position: relative;
      padding: .2rem 0;
      line-height: .36rem;
      color: #212121;

      &::before,
      .mp-baseinfo-intro::before {
        border-top: 1px solid #f0f0ef;
      }

      .mp-baseinfo-address-txt {
        padding-right: .56rem;
        position: relative;
        padding-left: .56rem;


        element.style {}

        .mp-baseinfo-address-icon {
          display: block;
          height: 100%;
          line-height: 100%;
          position: absolute;
          left: 0;
          top: .16rem;
          margin-top: -.16rem;
          margin-right: .2rem;
          color: #9e9e9e;
          font-size: .36rem;
        }

        .mp-baseinfo-address-arrow {
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -.14rem;
          color: #9e9e9e;
          font-size: .24rem;
        }
      }
    }

    &::before {
      border-color: #dadada;
    }

    .mp-flexlink-con {
      position: relative;

      .mp-sightcard-title {
        font-size: .28rem;
        color: #212121;
        line-height: .48rem;
        padding-left: .3rem;
      }

      .mp-sightcard-text {
        color: #9e9e9e;
        font-size: .24rem;
        padding-left: .3rem;
      }

      .mp-flexlink-con .mp-rightarrow {
        position: absolute;
        top: .3rem;
        right: .2rem;
        color: #9e9e9e;
        font-size: .24rem;
      }
    }

    .mpg-flexbox-item,
    .mpg-flexbox-layout {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -webkit-flex: 1;
      -moz-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }
  }
</style>