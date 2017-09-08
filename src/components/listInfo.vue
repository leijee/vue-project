<template>
	<div class="smp-list">
		<ul class="data-list">
			<li class="data-item clear-fixed" v-for="item in Lists" v-bind:class="item.type==1?'theme1':'theme2'" :key="item.title">
				<div class="item-pic">
					<img class="lazy-img" v-lazyload="item.img" :src="item.img" />
				</div>
				<div class="item-info ">
					<div class="item-title">{{item.title}}</div>
					<div class="item-detail clear-fixed">
						<div class="float-l"><span>￥{{item.price}}</span><span>/{{item.unit}}</span></div>
						<div class="float-r d-right">right</div>
					</div>	
					<div class="item-content">
						{{item.content}}
					</div>						
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name:'listInfo',
		props:[],
		data(){
			return {
				Lists:[
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:1
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:1
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:1
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:1
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:1
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:2
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:2
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:2
					},
					{
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:2
					}
				]
			}
		},
		created(){
			this.loadData();
			var _this = this;
			window.addEventListener('scroll',function(){
				var windowHeight = document.documentElement.clientHeight;//可见区域高度
				var docHeight = document.body.scrollHeight;//文档高度
				var scrollTop =  window.document.documentElement.scrollTop || window.pageYOfset ||document.body.scrollTop;
				if(scrollTop+windowHeight>=docHeight){//到达底部
					console.log('到达底部');
					setTimeout(function(){
						_this.loadMore();
					},100);
				}
			});
		},
		methods:{
			loadMore(){
				var dataObj = {};
				for(var i=0;i<10;i++){
					dataObj = {
						title:'2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修2016夏天新款男士短袖t恤青少年韩版修',
						price:'181',
						content:'夏天新款男士短袖t恤青少年韩版修',
						tips:'right',
						unit:'人',
						img:'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
						type:2
					}
					this.Lists.push(dataObj);
				}
			},
			loadData(){
				axios.post('http://localhost:3000/getInfo')
					.then(function(response){
						console.log(response);
					}).catch(function (error) {
					    console.log(error);
					});
			}
		}
	}
</script>

<style>
</style>