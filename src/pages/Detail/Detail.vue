<template>
 <div class="page">
     <detail-header></detail-header>
     <detail-picture></detail-picture>
     <detail-baseinfo></detail-baseinfo>
     <detail-announce></detail-announce>
     <detail-promote></detail-promote>
     <detail-backicon></detail-backicon>
 </div>   
</template>

<script>
import DetailHeader from './components/Header'
import DetailBackicon from './components/Backicon'
import DetailPicture from './components/Picture'
import DetailBaseinfo from './components/Baseinfo'
import DetailAnnounce from './components/Announce'
import DetailPromote from './components/Promote'


export default {
    name:'Detail',
    components:{
        DetailHeader,
        DetailBackicon,
        DetailPicture,
        DetailBaseinfo,
        DetailAnnounce,
        DetailPromote,
    }
}
</script>

<style lang="less" scoped>
.page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}


</style>