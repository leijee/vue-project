<template>
  <div class="Ad">
  	<span class="small-btn btn-default" @click="jumpPage">跳过{{seconds}}s</span>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  data(){
    return{
      seconds:4
    }
  },
  ready(){
  	console.log('加载完成');
  },
  created(){
  	console.log('创建');
  	var self = this;
  	var timer = setInterval(function(){
  		self.seconds--;
  		if(self.seconds== 0){
  			clearInterval(timer);
				self.$router.push({path:'/index'});
  		}
  	},1000);
  },
  methods:{
  	jumpPage(){
  		this.$router.push({path:'/index'});
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Ad{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.Ad span{
		margin-top: 50%;
	}
</style>
