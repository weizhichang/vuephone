<template>
<ul class="list" >
   <li class="item" v-for="item of letters" :key=item :ref="item"
   @click="handleClick"
   @touchstart="handleTouchStart"
   @touchmove="handleTouchMove"
   @touchend="handleTouchEnd"
   >{{item}}</li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
    cities:Object,

  },
  computed:{
    letters:function(){
         const letters = []
         for(let i in this.cities){
           letters.push(i)
         }
         return letters
    }
  },
  data:function(){
    return{
       touchStatus:false
    }
  },
  methods:{
    handleClick:function(e){
      this.$emit('change',e.target.innerText);
     //e为原生DOM事件
    },
    handleTouchStart:function(){
      this.touchStatus = true;
    },
    handleTouchMove:function(){
       if(this.touchStatus){
       const startY = this.$refs['A'][0].offsetTop;
       console.log(startY);//为什么没反应？？？
      }
    },
    handleTouchEnd:function(){
       this.touchStatus = false;
    }
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
    top: 1.6rem;
    bottom: 0;
    width: .4rem;

    .item{
        text-align: center;
        line-height: 1.7;
        color:#00c5c3;
    }
}
    
</style>