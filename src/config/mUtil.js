/**
 * Created by 59245 on 2017/5/3.
 */

/**
 *存储localstorage
 **/
export const setStore= (name,content) =>{
  if(!name) return ;
  if(typeof content!=='string'){
    content=JSON.stringify(content);
  }
  window.localStorage.setItem(name,content);
}
/**
 *获取localstorage
 **/
export const getStore= (name) =>{
  if(!name)return;
  return window.localStorage.getItem(name);
}
/**
 *删除localstorage
 **/
export const removeStore = (name) =>{
  if(!name)return;
  window.localStorage.removeItem(name);
}
/**
 *获取style样式
 **/
export const getStyle = (element,attr,NumberMode = 'int') => {
  let target;
  if (attr ==='scrollTop'){
    target = element.scrollTop;
  }else if(element.currentStyle){
    target=element.currentStyle[attr];
  }else{
    target = document.defaultView.getComputedStyle(element,null)[attr];
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode == 'float'? parseFloat(target) : parseInt(target);
}
/**
 *页面达到底部加载更多
 **/
export const loadMore = (element,callback) =>{
  let windowHeight = window.screen.height;
  let height;
  let setTop;
  let paddingBottom;
  let marginBottom;
  let requestFram;
  let oldScrollTop;
  document.body.addEventListener('scroll',() => {
    loadMore();
  },false);

}
