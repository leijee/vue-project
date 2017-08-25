import

<template>
  <div class="first">
  	<my-header title="首页" v-bind:type="login" v-bind:userImg="userImg" isShow="true"></my-header>
  	<div class="swiper-container" style="height: 6rem;">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in detail">
            	<a v-bind:href="str.href" target="_blank">
            		<img v-bind:src="str.img" style="height: 6rem;width: 100%;" alt="" />
            	</a>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>

    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>页面1</h3>
  </div>
</template>

<script>
	import myHeader from './header'
	import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
	import {l_store} from '../config/mUtil'
	export default {
		components:{myHeader},
	  name: 'First',
	  data () {
	    return {
	    	login:'login',
	      msg: 'firstPage',
	      loginStatus:'登陆',
	      userImg:'',
	      detail:[
	      	{
	      		img:'https://img1.360buyimg.com/da/jfs/t7384/238/319027687/89622/17c5fec5/59916f0cN38de44c3.jpg',
	      		href:'#1'
	      	},
	      	{
	      		img:'http://upload-images.jianshu.io/upload_images/1348788-f1473d49b3233f98.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
	      		href:'#2'
	      		},
	      	{
	      		img:'https://m.360buyimg.com/mobilecms/s720x322_jfs/t7159/17/2024559098/189326/5e210f08/59916719N8fb333b3.jpg!q70.jpg',
	      		href:'#3'
	      	}
	      ]
	    }
	  },
	  beforeCreate(){
	  	
	  },
	  created(){
	  	console.log('test');
	  	var token = l_store.getStore('token');
	  	if(token){
	  		this.login = 'myInfo';
	  		this.userImg = l_store.getStore('userImg');
	  	}
	  },
	  beforeRouter(to,from,next){
	  	console.log('from');
	  },
	  mounted(){
	  	this.lunbo();
	  },
	  methods:{
	  	lunbo(){
	  		console.log('测试一下');
	  		var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: false,
                speed: 600,
                autoplay: 3000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
           });
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
