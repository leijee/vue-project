<template>
  <div class="login">
		<img class="headImg" src="../assets/logo.png">
    <h3 class="">{{ userName }}</h3>
    <form class="smp-form">
			<div class="form-group" >
				<input type="text" class="radius" autofocus placeholder="请输入用户名"/>
			</div>
			<div class="form-group">
				<input type="password" class="radius"  maxlength="12" autofocus placeholder="请输入6-12位的密码"/>
			</div>
			<div class="form-group" v-bind:class="textAlign">
				<router-link to="/regist">点击注册</router-link>
			</div>
			<input type="submit" class="btn btn-info" autofocus value="登录"/>
		</form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userName: '小明',
      textAlign:'textRight'
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
