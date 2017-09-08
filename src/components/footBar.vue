<template>
	<div class="footBar">
		<div class="smp-fix-menu">
			<router-link v-for="item in menuList" :to="item.links" :key="item.name" >
				<i class="iconfont" v-bind:class="item.iconName"></i>
				<p>{{item.name}}</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name:'footBar',
		props:[''],
		data(){
			return {
				menuList:[
					{name:'首页',iconName:'icon-all',links:'/index'},
					{name:'订单',iconName:'icon-manageorder',links:'/orderList'},
					{name:'发现',iconName:'icon-logistic',links:'/discover'},
					{name:'购物车',iconName:'icon-cart',links:'/cart'},
					{name:'我的',iconName:'icon-gerenzhongxin',links:'/mine'}
				]
			}
		},
		created(){
			
		}
	}
</script>

<style>
	.footBar .router-link-active{
		color: red;
	}
</style>