<template>
	<div id="mine">
		<my-header isBack="true" v-bind:type="login" title="购物车"></my-header>
		我的
		<foot-bar></foot-bar>
	</div>
</template>

<script>
	import footBar from '../footBar'
	import myHeader from '../header'
	import {l_store} from '../../config/mUtil'
	export default{
		name:'Mine',
		components:{footBar,myHeader},
		data(){
			return{
				login:'back'
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