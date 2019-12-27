<template>
<ul class="list" >
   <li class="item" v-for="(value,name) of cities" :key=name @click="handleClick">{{name}}</li>
</ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props:{
    cities:Object
  },
  methods:{
    handleClick:function(e){

      console.log(e.target.innerText);//？？？
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