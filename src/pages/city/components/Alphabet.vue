<template>
<ul class="list">
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li>
   <li class="item">A</li> 
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
    city:String
  }
}
</script>

<style scoped lang="less">

.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 1.68rem;
    bottom: 0;
    width: .4rem;

    .item{
        text-align: center;
        line-height: .5rem;
        color:#00c5c3;
    }
}
    
</style>