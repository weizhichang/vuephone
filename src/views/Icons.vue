<template>
<div class="hm-icons">
    <div class="hm-icon hm-iconbig">
            <a href="http://" class="hm-icon_link"  v-for="item of icons_info.icon_big" :key=item.id>
              <div class="hm-icon_img">
                  <img :src="item.src" :alt="item.name">
              </div>
              <span class="hm-icon_title" v-html="item.name"></span>
             </a>
    </div>
    <div class="hm-icon hm-iconmid">
            <a href="http://" class="hm-icon_link"  v-for="item of icons_info.icon_mid" :key=item.id>
              <div class="hm-icon_img">
                  <img :src="item.src" :alt="item.name">
              </div>
              <span class="hm-icon_title"  v-html="item.name"></span>
             </a>
    </div>
    <div class="hm-icon hm-iconsma">
            <a href="http://" class="hm-icon_link"  v-for="item of icons_info.icon_sma" :key=item.id>
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
    props:{
        icons_info:Object,
    },
    data:function(){
        return{
           
        }
    },
     computed:{
         show:function(){
             return this.icons_info.length
         }
     }
}
</script>

<style lang="less" scoped>

// 设置宽高比
.hm-icons{
    // overflow: hidden;
    // width:100%;
    // height: 0;
    // padding-bottom: 66%;
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
               overflow: hidden;
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