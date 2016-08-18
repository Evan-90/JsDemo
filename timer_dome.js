function starMove(obj,json,spee,fn) {
           var flag;
	      clearInterval(obj.timer);
     	 obj.timer=setInterval(function () {
            for(var attr in json){
               //取当前值
               icur=0;
               if (attr=='opacity') {
                    icur=Math.round(parseFloat(getStyle(obj,attr))*100);//Math.round()数字四舍五入取整
               }else {
                    icur=parseInt(getStyle(obj,attr));
               }
     	 	 var speed=(json[attr]-icur)/spee;
     	 	 speed=speed>0?Math.ceil(speed):Math.floor(speed);
                //检测是否停止
     	 	 if (icur!=json[attr]) {
     	 	 	flage=false;
                 }
     	 	 if (attr=='opacity') {
                         obj.style[attr]=(icur+speed)/100;
                         obj.style.filter='alpha(opacity:'+(icur+speed)+')';
                    }else {
                         obj.style[attr]=icur+speed+'px';
                    }
               }
               if (flag) {
                    clearInterval(obj.timer);
                    if (fn) {
                         fn();
                    }
               }
     	 }, 30)
}
function getStyle(obj,attr) {
	 if (obj.currentStyle) {
	 	return obj.currentStyle[attr];
	 }
	 else {
	 	return getComputedStyle(obj,false)[attr];
	 }
}
