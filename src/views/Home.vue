<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './Header.vue'

export default {
  name: 'home',
  components:{HomeHeader}
}
</script>
