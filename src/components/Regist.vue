<template>
  <div class="login">
  	<my-header isBack="true" v-bind:type="login" title="注册"></my-header>
		<img class="headImg" src="../assets/smp.png">
    <form class="smp-form">
			<div class="form-group" >
				<input type="tel" maxlength="11" v-model="registPhone" class="radius" autofocus placeholder="请输入电话号码"/>
			</div>
			<div class="form-group identify">
				<input type="tel" maxlength="8" v-model="registCode" class="radius identify-code" name="" id="" placeholder="请输入验证码"/>
				<label class="small-btn radius btn-warning send-code" @click="getCode" id="send-code">{{btnText}}</label>
			</div>
			<div class="form-group" v-bind:class="textAlign">
				<router-link to="/login">点击登录</router-link>
			</div>
			<input type="button" @click="regist" class="btn btn-info" autofocus value="注册"/>
		</form>
  </div>
</template>

<script>
	import myHeader from './header'
	export default {
		components:{myHeader},
	  name: 'Regist',
	  data () {
	    return {
	    	registPhone:'',//注册号码
	    	registCode:'',//注册验证码
	    	btnText:'获取验证码',
	    	setTime:3,
	    	isClick:true,//是否可以点击
	    	login:'back',
	      userName: '小明',
	      textAlign:'textRight'
	    }
	  },
	  methods:{
	  	regist:function(){//注册
	  		console.log('电话号码：'+this.registPhone+'验证码：'+this.registCode);
	  	},
	  	getCode:function(){//获取验证码
	  		
	  		var _this = this;
	  		var isClick = _this.isClick;//是否可以点击
	  		console.log(isClick);
	  		if(isClick){
	  			var time = _this.setTime;
		  		var flag = false;//是否消息发送成功
		  		
		  		var timer = setInterval(function(){
		  			console.log('time'+time);
		  			_this.btnText= time+'秒后再发送';
		  			_this.isClick = false;
		  			if(flag||time<1){
		  				_this.btnText= '重新发送';
		  				_this.isClick = true;
		  				clearInterval(timer);
		  			}
		  			
		  			time--;
		  		},1000);
	  		}
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.textLeft{
		text-align: left;
	}
	.textRight{
		text-align: right;
	}
	.headImg{
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: 1px solid #e0e0e0;
		box-sizing: border-box;
		padding: .35rem;
	}
	label.rows{
		text-align: left;
	}
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
