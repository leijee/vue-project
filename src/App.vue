<template>
  <div id="app" style="padding-bottom: 2rem;">
    <router-view></router-view>
  </div>
</template>

<script>
	import Vue from 'vue'
	
	import LazyLoad from './javascripts/lazyload'
	Vue.use(LazyLoad);
	export default {
	  name: 'app'
	}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .5rem;
}
.headImg{
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	border: 1px solid #eee;
}
</style>
