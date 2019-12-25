<template>
<div class="wrapper">
    <swiper :options="swiperOption" v-if="swiper_images.length">
    <!-- slides -->
    <swiper-slide  v-for="item of swiper_images" :key="item.id">
        <img class="swiper-img" alt="" :src="item.src">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    props:{
        swiper_images:Array
    },
    data:function(){
    return {
        swiperOption:{ 
            pagination:'.swiper-pagination',
            paginationClickable :true,
            autoplay : 5000,//可选选项，自动滑动
            loop : true,//可选选项，开启循环
        }
    }
 },
  computed:{
         show:function(){
             return this.swiper_images.length
         }
     }
}
</script>

<style scoped lang="less">

.wrapper{
    overflow: hidden;
    width:100%;
    height: 0;
    padding-bottom: 31.25%;
    background:#eee;
    // 图片自适应

.swiper-img{
    width:100%;
 }
}
</style>