/**
 * Created by 59245 on 2017/8/25
 */
let  local_storage= window.localStorage;
export const l_store = {
	setStore:function(name,content){
		if(!name) return ;
	  if(typeof content!=='string'){
	    content=JSON.stringify(content);
	  }
	  local_storage.setItem(name,content);
	},
	getStore:function(name){
		if(!name)return;
  		return local_storage.getItem(name);
	},
	removeStore:function(name){
		if(!name)return;
  		local_storage.removeItem(name);
	},
	removeAll:function(){//清除全部
		local_storage.clear();
	}
}
export const checkLogin = {
	isLogin:function(self){
		var token = l_store.getStore('token');
	  	console.log(token);
	  	if(token){//如果已登录，跳转
	  		self.$router.push({path:'/index'});
	  	}
	}
}
