<template >
	<transition name="fade">
	  <div class="index">
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
		<menu-bar></menu-bar>
	    <div class="smp-ad">
			<ul class="ad-list">
				<li class="ad-item">
					<a href="#">
						<img class="" src="https://m.360buyimg.com/mobilecms/jfs/t5635/181/9760687193/67974/966811b/598aaf7bNb8531dc9.jpg!q70.jpg" alt="" />
					</a>
				</li>
			</ul>
		</div>
	    <list-info></list-info>
	    <foot-bar></foot-bar>
	    <back-top></back-top>
	  </div>
  </transition>
</template>

<script>
	import myHeader from '../components/header'
	import footBar from '../components/footBar'
	import menuBar from '../components/menu'
	import listInfo from '../components/listInfo'
	import backTop from '../components/backTop'
	import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css'
	import {l_store} from '../config/mUtil'
	import route from '../router/index'
	
	
	export default {
	  components:{myHeader,footBar,menuBar,listInfo,backTop},
	  name:'Index',
	  data () {
	    return {
    	  login:'login',
	      msg: '首页',
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
	      ],
	      dataList:''
	    }
	  },
	  route: {
        data: function (transition) {
            this.getUserDetails(transition);
        }
      },
	  created(){
	  	var token = l_store.getStore('token');
	  	if(token){
	  		this.login = 'myInfo';
	  		this.userImg = l_store.getStore('userImg');
	  	}
	  	this.getData();
	  },
	  mounted(){
	  	this.lunbo();
	  },
	  methods:{
	  	lunbo(){
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
	  	},
	  	getUserDetails(transition){
	  		console.log('haha');
	  		console.log(transition);
	  	},
	  	getData(){//ajax获取数据
	  		console.log('加载数据');
	  	},
	  	scrollFix(){
	  		window.addEventListener('scroll',function(){
	  			
	  		});
	  	}
	  }
	}
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.fade-enter-active{
	  transition: opacity .5s
	}
	.fade-enter/* .fade-leave-active in below version 2.1.8 */ {
	  opacity: 0
	}

</style>
