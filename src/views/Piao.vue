<template>
    <div class="hm-dujia">
        <div class="hm-dujia-head">
            <div class="hm-title">
                <span class="icon-hot-dujia"></span>
                <h3>当季热门度假</h3>
            </div>
        </div>
        <div class="hm-dujia-body">
                <a href="" class="dujia-body-item" v-for="item of dujia_info" :key=item.id>
                    <div class="dujia-body-right-top">
                        <div class="dujia-body-right-img">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="dujia-body-right-title">
                            <div class="dujia-body-right-title-in">
                                <p class="right-title-main">
                                    <span v-html="item.city"></span>
                                </p>
                                <p class="right-title-sub">
                                    <span v-html="item.type"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="dujia-body-right-bottm">
                        <p class="body-right-bottom-words">
                            <span v-html="item.detailtype"></span>
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
    name:"HomeDujia",
    data:function(){
        return{
            dujia_info:[
                {id:'1',src:require("../image/hm_dujia/sanya.jpg"),city:'广州-三亚',type:'5天跟团游',detailtype:'含往返飞机票(含税)+4晚住宿',right_price:'2390'},
                {id:'2',src:require("../image/hm_dujia/lijiang.jpg"),city:'广州-丽江',type:'7天自由行',detailtype:'含往返飞机票+6晚住宿',right_price:'4294'},
                {id:'3',src:require("../image/hm_dujia/guilin.jpg"),city:'广州-桂林',type:'10天跟团游',detailtype:'含单程飞机票(含税)+9晚住宿',right_price:'3000'},
                {id:'4',src:require("../image/hm_dujia/xsqd.jpg"),city:'广州-西沙群岛',type:'6天跟团游',detailtype:'含往返飞机票(含税)+3晚住宿',right_price:'5540'},
                {id:'5',src:require("../image/hm_dujia/hz.jpg"),city:'广州-惠州',type:'10天跟团游',detailtype:'含往返飞机票(含税)+8晚住宿',right_price:'11999'},
                {id:'6',src:require("../image/hm_dujia/taiguo.jpg"),city:'广州-泰国',type:'6天跟团游',detailtype:'含往返飞机票(含税)+4晚住宿',right_price:'1680'},
                {id:'7',src:require("../image/hm_dujia/jianpuzhai.jpg"),city:'广州-曼谷',type:'6天跟团游',detailtype:'含往返飞机票(含税)+5晚住宿',right_price:'1997'},
                {id:'8',src:require("../image/hm_dujia/yangshuo.jpg"),city:'广州-阳朔',type:'4天跟团游',detailtype:'含往返飞机票(含税)+3晚住宿',right_price:'1299'},
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