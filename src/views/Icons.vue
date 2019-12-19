<template>
<div class="hm-icons">
    <div class="hm-icon hm-iconbig">
            <a href="http://" class="hm-icon_link"  v-for="item of icon_big" :key=item.id>
              <div class="hm-icon_img">
                  <img :src="item.src" :alt="item.name">
              </div>
              <span class="hm-icon_title" v-html="item.name"></span>
             </a>
    </div>
    <div class="hm-icon hm-iconmid">
            <a href="http://" class="hm-icon_link"  v-for="item of icon_mid" :key=item.id>
              <div class="hm-icon_img">
                  <img :src="item.src" :alt="item.name">
              </div>
              <span class="hm-icon_title"  v-html="item.name"></span>
             </a>
    </div>
    <div class="hm-icon hm-iconsma">
            <a href="http://" class="hm-icon_link"  v-for="item of icon_sma" :key=item.id>
              <div class="hm-icon_img">
                  <img :src="item.src" :alt="item.name">
              </div>
              <span class="hm-icon_title" v-html="item.name"></span>
             </a>
    </div>
</div>
</template>

<script>
export default {
    name:'HomeIcons',
    data:function(){
        return{
            icon_big:[
                {id:"1",src:require("../image/hm_icons/hotel.png"),name:"酒店"},
                {id:"2",src:require("../image/hm_icons/flight.png"),name:"机票"},
                {id:"3",src:require("../image/hm_icons/package.png"),name:"度假"},
                {id:"4",src:require("../image/hm_icons/piao.png"),name:"火车票"},
                {id:"5",src:require("../image/hm_icons/train.png"),name:"景点门票"},
            ],
            icon_mid:[
                {id:"6",src:require("../image/hm_icons/innBnb.png"),name:"民宿客栈"},
                {id:"7",src:require("../image/hm_icons/bargainflight.png"),name:"低价机票"},
                {id:"8",src:require("../image/hm_icons/group.png"),name:"特惠酒店"},
                {id:"9",src:require("../image/hm_icons/haiwai.png"),name:"海外酒店"},
                {id:"10",src:require("../image/hm_icons/oneday.png"),name:"一日游"},
            ],
            icon_sma:[
                {id:"11",src:require("../image/hm_icons/bus.png"),name:"汽车票船票"},
                {id:"12",src:require("../image/hm_icons/tuan.png"),name:"旅游团购"},
                {id:"13",src:require("../image/hm_icons/freeTravel.png"),name:"自由行"},
                {id:"14",src:require("../image/hm_icons/car.png"),name:"专车自驾"},
                {id:"15",src:require("../image/hm_icons/aroundtravel.png"),name:"周边短途"}
            ]
        }
    }
}
</script>

<style lang="less" scoped>

// 设置宽高比
.hm-icons{
    overflow: hidden;
    width:100%;
    height: 0;
    padding-bottom: 63%;
    font-size: .24rem;
    margin:0.07rem auto;
    
    .hm-icon{
        background:#fff;
        display: flex;
        flex-direction: row;

       .hm-icon_link {
           width: 20%;
           text-align:center;
           margin: 0.07rem 0;

           .hm-icon_img{
               width: 70%;
               height: 0;
               padding-bottom: 68%;
               margin: 0 auto .05rem;

               img{
                   width:96.2%;
               }
           }

           .hm-icon_title{
               color: #333;
           }
       }
    }
}
</style>