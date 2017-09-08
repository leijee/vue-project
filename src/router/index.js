import Vue from 'vue'
import Router from 'vue-router'
import Ad from '@/components/Ad'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Index from '@/views/Index'
import Second from '@/components/Second'
import MyInfo from '@/components/MyInfo'
import OrderList from '@/components/orderList/OrderList'
import Mine from '@/components/mine/Mine'
import Discover from '@/components/discover/Discover'
import Cart from '@/components/cart/Cart'

Vue.use(Router)

export default new Router({
	name:'route',
    routes: [
    {
      path: '/',
      name: 'Ad',
      component: Ad
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/index',
    	name:'Index',
    	component:Index
    },
    {
    	path:'/second',
    	name:'Second',
    	component:Second
    },
    {
    	path:'/regist',
    	name:'Regist',
    	component:Regist
    },
    {
    	path:'/myInfo',
    	name:'MyInfo',
    	component:MyInfo
    },
    {
    	path:'/orderList',
    	name:'OrderList',
    	component:OrderList
    },
    {
    	path:'/mine',
    	name:'Mine',
    	component:Mine
    },
    {
    	path:'/cart',
    	name:'Cart',
    	component:Cart
    },
    {
    	path:'/discover',
    	name:'Discover',
    	component:Discover
    }
  ]
})
