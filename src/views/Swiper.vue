<template>
<div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
        <img class="swiper-img" alt="" src="../image/Swiper/swiper_1.jpg">
    </swiper-slide>
    <swiper-slide>
        <img class="swiper-img" alt="" src="../image/Swiper/swiper_2.jpg">
    </swiper-slide>
    <swiper-slide>
        <img class="swiper-img" alt="" src="../image/Swiper/swiper_3.jpg">
        </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
    name:'HomeSwiper',
    data:function(){
    return {
        swiperOption:{ }
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

.swiper-img{
    width:100%;
 }
}
</style>