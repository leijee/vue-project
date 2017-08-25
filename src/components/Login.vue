<template>
  <div class="login">
  	<my-header isBack="true" v-bind:type="login" title="登录"></my-header>
		<img class="headImg" v-bind:src="userImg">
    <h3 class="">{{ userName }}</h3>
    <form class="smp-form">
			<div class="form-group" >
				<input type="text" v-model="userAccount" class="radius" autofocus placeholder="请输入用户名"/>
				<span class="tipInfo">{{accountTip}}</span>
			</div>
			<div class="form-group">
				<input type="password" v-model="password" class="radius"  maxlength="12" autofocus placeholder="请输入6-12位的密码"/>
				<span class="tipInfo">{{passwordTip}}</span>
			</div>
			<div class="form-group" v-bind:class="textAlign">
				<router-link to="/regist">点击注册</router-link>
			</div>
			<input type="button" @click="toLogin" class="btn btn-info" autofocus value="登录"/>
		</form>
  </div>
</template>

<script>
	import myHeader from './header'
	import {l_store,checkLogin} from '../config/mUtil'
	export default {
		components:{myHeader},
	  name: 'Login',
	  data () {
	    return {
	    	login:'back',//登录状态(登录页，显示返回首页)
	      userName: '小明',//用户名
	      textAlign:'textRight',
	      userAccount:'',//账号
	      password:'',//密码
	      defaultAccount:'leijie',//默认账号
	      defaultPassword:'123456',//默认密码
	      accountTip:'',
	      passwordTip:'',
	      userImg:'http://img3.imgtn.bdimg.com/it/u=1619715016,1553587065&fm=214&gp=0.jpg'
	    }
	  },
	  beforeCreate(){//创建之前
	  	checkLogin.isLogin(this);
	  },
  	mounted(){
  		console.log(this.$route);
  	},
	  methods:{
	  	toLogin:function(){
	  		var defaultAcc = this.defaultAccount;
	  		var defaultPwd = this.defaultPassword;
	  		var acc = this.userAccount;
	  		var pwd = this.password;
	  		if(acc==""){
	  			if(pwd != ""){
	  				this.passwordTip = '';
	  			}
	  			this.accountTip = '请输入账号';
	  			return ;
	  		}else{
	  			this.passwordTip = '';
	  		}
	  		if(pwd==""){
	  			if(acc != ""){
	  				this.accountTip = '';
	  			}
	  			this.passwordTip = '请输入密码';
	  			return ;
	  		}else{
	  			this.passwordTip = '';
	  		}
	  		if(defaultAcc == acc){
	  			if(defaultPwd == pwd){
	  				console.log("登录成功");
	  				var token = 'hasLogin';
	  				l_store.setStore('token',token);
	  				l_store.setStore('userName',this.userName);
	  				l_store.setStore('userImg',this.userImg);
	  				l_store.setStore('userAccount',this.userAccount);
	  				l_store.setStore('userPassword',this.userPassword);
	  				this.$router.push({ path: 'first'});//编程式跳转,(<route-link to>声明式跳转.路由两种跳转方式)
	  				this.accountTip = '';
	  				this.passwordTip = '';
	  			}else{
	  				this.passwordTip = '密码错误';
	  				console.log("密码错误");
	  			}
	  		}else{
	  			this.accountTip = '账号不存在';
	  			console.log('账号不存在');
	  		}
	  	}
	  }
	  
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	
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
		margin-top: .5rem;
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
