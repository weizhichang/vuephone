<template>
<div class="list">
   <div class="area">
       <div class="title border-topbottom">当前城市</div>
       <div class="button-list">
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
       </div>
   </div>
   <div class="area">
        <div class="title border-topbottom">当前城市</div>
       <div class="button-list">
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
         <!-- chongfu -->
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
           <div class="button-wrapper">
           <div class="button">北京</div>
           </div>
           <!-- chongfu -->
       </div>
   </div>
   <div class="area">
       <div class="title border-topbottom">A</div>
       <div class="item-list">
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
       </div>
 <!-- chongfu -->
       <div class="title border-topbottom">A</div>
       <div class="item-list">
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
       </div>
       <div class="title border-topbottom">A</div>
       <div class="item-list">
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
       </div>
       <div class="title border-topbottom">A</div>
       <div class="item-list">
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
       </div>
       <div class="title border-topbottom">A</div>
       <div class="item-list">
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
           <div class="item border-bottom">阿布布</div>
       </div>
       <!-- chongfu -->
   </div>
</div>
</template>

<script>
export default {
  name: 'CityList',
  props:{
    city:String
  }
}
</script>

<style scoped lang="less">

  .title{
   line-height: .4rem;
   background:#eee;
   padding-left: .2rem;
   color:#666;
   font-size: .26rem;
  }
  .border-topbottom{
      &:before{
    border-color:#ccc;
      }
       &:after{
    border-color:#ccc;
      }
  }

  .border-bottom{
       &:before{
    border-color:#ccc;
      }
  }

    .button-list{
    padding:.1rem .6rem .1rem .1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     .button-wrapper{
    width:33.33%;
       .button{
     margin: .1rem;
     padding: .1rem 0;
     text-align:center;
     border:.02rem solid #ccc;
     border-radius: .06rem;
      }
      }
  } 
  
  .item-list{
      line-height: .76rem;
      color:#666;
      padding-left: .2rem;
  }
</style>