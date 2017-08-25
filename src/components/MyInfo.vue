<template>
	<div class="myInfo">
		<my-header isBack="true" v-bind:type="login" title="用户信息"></my-header>
		<img class="headImg" v-bind:src="userImg">
		<div class="smp-form bottom-loginOut">
			<input type="button" @click="loginOut" class="btn btn-danger" autofocus value="退出登录"/>
		</div>
	</div>
</template>

<script>
	import myHeader from './header'
	import {l_store,checkLogin} from '../config/mUtil'
	export default {
		name:'MyInfo',
		components:{myHeader},
		data(){
			return {
				login:'back',
				userImg:''
			}
		},
		created(){
			console.log('test');
		  	var token = l_store.getStore('token');
		  	if(token){
		  		this.userImg = l_store.getStore('userImg');
		  	}
		},
		methods:{
			loginOut:function(){//退出登录
				l_store.removeAll();
				this.$router.push({path:'login'});
			}
		}
	}
</script>

<style>
	.bottom-loginOut{
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>