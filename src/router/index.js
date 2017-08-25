import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import First from '@/components/First'
import Second from '@/components/Second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path:'/first',
    	name:'First',
    	component:First
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
    }
  ]
})
