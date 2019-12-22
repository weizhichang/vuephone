<template>
    <div class="hm-dujia">
        <div class="hm-dujia-head">
            <div class="hm-title">
                <span class="icon-hot-dujia"></span>
                <h3>当季景点门票</h3>
            </div>
            <div class="piao-more">
                <a href="" class="piao-head-more-link">
                    <span>更多特惠门票</span>
                </a>
            </div>
        </div>
        <div class="hm-dujia-body">
                <a href="" class="dujia-body-item" v-for="item of dujia_info" :key=item.id>
                    <div class="dujia-body-right-top">
                        <div class="dujia-body-right-img">
                            <img :src="item.src" alt="">
                        </div>
                    </div>
                    <div class="dujia-body-right-bottm">
                        <p class="body-right-bottom-words">
                            <span v-html="item.detailtype"></span>
                        </p>
                        <p class="body-right-bottom-word">
                            <span v-html="item.detail"></span>
                        </p>
                        <p class="dujia-body-right-market-price"></p>
                         <div class="dujia-body-right-price">
                             <span>
                                 <em>¥</em>
                             </span>
                             <span v-html="item.right_price"></span>
                         </div>
                    </div>
                </a>
     </div>
    </div>
</template>

<script>
export default {
    name:"HomePiao",
    data:function(){
        return{
            dujia_info:[
                {id:'1',src:require("../image/piao/cldj.jpg"),city:'',type:'',detailtype:'广州长隆旅游度假区',detail:'一站式旅游度假胜地，广东必游圣地',right_price:'88'},
                {id:'2',src:require("../image/piao/clfn.jpg"),city:'',type:'',detailtype:'长隆飞鸟乐园',detail:'长隆飞鸟乐园，一个真正看鸟飞的地方',right_price:'88'},
                {id:'3',src:require("../image/piao/clys.jpg"),city:'',type:'',detailtype:'长隆野生动物世界',detail:'熊猫三胞胎，与您共享欢乐时光',right_price:'262.2'},
                {id:'4',src:require("../image/piao/dgh.png"),city:'',type:'',detailtype:'东莞海立方环游城',detail:'',right_price:'55'},
                {id:'5',src:require("../image/piao/sjzc.png"),city:'',type:'',detailtype:'深圳野生动物园',detail:'放养式动物园让你和动物们“零距离”',right_price:'99.9'},
                {id:'6',src:require("../image/piao/szys.jpg"),city:'',type:'',detailtype:'世界之窗',detail:'放养式动物园让你和动物们“零距离”',right_price:'85'},
            ]
        }
    }
}
</script>

<style lang="less" scoped>

.hm-dujia{
    margin-bottom: 8px;
    margin-top: 0px;
    width: 100%;
    border-bottom: 0;
    color:#000000;

    .hm-dujia-head{
     .hm-title{
           display: inline-block;
           height:.8rem;
           line-height: .8rem;
           font-size:0.3rem;
           font-family: homenode !important;
           flex:1;
       .icon-hot-dujia{ 
            // background:linear-gradient(-135deg,#00bcd4 0,#10e9ac 100%);
       }  
       h3{
          font-family: 'Hiragino Sans GB',"\5FAE\8F6F\96C5\9ED1";
          letter-spacing: 0;
          line-height: 40px; 
          font-weight: 550;
          display: inline-block;
          margin-left: 0.28rem;
       }
     }

     .piao-more{
          float: right;
          line-height: 45px;
          height: 45px
          color#000;
          margin-right: 15px;
          font-weight: 100%;
         .piao-hesd-more-link{

         }
     }
    }
// 图片链接
    .hm-dujia-body{
          width:100%;
          background:#fff;
          display: flex;
          flex-wrap:wrap;
          justify-content: center;

          a.dujia-body-item{
           margin: 0.07rem 0.1rem;
           width:46%;
           color:#000000;

            .dujia-body-right-top{
              position: relative;

              .dujia-body-right-img{

                img{
               width:100%;
               border-radius: .12rem;
             }
            }

            .dujia-body-right-title{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                font-size: 14px;
                font-weight: 600;
                text-align: center;
                padding: .05rem .120rem;
                cursor: pointer;
                
                .dujia-body-right-title-in{
                background: rgba(0,0,0,0.6);
                display: inline-block;
                height: 100%;
                padding: .1rem .240rem;

                .right-title-main{
                font-size: 0.358rem;
                color:#fff;
                }

                .right-title-sub{
                 font-size: .2rem;
                 font-weight: 400; 
                 color: #ffde00;  
                }
              }
            }
           }

           .dujia-body-right-bottm{
                  width: auto;
                  padding: .05rem;
               
               .body-right-bottom-words{
                line-height: 1.2;
               .ellipse();
               }

               .body-right-bottom-word{
                line-height: 1;
                font-weight: 100;
                color: #555;
               .ellipse();
               }

               .dujia-body-right-price{
                  color: #ff7400;
                  font-size: .18rem;
                  font-weight: 550;
                  font: bold 20px arial,sans-serif;
               }
           }
          }
    }
}
</style>