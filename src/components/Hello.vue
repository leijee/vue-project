import

<template>
  <div class="hello">
  	<router-link to="/first">Go to First</router-link>
    <router-link to="/second">Go to Second</router-link>
    <router-link to="/login">点击登录</router-link>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  ready(){
  	console.log('加载完成');
  },
	mounted(){
		console.log('跳转');
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
