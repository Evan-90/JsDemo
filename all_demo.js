//网站常见的特效JavaScript代码

function $(id) {
	//对id进行封装
	 return typeof id=='string'?document.getElementById(id):id;
}
window.onload=function () {

}

//1：选项卡
function tabe() {
	 var lis=$('notext').getElementsByTagName('li'),
	     divs=$('notext').getElementsByTagName('div');
	     for(var i = 0; i < lis.length; i++){
	     	lis[i].id=i;
	     	lis[i].onmouseover=function () {
	     		 for(var j = 0; i < lis.length; j++){
	     		  	lis[j].className='';
	     		  	divs[j].style.display = 'none';
	     		  }
	     		  this.className='lihover';
	     		  divs[this.id].style.display = 'block';
	     	}
	     }
}

//2：有延时效果的选项卡
function tabes() {
	 var lis=$('notext').getElementsByTagName('li'),
	     divs=$('notext').getElementsByTagName('div'),
	     timer=null;
	     for(var i = 0; i < lis.length; i++){
	     	lis[i].onmouseover=function () {
	     		 if (timer) {
	     		 	clearTimeout(timer);
	     		 	timer=null;
	     		 }
	     		 var that=this;
	     		 timer=setTimeout(function () {
	     		 	 for(var j = 0; i < lis.length; j++){
	     		  	   lis[j].className='';
	     		  	   divs[j].style.display = 'none';
	     		     }
	     		     that.className='lihover';
	     		     divs[taht.id].style.display = 'block';
	     		 }, 500)
	     	}
	     }
}

//3：轮播图+选项
function banner () {
	 var lis=$('notext').getElementsByTagName('li'),
	     divs=$('notext').getElementsByTagName('div'),
	     timer=null,index=0;
	     if (lis.length!==divs.length) {
	     	return;
	     }
	 timer=setInterval(function () {
	 	clearInterval(timer);
	 	 index++;
	 	 if (index>=lis.length) {
	 	 	index=0;
	 	 }
	 	 move(index);
	 }, 3000)
	 for(var i = 0; i < lis.length; i++){
	     	lis[i].id=i;
	     	lis[i].onmouseover=function () {
	     		 clearInterval(timer);
	     		 move(this.id);
	     	}
	     }
	function move(itargets) {
	     	 for(var j = 0; i < lis.length; j++){
	     		  	lis[j].className='';
	     		  	divs[j].style.display = 'none';
	     		  }
	     		  lis[itargets].className='lihover';
	     		  divs[itargets].style.display = 'block';
	     		  index=itargets;
	     }
}

//4：侧边窗口均速滑出滑入（均速动画）
function banner1() {
	 var lis=$('notext'),
	     timer=null,speed=0;
     lis.onmouseover=function () {
     	 starMove(0);
     }
     lis.onmouseout=function () {
     	 starMove(-200);
     }
     function starMove(itargets) {
     	 clearInterval(timer);
     	 timer=setInterval(function () {
     	 	 if (lis.offsetLeft<itargets) {
     	 	 	speed=10;
     	 	 }else {
     	 	 	speed=-10;
     	 	 }
     	 	 if (lis.offsetLeft==0) {
     	 	 	clearInterval(timer);
     	 	 }else {
     	 	 	lis.style.left=lis.offsetLeft+speed+'px';
     	 	 }
     	 }, 30)
     }
}

//5：侧边窗口变速滑出滑入（非均速动画）
function banner2() {
	 var lis=$('notext'),
	     timer=null,speed=0;
     lis.onmouseover=function () {
     	 starMove(0);
     }
     lis.onmouseout=function () {
     	 starMove(-200);
     }
     function starMove(itargets) {
     	 clearInterval(timer);
     	 timer=setInterval(function () {
     	 	 speed=(itargets-lis.offsetLeft)/20;
     	 	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
     	 	 if (lis.offsetLeft==0) {
     	 	 	clearInterval(timer);
     	 	 }else {
     	 	 	lis.style.left=lis.offsetLeft+speed+'px';
     	 	 }
     	 }, 30)
     }
}
//6：多div变速+-宽度（非均速多动画）
function banner3() {
	 var lis=$('notext').getElementsByTagName('li'),
	 var timer=null,speed=0;
	 for(var i = 0; i < lis.length; i++){
	 	lis[i].timer=null;
	 	lis[i].onmouseover=function () {
	 		 starMove(this,400);
	 	}
	 	lis[i].onmouseout=function () {
	 		 starMove(this,200);
	 	}
	 	function starMove(obj,targets) {
	 		 clearInterval(obj.timer);
     	 obj.timer=setInterval(function () {
     	 	 speed=(itargets-obj.offsetLeft)/20;
     	 	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
     	 	 if (obj.offsetLeft==200) {
     	 	 	clearInterval(obj.timer);
     	 	 }else {
     	 	 	obj.style.left=obj.offsetLeft+speed+'px';
     	 	 }
     	 }, 30)
	 	}
	 }
}

//7：getStyle()获取元素样式当前值（offsetLeft类似，and相关de bug）
function starMo() {
	 setInterval(function () {
	 	 var oDiv=document.getElementById('div');
	 	 oDiv.style.width=parseInt(getStyle(oDiv,'width'))-1+'px';
	 	 //oDiv.style.fontSize=parseInt(getStyle(oDiv,'fontSize'))+1+'px';
	 }, 30)
}
//getStyle()方法封装  值：obj对象，attr属性-返回属性值
function getStyle(obj,attr) {
	 if (obj.currentStyle) {
	 	return obj.currentStyle[attr];
	 }
	 else {
	 	return getComputedStyle(obj,false)[attr];
	 }
}

//6和7结合 debug解决方案  2个不同样式动画（多动画）包括处理透明度bug方案
function banner3() {
	 var lis=$('notext').getElementsByTagName('li'),
	 var timer=null,speed=0;

	 	lis[1].timer=null；lis[1].timer=null；
	 	lis[1].onmouseover=function () {
	 		 starMove(this,'weith',400);
	 	}
	 	lis[1].onmouseout=function () {
	 		 starMove(this,'weith',200);
	 	}
	 	lis[2].onmouseover=function () {
	 		 starMove(this,'height',400);
	 	}
	 	lis[2].onmouseout=function () {
	 		 starMove(this,'height',200);
	 	}
	 	function starMove(obj,attr,targets) {
	 		if (attr==opacity) {
	 			var icur=Math.round(parsefloat(getStyle(oDiv,attr))*100);//Math.round()数字四舍五入取整
	 		}else {
	 			var icur=parseInt(getStyle(oDiv,attr));
	 		}

	 		 clearInterval(obj.timer);
     	 obj.timer=setInterval(function () {
     	 	 speed=(itargets-icur)/20;
     	 	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
     	 	 if (icur==200) {
     	 	 	clearInterval(obj.timer);
     	 	 }else {
     	 	 	if (attr==opacity) {
     	 	 		obj.style[attr]=(icur+speed)/100;
     	 	 		obj.style.filter='alpha(opacity:'+(icur+speed)+')';
     	 	 	}else {
     	 	 		obj.style[attr]=icur+speed+'px';
     	 	 	}

     	 	 }
     	 }, 30)
	 	}

}
function getStyle(obj,attr) {
	 if (obj.currentStyle) {
	 	return obj.currentStyle[attr];
	 }
	 else {
	 	return getComputedStyle(obj,false)[attr];
	 }
}
