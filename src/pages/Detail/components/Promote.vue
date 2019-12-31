<template>
  <div class="mp-promote" mp-role="promoteArea">
    <h3 class="mp-ticket-type mpf-border-bottom">官方推荐</h3>
    <div class="mp-ticket-item mp-flexbox mp-border-top" data-tickettype="TICKET" mp-role="TicketItem">
      <div class="mp-ticket-main mp-flexbox-layout" mp-role="TicketMainZone" data-click="true"
        data-click-value="t_mini_window_bc">
        <div>
          <h6 class="mp-ticket-title mp-ellipsis2">【2020年】长隆野生动物世界平日全票</h6>
          <ul class="mp-ticket-light">
            <span class="mp-ticket-desctag">
              <img class="mp-ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">
              可订1月2日
            </span>
          </ul>
          <ul class="mp-ticket-labelcon"><span class="mp-ticket-label mp-border mp-label14">
              <img class="mp-ticket-tagicon"
                src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">自营</span>
            <span class="mp-ticket-label mp-border mp-label14">条件退</span>
            <span class="mp-ticket-label mp-border mp-label8">赠券￥18.0</span>
          </ul>
          <div class="mp-ticket-supplier">
            <span>官方直销</span>
            <span class="mp-ticket-infobtn mp-border-left">预订须知
              <span class="mpg-iconfont"></span>
            </span>
          </div>
          <div class="mp-ticket-detail" data-clktype="product-detail" data-sightid="14709" data-preference="false"
            data-pid="135026206" data-priceid="3325971096" data-straightsign="true" data-classify="1" data-supid="6669">
          </div>
        </div>
      </div>
      <div class="mp-ticket-side mp-flexbox-layout">
        <a href="/touch/order/form.htm?pid=135026206&amp;priceId=3325971096&amp;classify=1&amp;supplierId=6669&amp;isTuan=false&amp;sid=14709&amp;tuanId=&amp;cat=from_area%3Das_recommend_sight%26pIndex%3D2"
          data-pid="135026206" data-type="ticket" data-inactivity="false" data-redid="" data-hasmob=""
          data-suppliertype="3" data-supplierid="6669" data-suppliername="长隆官方合作代理商" data-teamtype="0"
          class="mp-ticket-link" mp-role="TicketLink" title="长隆野生动物世界门票">
          <strong class="mp-ticket-sale mp-price">¥<em class="mp-price-num">294</em></strong>
          <em mp-role="downloadAppBtn" class="mp-ticket-btn mp-promote-ablebtn">预订</em>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailPromote',
  }
</script>

<style lang="less" scoped>
  .mp-promote {
    position: relative;
    background: #fff;
    margin-bottom: .2rem;
    padding-left: .2rem;

    .mp-ticket-type {
      overflow: hidden;
      position: relative;
      z-index: 4;
      margin-bottom: -.02rem;
      padding: 0 .2rem;
      height: .88rem;
      background: #fff;
      color: #333;
      font-size: .32rem;
      line-height: .88rem;
      text-indent: .4rem;
    }

    .mp-ticket-item {
      padding: .2rem .2rem .24rem 0;
    }

    .mp-flexbox {
      display: -webkit-box;
      display: -moz-box;
      display: -webkit-flex;
      display: -moz-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;

      .mp-ticket-main,
      .mp-ticket-side {
        display: flex;
        align-items: center;
        box-flex: 2.92;
        flex: 2.92;

      }

      .mp-flexbox-item,
      .mp-flexbox-layout {
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -webkit-flex: 1;
        -moz-flex: 1;
        -ms-flex: 1;
        flex: 1;

        .mp-ticket-link {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          display: block;
          width: 100%;
          padding-left: .2rem;

          .mp-ticket-sale,
          .mp-ticket-provide {
            color: #ff9800;

            .mp-ticket-sale .mp-price-num {
              margin-left: .04rem;
              font-size: .4rem;
              line-height: .4rem;
            }
          }

          .mp-ticket-btn {
            height: .6rem;
            color: #fff;
            font-size: .28rem;
            line-height: .6rem;
            -webkit-border-radius: .08rem;
            -moz-border-radius: .08rem;
            border-radius: .08rem;
            background-image: -webkit-gradient(linear, left top, right bottom, from(#ffab1e), to(#ff8c12));
            background-image: -webkit-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%);
            background-image: -moz-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%);
            background-image: -o-linear-gradient(-60deg, #ffab1e 37%, #ff8c12 100%);
            background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%);
          }
        }
      }
    }

  }
</style>