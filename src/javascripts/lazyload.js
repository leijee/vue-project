//Vue 图片懒加载
export default (Vue , options = {})=>{
  if(!Array.prototype.remove){
    Array.prototype.remove = function(item){
      if(!this.length) return;
      var index = this.indexOf(item);
      if( index > -1){
        this.splice(index,1);
        return this
      }
    }
  }
  var init = {
    lazyLoad: false,
  　　default: 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png'
  }
  var listenList = [];
  var imageCatcheList = [];
 
  var isAlredyLoad = function(imageSrc){
    if(imageCatcheList.indexOf(imageSrc) > -1){
      return true;
    }else{
      return false;
    }
  }
  //图片出现在可视区域显示
  var isCanShow = function(item){
    var ele = item.ele;
    var src = item.src;
    var top = parseInt(ele.getBoundingClientRect().top);
    var windowHeight = parseInt(window.innerHight);
    if(top+10 < window.innerHeight){
      var image = new Image();
      image.src = src;
      image.onload = function(){
        ele.src = src;
        imageCatcheList.push(src);
        listenList.remove(item);
      }
      return true;
    }else{
      return false;
    }
  };
 
  var onListenScroll = function(){
    window.addEventListener('scroll',function(){
      var length = listenList.length;
      for(let i = 0;i<length;i++ ){
        isCanShow(listenList[i]);
      }
    })
  }
 
  var addListener = function(ele,binding){
    var imageSrc = binding.value;
    if(isAlredyLoad(imageSrc)){//
      ele.src = imageSrc;
      return false;
    }
    var item = {
      ele:ele,// 当前img元素
      src:imageSrc//src 属性值
    }
    ele.src = init.default;//图片没加载,默认显示的图
    if(isCanShow(item)){//是否将当前图片显示出来,替换默认图
      return;
    }
    listenList.push(item);
    onListenScroll();
  }
 
  Vue.directive('lazyload',{
    inserted:addListener,
    updated:addListener
  });
}
