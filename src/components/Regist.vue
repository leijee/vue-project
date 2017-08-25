<template>
  <div class="login">
		<img class="headImg" src="../assets/logo.png">
    <h3 class="">{{ userName }}</h3>
    <form class="smp-form">
			<div class="form-group" >
				<input type="tel" maxlength="11" class="radius" autofocus placeholder="请输入电话号码"/>
			</div>
			<div class="form-group identify">
				<input type="tel" maxlength="8" class="radius identify-code" name="" id="" placeholder="请输入验证码"/>
				<label class="small-btn radius btn-warning send-code" id="send-code">获取验证码</label>
			</div>
			<div class="form-group" v-bind:class="textAlign">
				<router-link to="/login">点击登录</router-link>
			</div>
			<input type="submit" class="btn btn-info" autofocus value="注册"/>
		</form>
  </div>
</template>

<script>
export default {
  name: 'Regist',
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
