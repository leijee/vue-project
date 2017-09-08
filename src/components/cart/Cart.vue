<template>
	<div class="cart">
		<my-header isBack="true" v-bind:type="login" title="购物车"></my-header>
		购物车页面
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import footBar from '../footBar'
	import myHeader from '../header'
	import {l_store} from '../../config/mUtil'
	export default{
		name:'Cart',
		components:{footBar,myHeader},
		data(){
			return{
				login:''
			}
		},
		created(){
			this.isLogin();
		},
		methods:{
			isLogin:function(){
				var token = l_store.getStore('token');
				if(this.getLoginState()){
					this.login = 'myInfo';
				}else{
					this.login = 'login';
				}
			},
			getLoginState:function(){//登录状态
				var state = 1;
				if(state){//已登录
					return true;
				}
				return false;
			}
		}
	}
</script>

<style>
</style>