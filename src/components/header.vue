<template>
	<div class="my-header">
		<div class="header-bar">
			<span class="header-left"  @click="preBack"><i v-show="isBack" class="header-back"></i></span>
			<span class="header-center">{{title}}</span>
			<span class="header-right" v-if="type=='login'"><router-link to="/login">{{isLogin}}</router-link></span>
			<span class="header-right" v-else-if="type=='back'"><router-link to="/index"><img class="indexImg" src="http://img1.3png.com/32a368b51ec7cb3c6fc395ef1ce8544c41d8.png" alt="" /></router-link></span>
			<span class="header-right" v-else-if="type=='myInfo'"><router-link to="/myInfo"><img v-bind:src="userImg" alt="我的" /></router-link></span>
		</div>
	</div>
</template>

<script>
	import router from '../router';
	import {l_store} from '../config/mUtil'
	export default {
		name:'header',
		props:['title','type','isBack'],
		data(){
			return {
				isLogin:'登陆',
				userImg:''
			}
		},
		ready(){
			
		},
		created(){
			this.Logined();
		},
		methods:{
			preBack:function(){
				history.back(-1);
			},
			Logined:function(){
				var token = l_store.getStore('token');
			  	if(token){
			  		console.log(token);
			  		this.userImg = l_store.getStore('userImg');
			  	}
			}
		}
	}
</script>

<style scoped>
	.header-bar{
		width: 100%;
		position: relative;
		height: 2rem;
		border-bottom: 1px solid #f0f0f0;
	}
	.header-left,
	.header-center,
	.header-right{
		display: inline-block;
		float: left;
		height: 2rem;
		line-height: 2rem;
		text-align: center;
		font-size: .55rem;
	}
	.header-left{
		width: 20%;
	}
	.header-center{
		width: 60%;
		font-weight: 600;
		font-size: .65rem;
	}
	.header-right{
		width: 20%;
		text-align: center;
	}
	.header-right img{
		margin-top: .4rem;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		border: 1px solid #ccc;
	}
	.header-right .indexImg{
		border: none;
	}
	.header-left .header-back{
		display: inline-block;
		width: .55rem;
		height: .55rem;
		border: none;
		border-top: 2px solid #000;
		border-left: 2px solid #000;
		transform: rotateX(-45deg);
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
	}
</style>