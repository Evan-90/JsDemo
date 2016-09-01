function myReady(fn) {
	//对于现代浏览器对DOMContentLoaded事件的处理采用标准的事件绑定方式
	if (document.addEventListener) {
		document.addEventListener('DOMContentLoaded', fn , false);
	} else {
		IEContentLoaded(fn);
	}
	 /* IE模拟DOMContentLoaded */
	 function IEContentLoaded(fn) {
	 	 var d=window.document;
	 	 var done=false;
	 	 //只执行一次用户的函数回调init()
	 	 var init=function () {
	 	 	 if (!done) {
	 	 	 	done=true;
	 	 	 	fn();
	 	 	 }
	 	 };
	 	 (function () {
	 	 	 try {
	 	 	 	// DOM树没创建之前调用doScroll会抛出错误
	 	 	 	d.documentElement.doScroll('left');
	 	 	 } catch(e) {
	 	 	 	setTimeout(arguments.callee, 50);
	 	 	 	return;
	 	 	 }
	 	 	 //直到dom树创建完毕，然后马上执行回调函数
	 	 	 init();
	 	 })();
	 	 //监听document加载状态
	 	 d.onreadystatechange=function () {
	 	 	 //如果用户是在domready之后绑定的函数就立马执行
	 	 	 if (d.readyState=='complete') {
	 	 	 	d.onreadystatechange=null;
	 	 	 	init();
	 	 	 }
	 	 }
	 }
}
