<template>
	<div class="orderList">
		<my-header isBack="true" v-bind:type="login" title="订单列表"></my-header>
		<ul>
			<li>test1</li>
			<li>test2</li>
			<li>{{test}}</li>
		</ul>
		<foot-bar>{{color}}</foot-bar>
	</div>
</template>

<script>
	import footBar from '../footBar'
	import myHeader from '../header'
	import {l_store} from '../../config/mUtil'
	export default{
		name:'OrderList',
		components:{footBar,myHeader},
		data(){
			return{
				test:'hello world',
				color:'active',
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