// JavaScript Document  //获取dom元素样式属性的。//获取对象obj 的样式，属性为 attr 的值；
function getStyle(obj, attr) {
	if (obj.currentStyle) {   //ie
		return obj.currentStyle[attr];
	} else {
		return window.getComputedStyle(obj, false)[attr];  //非ie
	}
}
/** 
把目标对象的指定的CSS属性，过渡到相应的值
1 目标对象， 2 指定CSS属性和目标值   3 回调函数
第一个参数，需要被移动或者被操作的对象（Dom元素）；
 第二个参数：
 {
 width:1000,
 heigth:400,
 left:300,
 top:100
 }
 第三个参数：回调函数；运动完成后，执行这个函数。

 */
//1. 清理之前的定时器。 2. 创建新定时器  ，
// 3. 定时器内部(循环执行的函数，js语句)
// 1）速度
// 2）需要把运动属性赋值，，和清理定时器的语句放在if else
function startMove(obj, json, fn) {
	clearInterval(obj.timer);   //先清除之前的定时器。分对象的。只关注当前对象是否有定时器。
	obj.timer = setInterval(function() {  //obj 对象；obj.timer 在对象上创建了一个动态属性。
		var isClear=true;//默认是true 是我最初目的，清理定时器
		for (attr in json) {
			//获取当前属性值  //兼容
			if (attr == 'opacity') {
				var iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				var iCur = Math.round(parseFloat(getStyle(obj, attr)));
			}
			//document.title = iCur;
			//计算速度
			var iSpeed = (json[attr] - iCur) / 80;
			iSpeed > 0 ? iSpeed = Math.ceil(iSpeed) : iSpeed = Math.floor(iSpeed);
			//iSpeed>0?iSpeed=Math.ceil(iSpeed):iSpeed=Math.floor(iSpeed);
			//判断停止
			if (iCur == json[attr]) { //当前属性等于 目标值，运动可以结束。
				//currentCount++;
				/*clearInterval(obj.timer); //清理当前对象下面的定时器
				if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
					fn();
				}*/
			} else { //兼容
				isClear=false;// 有运动未完成。 变更标识isClear ，不能清理。
				if (attr == 'opacity') {
					obj.style.filter = 'alpha(opacity:' + parseInt(iCur + iSpeed) + ')';
					obj.style.opacity = (iCur + iSpeed) / 100;
				} else {
					obj.style[attr] = (iCur + iSpeed) + 'px';
				}
			}
		}
		if(isClear){ //如果当前达到目标值得 个数（currentCount）；与所有属性的个数（totalCount）相等；
			//也就表示 所有运动结束。
			clearInterval(obj.timer); //清理当前对象下面的定时器
			if (fn) {//如果fn有的话，为真。 //当完成运动的时候，如果有回调函数，则执行回调函数
				fn();
			}
		}
	}, 30);
}
//原理，每次执行一轮属性