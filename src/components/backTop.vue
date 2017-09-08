<template>
	<div v-show="flag" @click="backTop" class="smp-back-top animated animatedFadeIn">
		<i class="iconfont icon-less"></i>
	</div>
</template>

<script>
	export default {
		name:'backTop',
		data(){
			return {
				flag:false
			}
		},
		mounted(){
			console.log('test');
			this.isShow();//是否显示回到顶部按钮
		},
		methods:{
			isShow(){//是否显示回到顶部按钮
				var self = this;
				var docHeight = getComputedStyle(document.querySelector('body'),false)['height'];
				var topVal = parseInt(docHeight)*0.15;//文档高度的15%作为判断的临界值
				var scrollTop =  window.document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
				var setScroll = function(scrollTop){
					if(scrollTop>topVal){
						self.flag = true;
					}else{
						self.flag = false;
					}
				}
				window.addEventListener('scroll',function(){
					scrollTop = window.document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
					setScroll(scrollTop);
				});
			},
			backTop(){//回到顶部
				document.body.scrollTop = 0;
				window.document.documentElement.scrollTop = 0;
			}
		}
	}
</script>

<style>
</style>